const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


const pcodeToSporki: { [key: string]: string } = {
  '64001':'11308',
  '69032': '13942',
  // 추가적인 매핑을 여기에 추가합니다.
};

// query를 pcode로 변환하는 함수
function convertPcodeToSporkiPcode(query: string): string | undefined {
  return pcodeToSporki[query];
}
// 기존 인터페이스
interface PitchData {
  pitchRate: { [key: string]: number };
  pitchValue: { [key: string]: number };
}

interface IncomeData {
  year: string;
  salary: number;
  war: number;
}

interface PlayerInfo {
  '등번호': string;
  '이름': string;
  '투타': string;
  '생년월일': string;
  '체격': string;
  '출신교': string;
  '프로데뷔 연도': string;
}

interface PlayerData {
  pitchRate: { [key: string]: number };
  pitchValue: { [key: string]: number };
  incomeData: IncomeData[];
  playerInfo: PlayerInfo;
}

// 구종별 던지는 비율 및 가치를 추출하는 함수
async function fetchPitchData(query: string): Promise<PitchData> {
  const url = `https://statiz.sporki.com/player/?m=playerinfo&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const pitchRate: { [key: string]: number } = {}; // 던지는 비율 결과 객체
  const pitchValue: { [key: string]: number } = {}; // 가치를 저장할 객체

  // 구종별 던지는 비율 파싱
  $(".pace .ball_tit").each((_:any, el:any) => {
    const title: string = $(el).contents().first().text().trim();
    const pitchText: string = $(el).find("span").text().trim();
    const match = pitchText.match(/(\d+(\.\d+)?)%/); // 정규 표현식으로 % 값 추출

    if (match) {
      const percentage: number = parseFloat(match[1]); // % 값 숫자로 변환
      pitchRate[title] = percentage; // 결과 객체에 저장
    }
  });

  // 구종 가치 파싱
  const scriptTagContent: string | null = $('script:contains("radar-chart")').html();
  if (scriptTagContent) {
    // 정규 표현식으로 레이블과 데이터를 추출
    const labelsMatch = scriptTagContent.match(/labels:\s*\[([^\]]+)\]/);
    const dataMatch = scriptTagContent.match(/data:\s*\[([^\]]+)\]/);

    if (labelsMatch && dataMatch) {
      const labelsString: string = labelsMatch[1];
      const dataString: string = dataMatch[1];

      const labels: string[] = labelsString
        .split(",")
        .map((label) => label.trim().replace(/['"]+/g, ""));
      const pitchValues: number[] = dataString.split(",").map((value) => parseFloat(value.trim()));

      labels.forEach((label, index) => {
        pitchValue[label] = pitchValues[index];
      });
    }
  }

  return { pitchRate, pitchValue };
}

// 연봉 데이터 크롤링 함수
async function fetchIncomeData(query: string): Promise<IncomeData[]> {
  const url = `https://statiz.sporki.com/player/?m=income&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const incomeData: IncomeData[] = [];

  // 연봉 데이터 파싱
  $(".table_type03 tbody tr").each((_:any, el:any) => {
    const year: string = $(el).find("td").eq(0).text().trim();
    const salary: number = parseInt($(el).find("td").eq(1).text().replace(/,/g, "").trim(), 10);
    const war: number = parseFloat($(el).find("td").eq(2).text().trim());

    incomeData.push({ year, salary, war });
  });

  // 가장 최근 5개년치 데이터만 반환
  return incomeData.slice(-5);
}

// 선수 정보 크롤링 함수
async function fetchPlayerInfo(pcode: string): Promise<PlayerInfo> {
  // 브라우저와 페이지를 생성합니다.
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 원하는 URL로 페이지를 이동합니다.
  await page.goto(`https://www.ktwiz.co.kr/player/pitcher/detail?pcode=${pcode}`, { waitUntil: 'networkidle2' });
  
  // 필요한 데이터 추출을 위해 페이지에서 JavaScript 실행합니다.
  const playerInfo: PlayerInfo = await page.evaluate(() => {
    const info: { [key: string]: string } = {};
    
    // 선수 정보를 담고 있는 dl 태그를 찾습니다.
    const playerInfoHeader = document.querySelector('dl.player_info dt') as HTMLElement;
    if (playerInfoHeader) {
      // '등번호 이름 투타' 형식의 문자열을 가져옵니다.
      const textContent = playerInfoHeader.innerText.trim();
      const parts = textContent.split('\n');

      // 등번호, 이름, 투타를 분리하여 info 객체에 저장합니다.
      info['등번호'] = parts[0].replace('No. ', '').trim();
      info['이름'] = parts[1].trim();
      info['투타'] = parts[2] ? parts[2].replace('(', '').replace(')', '').trim() : '정보없음';
    }

    const data = document.querySelectorAll('dl.player_info dd.info_list_wrap ul li');
    
    data.forEach(item => {
      const key = item.querySelector('dt')?.innerText.trim();
      const value = item.querySelector('dd')?.innerText.trim();
      
      if (key && value) {
        // '출신교' 항목을 처리합니다.
        if (key === '출신교') {
          info[key] = value.replace('정보없음', '').trim();
        } else {
          info[key] = value.replace('정보없음', '').trim();
        }
      }
    });

    // '출신교' 항목에서 동국대를 포함시킵니다.
    const nativeElement = document.querySelector('li.native dd') as HTMLElement;
    const nativeInfo = nativeElement?.innerText.trim() || '정보없음';
    if (nativeInfo && nativeInfo.includes('-')) {
      info['출신교'] = nativeInfo;
    }

    // 결과 반환
    return {
      '등번호': info['등번호'] || '정보없음',
      '이름': info['이름'] || '정보없음',
      '투타': info['투타'] || '정보없음',
      '생년월일': info['생년월일'] || '정보없음',
      '체격': info['체격'] || '정보없음',
      '출신교': info['출신교'] || '정보없음',
      '프로데뷔 연도': info['프로데뷔 연도'] || '정보없음'
    };
  });

  // 브라우저를 닫습니다.
  await browser.close();
  
  return playerInfo;
}

// 테스트 함수
const testFetchPlayerInfo = async () => {
  const pcode = '64001'; // 선수 코드
  
  try {
    const result = await fetchPlayerInfo(pcode);
    console.log('Player Info:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

// 통합된 데이터 크롤링 함수
async function fetchPlayerData(pcode: string): Promise<PlayerData> {
  const sporkiPcode = convertPcodeToSporkiPcode(pcode);
  
  if (!sporkiPcode) {
    throw new Error(`Sporki pcode not found for pcode: ${pcode}`);
  }

  const [pitchData, incomeData, playerInfo] = await Promise.all([
    fetchPitchData(sporkiPcode),
    fetchIncomeData(sporkiPcode),
    fetchPlayerInfo(pcode),
  ]);

  return { ...pitchData, incomeData, playerInfo };
}


// 테스트 함수
const testFetchPlayerData = async () => {
  const pcode = '64001';
  
  try {
    const result = await fetchPlayerData(pcode);
    console.log('Pitch Rate Data:', result.pitchRate);
    console.log('Pitch Value Data:', result.pitchValue);
    console.log('Income Data:', result.incomeData);
    console.log('Player Info:', result.playerInfo);
  } catch (error) {
    console.error('Error:', error);
  }
};

// 테스트 함수 실행
testFetchPlayerData();

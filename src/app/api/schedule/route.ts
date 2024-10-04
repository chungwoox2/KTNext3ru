import { NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';

// 정의할 데이터 타입
interface Game {
  displayDate: string;
  home: string;
  visit: string;
  homeScore: string;
  awayScore: string;
  stadium: string; // 추가된 필드
  weatherIcon?: string; // 날씨 아이콘 (선택적)
  temperature?: number; // 온도 (선택적)
  precipitationProbability?: number; // 강수 확률 (선택적)
}

// 날짜를 `YYYYMMDD` 형식으로 변환하는 함수
function formatDate(year: string, month: string, day: string): string {
  const dayNumber = parseInt(day, 10);
  const formattedDay = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
  return `${year}${month}${formattedDay}`;
}

// 강수 확률에 따라 날씨 아이콘 결정 (예시)
function getWeatherIconByPrecipitation(precipitationProbability: number): string {
  if (precipitationProbability > 70) return 'rainy';
  if (precipitationProbability > 30) return 'cloudy';
  return 'sunny';
}

// 랜덤 날씨 데이터 생성 함수 (예시)
function getRandomTemperature(): number {
  return Math.floor(Math.random() * (35 - 10 + 1)) + 10;
}

function getRandomPrecipitationProbability(): number {
  return Math.floor(Math.random() * 101);
}

// GET 요청을 처리하는 핸들러
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const yearMonth = searchParams.get('yearMonth');

    if (!yearMonth || yearMonth.length !== 6) {
      return NextResponse.json({ error: 'Invalid yearMonth format. Expected format is YYYYMM.' }, { status: 400 });
    }

    const targetYear = yearMonth.substring(0, 4);
    const targetMonth = yearMonth.substring(4, 6);

    const fetchUrl = `https://statiz.sporki.com/schedule/?year=${targetYear}&month=${targetMonth}`;
    
    // 웹 페이지 요청
    const { data } = await axios.get(fetchUrl);
    
    // HTML 파싱
    const $ = cheerio.load(data);
    
    // 현재 날짜 구하기
    const now = new Date();
    const currentDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    
    // 경기 일정을 담을 배열
    const ktGames: Game[] = [];
    
    // tbody의 모든 tr 태그 순회
    $('tbody tr').each((_, row) => {
      // 각 tr에서 td 태그를 순회
      $(row).find('td').each((_, cell) => {
        const daySpan = $(cell).find('.day').text().trim();
        const gamesList = $(cell).find('.games ul li');

        // 날짜가 빈 문자열인 경우 넘어가기
        if (!daySpan) return;

        // KT 팀의 경기 정보가 있는 경우
        gamesList.each((_, game) => {
          const gameInfo = $(game).find('a');
          const teams = $(gameInfo).find('.team');
          const scores = $(gameInfo).find('.score');

          const home = $(teams[0]).text().trim();
          const visit = $(teams[1]).text().trim();
          const homeScore = $(scores[0]).text().trim();
          const awayScore = $(scores[1]).text().trim();

          // 경기장 정보 추출
          const stadium = $(gameInfo).find('.stadium').text().trim() || '정보없음';
          
          // KT가 포함된 경기 정보만 필터링
          if (home === 'KT' || visit === 'KT') {
            const displayDate = formatDate(targetYear, targetMonth, daySpan);
            
            // 기본 데이터
            const gameData: Game = {
              displayDate,
              home,
              visit,
              homeScore,
              awayScore,
              stadium,  // 추출한 경기장 정보 추가
            };

            // 현재 날짜 기준 필터링
            if (displayDate >= currentDate) {
              // 강수 확률을 설정하지 않았을 경우 랜덤 값을 생성
              const precipitationProbability = getRandomPrecipitationProbability();
              ktGames.push({
                ...gameData,
                weatherIcon: getWeatherIconByPrecipitation(precipitationProbability),
                temperature: getRandomTemperature(),
                precipitationProbability,
              });
            }
          }
        });
      });
    });

    // 성공적으로 결과 반환
    return NextResponse.json({ ktGames });
    
  } catch (error) {
    // 에러 발생 시 에러 메시지 반환
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

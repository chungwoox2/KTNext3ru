import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

// pcode와 sporki pcode 매핑
const pcodeToSporki: { [key: string]: string } = {
  "53006": "15527",
  "64001": "11308",
  "53049": "15521",
  "68043": "13167",
  "54094": "16029",
  "65048": "11317",
  "51097": "14869",
  "67419": "12885",
  "66047": "12572",
  "60559": "10737",
  "52060": "15089",
  "52043": "15143",
  "50109": "14667",
  "50030": "14600",
  "69041": "14108",
  "68067": "13173",
  "65056": "11318",
  "73117": "10523",
  "54063": "16027",
  "54064": "16028",
  "68093": "13172",
  "69054": "14109",
  "69068": "14111",
  "67048": "12937",
  "68896": "13130",
  "69623": "14179",
  "69047": "14106",
  "64768": "11284",
  "65060": "11323",
  "69032": "13942",
  "78517": "10304",
  "51058": "14776",
  // 추가적인 매핑을 여기에 추가합니다.
};

// query를 pcode로 변환하는 함수
function convertPcodeToSporkiPcode(query: string): string | undefined {
  return pcodeToSporki[query];
}

// PitchData 및 Salary 인터페이스 정의
interface PitchData {
  pitchingRatio: { [key: string]: number };
  pitchingValue: { [key: string]: number };
}

interface Salary {
  "2020": number;
  "2021": number;
  "2022": number;
  "2023": number;
  "2024": number;
}

interface PlayerInfo {
  backnum: string;
  playerName: string;
  hittype: string;
  birth: string;
  height: string;
  weight: string;
  career: string;
  debutYear: string;
}

interface PitchingMetrics {
  era: string;
  whip: string;
}

interface AdvancedPitchingMetrics {
  "k/9": string;
  "bb/9": string;
  avg: string;
}

interface PlayerData {
  pitchingRatio: { [key: string]: number };
  pitchingValue: { [key: string]: number };
  Salary: Salary; // 수정된 부분
  playerInfo: PlayerInfo;
  pitchingMetrics: PitchingMetrics;
}
// 구종명 영어 표준화 맵
const pitchNameMap: { [key: string]: string } = {
  "2-seam Fastball": "투심",
  "4-seam Fastball": "포심",
  Curve: "커브",
  Slider: "슬라이더",
  "Change up": "체인지업",
  Forkball: "포크볼",
  Cutter: "커터",
  "Etc ball": "",
  투심: "투심",
  포심: "포심",
  슬라이더: "슬라이더",
  커브: "커브",
  체인지업: "체인지업",
  포크볼: "포크볼",
  커터: "커터",
};

// 구종별 던지는 비율 및 가치를 추출하는 함수
async function fetchPitchData(query: string): Promise<PitchData> {
  const url = `https://statiz.sporki.com/player/?m=playerinfo&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const pitchingRatio: { [key: string]: number } = {};
  const pitchingValue: { [key: string]: number } = {};

  $(".pace .ball_tit").each((_: any, el: any) => {
    const title: string = $(el).contents().first().text().trim();
    const pitchText: string = $(el).find("span").text().trim();
    const match = pitchText.match(/(\d+(\.\d+)?)%/);

    if (match) {
      const percentage: number = parseFloat(match[1]);
      const standardizedTitle = pitchNameMap[title] || title;
      pitchingRatio[standardizedTitle] = percentage;
    }
  });

  const scriptTagContent: string | null = $('script:contains("radar-chart")').html();
  if (scriptTagContent) {
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
        const standardizedLabel = pitchNameMap[label] || label;
        pitchingValue[standardizedLabel] = pitchValues[index];
      });
    }
  }

  return { pitchingRatio, pitchingValue };
}

// 연봉 데이터 크롤링 함수
async function fetchIncomeData(query: string): Promise<Salary> {
  const url = `https://statiz.sporki.com/player/?m=income&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  // 연도별 연봉을 기본값 0으로 초기화
  const Salary: Salary = {
    "2020": 0,
    "2021": 0,
    "2022": 0,
    "2023": 0,
    "2024": 0,
  };

  $(".table_type03 tbody tr").each((_, el) => {
    const yearText = $(el).find("td").eq(0).text().trim();
    const salaryText = $(el).find("td").eq(1).text().replace(/,/g, "").trim();

    // 연도와 연봉 데이터 파싱
    const year = yearText;
    const salary = !isNaN(parseInt(salaryText, 10)) ? parseInt(salaryText, 10) : 0;

    // 유효한 연도와 연봉이 있는 경우 데이터 추가
    if (["2020", "2021", "2022", "2023", "2024"].includes(year)) {
      Salary[year as keyof Salary] = salary;
    }
  });

  return Salary; // 반환 값을 배열에서 객체로 변경
}

// 선수 정보 크롤링 함수
async function fetchPlayerInfo(pcode: string): Promise<PlayerInfo> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`https://www.ktwiz.co.kr/player/pitcher/detail?pcode=${pcode}`, {
    waitUntil: "networkidle2",
  });

  const playerInfo: PlayerInfo = await page.evaluate(() => {
    const info: { [key: string]: string } = {};

    // Get basic player information
    const playerInfoHeader = document.querySelector("dl.player_info dt") as HTMLElement;
    if (playerInfoHeader) {
      const textContent = playerInfoHeader.innerText.trim();
      const parts = textContent.split("\n");

      info["backnum"] = parts[0].replace("No. ", "").trim();
      info["playerName"] = parts[1].trim();
      info["hittype"] = parts[2] ? parts[2].replace("(", "").replace(")", "").trim() : "정보없음";
    }

    // Get additional player information
    const data = document.querySelectorAll("dl.player_info dd.info_list_wrap ul li");

    data.forEach((item) => {
      const key = item.querySelector("dt")?.innerText.trim();
      const value = item.querySelector("dd")?.innerText.trim();

      if (key && value) {
        switch (key) {
          case "출신교":
            info["career"] = value.replace("정보없음", "").trim();
            break;
          case "체격":
            // Split height and weight
            const [height, weight] = value.split(",").map((v) => v.trim());
            info["height"] =
              height && height.endsWith("cm") ? height.replace("cm", "").trim() : "정보없음";
            info["weight"] =
              weight && weight.endsWith("kg") ? weight.replace("kg", "").trim() : "정보없음";
            break;
          case "생년월일":
            let birth = value.replace("정보없음", "").trim();
            const parts = birth.split(".").map((part) => part.trim());
            if (parts.length === 3) {
              birth = `${parts[0]}${parts[1].padStart(2, "0")}${parts[2].padStart(2, "0")}`;
            } else {
              birth = "정보없음";
            }
            info["birth"] = birth;
            break;
          case "프로데뷔 연도":
            info["debutYear"] = value.replace("정보없음", "").trim();
            break;
          default:
            break;
        }
      }
    });

    return {
      backnum: info["backnum"] || "정보없음",
      playerName: info["playerName"] || "정보없음",
      hittype: info["hittype"] || "정보없음",
      birth: info["birth"] || "정보없음",
      height: info["height"] || "정보없음",
      weight: info["weight"] || "정보없음",
      career: info["career"] || "정보없음",
      debutYear: info["debutYear"] || "정보없음",
    };
  });

  await browser.close();

  return playerInfo;
}

async function fetchPitchingMetrics(query: string): Promise<PitchingMetrics> {
  const url = `https://statiz.sporki.com/player/?m=playerinfo&p_no=${query}`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  // Find the row for "올시즌" (current season)
  const tableBody = $("div.table_type03 table tbody");
  if (!tableBody.length) {
    return { era: "정보없음", whip: "정보없음" };
  }

  const currentSeasonRow = tableBody
    .find("tr")
    .filter((_, el) => {
      const firstCell = $(el).find("td").first();
      return firstCell.text().trim() === "올시즌";
    })
    .first();

  if (!currentSeasonRow.length) {
    return { era: "정보없음", whip: "정보없음" };
  }

  // Extract ERA and WHIP values from the row
  const cells = currentSeasonRow.find("td");

  // Get the column index for ERA and WHIP from the header
  const headerCells = $("div.table_type03 table thead tr th");

  const eraIndex = headerCells.toArray().findIndex((cell) => $(cell).text().trim() === "ERA");
  const whipIndex = headerCells.toArray().findIndex((cell) => $(cell).text().trim() === "WHIP");

  return {
    era: cells.eq(eraIndex)?.text().trim() || "정보없음",
    whip: cells.eq(whipIndex)?.text().trim() || "정보없음",
  };
}

// K/9, BB/9, AVG 데이터를 크롤링하는 함수
async function fetchAdvancedPitchingMetrics(query: string): Promise<AdvancedPitchingMetrics> {
  const url = `https://statiz.sporki.com/player/?m=year&m2=pitching&m3=deepen&p_no=${query}&lt=10100&gc=`;
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const tableBody = $("div.table_type02 tbody");
  if (!tableBody.length) {
    return { "k/9": "정보없음", "bb/9": "정보없음", avg: "정보없음" };
  }

  const rows = tableBody.find("tr");
  const latestSeasonRow = rows.last();

  const cells = latestSeasonRow.find("td");
  if (cells.length < 5) {
    return { "k/9": "정보없음", "bb/9": "정보없음", avg: "정보없음" };
  }

  // K/9, BB/9, AVG 데이터를 추출합니다.
  const kPerNine = cells.eq(5)?.text().trim() || "정보없음";
  const bbPerNine = cells.eq(6)?.text().trim() || "정보없음";
  const avg = cells.eq(24)?.text().trim() || "정보없음";

  return { "k/9": kPerNine, "bb/9": bbPerNine, avg };
}

// 통합된 데이터 크롤링 함수
async function fetchPlayerData(pcode: string): Promise<PlayerData> {
  const sporkiPcode = convertPcodeToSporkiPcode(pcode);

  if (!sporkiPcode) {
    throw new Error(`Sporki pcode not found for pcode: ${pcode}`);
  }

  // Measure time for fetchPitchData
  const pitchDataStart = performance.now();
  const pitchData = await fetchPitchData(sporkiPcode);
  const pitchDataEnd = performance.now();
  console.log(`fetchPitchData time: ${pitchDataEnd - pitchDataStart}ms`);

  // Measure time for fetchIncomeData
  const incomeDataStart = performance.now();
  const incomeData = await fetchIncomeData(sporkiPcode);
  const incomeDataEnd = performance.now();
  console.log(`fetchIncomeData time: ${incomeDataEnd - incomeDataStart}ms`);

  // Measure time for fetchPitchingMetrics
  const pitchingMetricsStart = performance.now();
  const pitchingMetrics = await fetchPitchingMetrics(sporkiPcode);
  const pitchingMetricsEnd = performance.now();
  console.log(`fetchPitchingMetrics time: ${pitchingMetricsEnd - pitchingMetricsStart}ms`);

  // Measure time for fetchAdvancedPitchingMetrics
  const advancedPitchingMetricsStart = performance.now();
  const advancedPitchingMetrics = await fetchAdvancedPitchingMetrics(sporkiPcode);
  const advancedPitchingMetricsEnd = performance.now();
  console.log(
    `fetchAdvancedPitchingMetrics time: ${
      advancedPitchingMetricsEnd - advancedPitchingMetricsStart
    }ms`
  );

  // Measure time for fetchPlayerInfo
  const playerInfoStart = performance.now();
  const playerInfo = await fetchPlayerInfo(pcode);
  const playerInfoEnd = performance.now();
  console.log(`fetchPlayerInfo time: ${playerInfoEnd - playerInfoStart}ms`);

  return {
    ...pitchData,
    Salary: incomeData,
    pitchingMetrics: {
      ...pitchingMetrics,
      ...advancedPitchingMetrics,
    },
    playerInfo,
  };
}

// GET 요청 처리
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pcode = searchParams.get("pcode");

  if (!pcode) {
    return NextResponse.json({ error: "pcode is required" }, { status: 400 });
  }

  try {
    const playerData = await fetchPlayerData(pcode);
    return NextResponse.json(playerData);
  } catch (error) {
    console.error("Error fetching player data:", error);
    return NextResponse.json({ error: "Failed to fetch player data" }, { status: 500 });
  }
}

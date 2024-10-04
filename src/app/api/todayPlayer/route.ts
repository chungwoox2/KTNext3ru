// src/app/api/todayPlayer/route.ts
import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

// BattingRecord 타입 정의
interface BattingRecord {
  순번: string;
  포지션: string;
  이름: string;
  기록: string[];
  타수: string;
  득점: string;
  안타: string;
  타점: string;
  타율: string;
}

async function fetchBattingRecords(url: string): Promise<BattingRecord[]> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  const records: BattingRecord[] = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(
        "div.catcher_record_wrap article div.table_wrap table tbody tr"
      )
    );

    return rows.map((row) => {
      const cells = Array.from(row.querySelectorAll("td")).map(
        (cell) => cell.textContent?.trim() || ""
      );
      return {
        순번: cells[0] || "",
        포지션: cells[1] || "",
        이름: cells[2] || "",
        기록: cells.slice(3, 15),
        타수: cells[15] || "",
        득점: cells[16] || "",
        안타: cells[17] || "",
        타점: cells[18] || "",
        타율: cells[19] || "",
      };
    });
  });

  await browser.close();

  return records;
}

// GET 메서드 처리 함수
export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryUrl = url.searchParams.get("url");

  if (!queryUrl) {
    return NextResponse.json(
      { error: "URL parameter is missing" },
      { status: 400 }
    );
  }

  try {
    const records = await fetchBattingRecords(queryUrl);
    return NextResponse.json(records);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch records" },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import cheerio from 'cheerio';

// 팀 순위 정보를 저장할 타입 정의
interface TeamRanking {
  rank: number;
  team: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  gamesBehind: number;
  winRate: number;
  runsScored: number;
  runsAllowed: number;
}

// GET 요청을 처리하는 핸들러
export async function GET(request: Request) {
  try {
    const fetchUrl = `https://statiz.sporki.com/`;

    // 웹 페이지 요청
    const response = await fetch(fetchUrl);
    const data = await response.text();
    
    // HTML 파싱
    const $ = cheerio.load(data);
    
    // 팀 순위를 담을 배열
    const teamRankings: TeamRanking[] = [];
    
    // tbody의 모든 tr 태그 순회
   // tbody의 모든 tr 태그 순회
$('tbody tr').each((_, row) => {
    const columns = $(row).find('td');

    // 순위 데이터 추출
    const rank = parseInt($(columns[0]).text().trim(), 10);
    
    // 팀명 데이터 추출
    const team = $(columns[1]).find('.rank_teams a').text().trim();

    // 경기수 데이터 추출
    const gamesPlayed = parseInt($(columns[2]).text().trim(), 10);
    
    // 승리수 데이터 추출
    const wins = parseInt($(columns[3]).text().trim(), 10);
    
    // 무승부수 데이터 추출
    const draws = parseInt($(columns[4]).text().trim(), 10);
    
    // 패배수 데이터 추출
    const losses = parseInt($(columns[5]).text().trim(), 10);
    
    // 승차 데이터 추출 (부동소수점)
    const gamesBehind = parseFloat($(columns[6]).text().trim());
    
    // 승률 데이터 추출 (부동소수점)
    const winRate = parseFloat($(columns[7]).text().trim());
    
    // 득점 데이터 추출
    const runsScored = parseInt($(columns[8]).text().trim(), 10);
    
    // 실점 데이터 추출
    const runsAllowed = parseInt($(columns[9]).text().trim(), 10);

    // 팀 순위 정보를 배열에 추가 (유효성 검사 포함)
    if (!isNaN(rank) && team && !isNaN(gamesPlayed) && !isNaN(wins) && !isNaN(draws) && 
        !isNaN(losses) && !isNaN(gamesBehind) && !isNaN(winRate) && 
        !isNaN(runsScored) && !isNaN(runsAllowed)) {
        
        teamRankings.push({
            rank,
            team,
            gamesPlayed,
            wins,
            draws,
            losses,
            gamesBehind,
            winRate,
            runsScored,
            runsAllowed,
        });
    } else {
        console.error('Data parsing error:', { rank, team, gamesPlayed, wins, draws, losses, gamesBehind, winRate, runsScored, runsAllowed });
    }
});


    // 성공적으로 결과 반환
    return NextResponse.json({ teamRankings });
    
  } catch (error) {
    // 에러 발생 시 에러 메시지 반환
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

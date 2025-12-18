import { NotionAPI } from "notion-client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json({ error: "PageID를 주세요" }, { status: 400 });
  }

  try {
    const notion = new NotionAPI();
    const recordMap = await notion.getPage(pageId);

    return NextResponse.json(recordMap);
  } catch (error) {
    console.error("에러:", error);
    return NextResponse.json(
      { error: "페이지 아이디 가져오기 실패" },
      { status: 500 }
    );
  }
}

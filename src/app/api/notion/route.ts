import { NotionAPI } from "notion-client";
import { NextResponse } from "next/server";

const ALLOWED_PAGE_IDS =
  process.env.ALLOWED_NOTION_PAGE_IDS?.split(",").map((id) => id.trim()) || [];

const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = Number(process.env.RATE_LIMIT_WINDOW) || 60000;
const MAX_REQUESTS_PER_WINDOW =
  Number(process.env.MAX_REQUESTS_PER_WINDOW) || 30;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function GET(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." },
      { status: 429 }
    );
  }

  const { searchParams } = new URL(request.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json(
      { error: "페이지 ID가 필요합니다." },
      { status: 400 }
    );
  }

  const normalizedPageId = pageId.replace(/-/g, "");
  const isAllowed = ALLOWED_PAGE_IDS.some(
    (allowedId) => allowedId.replace(/-/g, "") === normalizedPageId
  );

  if (!isAllowed) {
    return NextResponse.json(
      { error: "접근 권한이 없는 페이지입니다." },
      { status: 403 }
    );
  }

  try {
    const notion = new NotionAPI();
    const recordMap = await notion.getPage(pageId);

    return NextResponse.json(recordMap);
  } catch (error) {
    console.error("Notion API 에러:", error);
    return NextResponse.json(
      { error: "페이지를 불러올 수 없습니다." },
      { status: 500 }
    );
  }
}

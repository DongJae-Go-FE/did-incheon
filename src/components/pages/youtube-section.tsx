import { Section, SectionTitle } from "../ui/common-layout";

import VideoCard from "@/components/ui/video-card";

export default function YoutubeSection() {
  return (
    <Section id="youtube">
      <SectionTitle>추천 영상</SectionTitle>
      <ul
        className="grid gap-x-4"
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(650px,100%), 1fr))",
        }}
      >
        <VideoCard
          videoId="9dcFG9wy87c"
          title="WYD를 소개합니다 (What is WYD?)"
          date="2026.01.20"
        />
        <VideoCard
          videoId="5_Uq41e0Qb8"
          title="WYD! 서울이 선택된 이유?!"
          date="2026.01.20"
        />
        <VideoCard
          videoId="aU6tZzIMKGY"
          title="사랑하는 젊은이들에게"
          date="2026.01.20"
        />
        <VideoCard
          videoId="qqMgOHjdUS8"
          title="세계청년대회(World Youth Day) 소개"
          date="2026.01.20"
        />
        <VideoCard
          videoId="9iBkc5uhhKQ"
          title="2027 서울 WYD, 전 세계 청년들에게 가장 기억에 남을 순간은?"
          date="2026.01.20"
        />
        <VideoCard
          videoId="n2zRJkke9g4"
          title="편집 WYD 홈스테이"
          date="2026.01.20"
        />
        <VideoCard
          videoId="lVGg2J6eSwg"
          title="2005 쾰른, 2011 스페인 홈스테이 (부산교구)"
          date="2026.01.20"
        />
        <VideoCard
          videoId="yfszp1d68iQ"
          title="2025년 청년 교류 프로젝트 유익 with 후쿠오카"
          date="2026.01.20"
        />
      </ul>
    </Section>
  );
}

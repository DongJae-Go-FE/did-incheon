"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Section, SectionTitle } from "../ui/common-layout";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface CalendarCardProps {
  date: string;
  title: string;
  description?: string;
}

function CalendarCard({ date, title, description }: CalendarCardProps) {
  return (
    <div className="group h-full border-l-2 border-gray-200 hover:border-gray-900 px-4 py-10 transition-all">
      <div className="group-hover:-translate-y-2 transition-transform">
        <span className="inline-block bg-primary text-white body03M px-3 py-1 rounded-full mb-4">
          {date}
        </span>
        <h3 className="heading04B text-gray-900 line-clamp-2">{title}</h3>
        {description && <p className="body02M text-gray-500 mt-1">{description}</p>}
      </div>
    </div>
  );
}

export default function CalendarSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  return (
    <Section id="calendar" className="min-h-auto bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle className="mb-0">CALENDAR</SectionTitle>
        <div className="flex items-center gap-4">
          <div className="w-60 h-0.5 bg-gray-300 hidden sm:block relative">
            <div
              className="absolute left-0 top-0 h-full bg-gray-900 transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="size-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="이전"
            >
              <ChevronLeft className="size-5 text-gray-600" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="size-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="다음"
            >
              <ChevronRight className="size-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Scrollbar]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onProgress={(_, prog) => {
          setProgress(prog);
        }}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="[&_.swiper-slide]:h-auto!"
      >
        <SwiperSlide>
          <CalendarCard
            date="26.02.08"
            title="바다의 별 축제 중"
            description="WYD 부스 운영, 성 가롤로 아쿠티스 성인 유해 공경 예식, 교구조직위원회 위원 임명장 수여"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.03.03 ~ 06.10"
            title="구반장님 대상, WYD 안내"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.03.17"
            title="지구조직위원회 위원 임명장 수여"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.03.17 ~ 27"
            title="사순판공 시기, 본당사제 대상, WYD 안내"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.04.19 ~"
            title="영성운동 2단계 시작"
            description="성 가롤로 아쿠티스, 성인 유해 본당 순례"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard date="26.05.17 ~" title="해외 순례자 접수 시작" />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.06.15 ~ 18"
            title="사제 전체 연수 중, WYD 안내 및 사목적 협의"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard date="26.06.21 ~" title="홈스테이 본당별 접수 시작" />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.07.18 ~ 19"
            title="오스트리아 청년 대상, 홈스테이 2차 시범 운영"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.07.31 ~ 08.02"
            title="Pre-인천 교구대회"
            description="교구민 대상, 홈스테이 3차 시범 운영, 1차 지역/교회탐방 운영"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard date="26.09.14 ~ 17" title="WYD 국제회의" />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.10.30 ~ 11.03"
            title="후쿠오카 교구 청년 교류"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard date="26.11.03" title="교구 사제단 대상, WYD 안내" />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

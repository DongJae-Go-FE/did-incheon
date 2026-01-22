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
}

function CalendarCard({ date, title }: CalendarCardProps) {
  return (
    <div className="group border-l-2 border-gray-200 hover:border-gray-900 pl-4 py-10 transition-all">
      <div className="group-hover:-translate-y-2 transition-transform">
        <span className="inline-block bg-primary text-white body03M px-3 py-1 rounded-full mb-4">
          {date}
        </span>
        <h3 className="heading04B text-gray-900 line-clamp-2">{title}</h3>
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
      >
        <SwiperSlide>
          <CalendarCard
            date="26.07.28 ~ 26.08.03"
            title="2026 서울 세계청년대회 본행사"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.07.25 ~ 26.07.27"
            title="분화의 날 - 인천교구 청년 환대 프로그램"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.06.15"
            title="WYD 인천교구 자원봉사자 발대식"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.05.01 ~ 26.06.30"
            title="세계청년대회 인천교구 순례자 등록 기간"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard date="26.04.20" title="WYD 인천교구 청년 사전 모임" />
        </SwiperSlide>
        <SwiperSlide>
          <CalendarCard
            date="26.03.15"
            title="세계청년대회 준비위원회 2차 회의"
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

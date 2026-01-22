"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionTitle } from "../ui/common-layout";
import { Tag } from "../ui/tag";
import { noticesData, type NoticeItem } from "@/data/notices";

function HoverCard({
  notice,
  isVisible,
}: {
  notice: NoticeItem | null;
  isVisible: boolean;
}) {
  return (
    <div
      className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-96 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 z-50 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8 pointer-events-none"
      }`}
    >
      {notice && (
        <>
          <div className="relative w-full aspect-4/3">
            <Image
              src={notice.image}
              alt={notice.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <Tag shape="capsule">{notice.category}</Tag>
              <span className="body03R text-muted-foreground">
                {notice.date}
              </span>
            </div>
            <h3 className="text-foreground body01B">{notice.title}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default function NoticeSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const hoveredNotice =
    hoveredIndex !== null ? noticesData[hoveredIndex] : null;

  return (
    <Section id="notice" className="bg-gray-100 min-h-auto">
      <SectionTitle>공지사항</SectionTitle>

      <div className="h-px bg-border" />

      <div className="relative">
        <div className="divide-y divide-border">
          {noticesData.map((notice, index) => (
            <Link
              key={notice.id}
              href={`/notice/${notice.id}`}
              className="flex items-center justify-between py-10 text-black group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="heading02M max-sm:heading04M hover:underline underline-offset-4 max-w-3/4">{notice.title}</span>
              <span className="body02R text-gray-600">
                {notice.date}
              </span>
            </Link>
          ))}
        </div>

        <HoverCard notice={hoveredNotice} isVisible={hoveredIndex !== null} />
      </div>
    </Section>
  );
}

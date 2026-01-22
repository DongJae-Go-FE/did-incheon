import Link from "next/link";
import Image from "next/image";
import { Section, SectionTitle, BackDrop } from "../ui/common-layout";

import { Plus } from "lucide-react";

interface SiteCardProps {
  title: string;
  href: string;
  imageSrc: string;
}

function SiteCard({ title, href, imageSrc }: SiteCardProps) {
  return (
    <li className="relative bg-black hover:[&_span]:bg-black">
      <Link className="block" href={href}>
        <Image
          width={390}
          height={293}
          alt="이미지"
          src={imageSrc}
          className="w-full"
        />
        <div className="flex justify-between absolute pb-3.5 px-4 w-full items-center bottom-0">
          <h3 className="heading03B text-white">{title}</h3>
          <span className="size-12 rounded-full flex items-center justify-center backdrop-blur-[5px] shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.5)] transition-colors">
            <Plus className="size-8 text-white" />
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function SiteSection() {
  return (
    <Section
      id="site"
      className="bg-no-repeat bg-center bg-cover relative bg-fixed min-h-auto"
      style={{ backgroundImage: "url('/main03.jpeg')" }}
    >
      <SectionTitle className="text-white relative z-20">
        관련 사이트
      </SectionTitle>
      <ul
        className="w-full grid gap-10 relative z-20 h-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%), 1fr))",
        }}
      >
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
        <SiteCard title="사이트명" href="/" imageSrc="/main04.png" />
      </ul>
      <BackDrop className="backdrop-brightness-100 blur-xs" />
    </Section>
  );
}

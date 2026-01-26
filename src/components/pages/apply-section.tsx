import Link from "next/link";

import { Section } from "../ui/common-layout";

export default function ApplySection() {
  return (
    <Section
      id="apply"
      className="flex justify-center items-center relative bg-center bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/main02.jpeg')" }}
    >
      <div className="z-20 flex justify-center flex-col items-center gap-y-8">
        <h2 className="text-white heading01B text-center max-sm:heading04B max-[1079px]:heading03B">
          WYD INCHEON 신청하기
        </h2>
        <Link
          href="/"
          className="h-12 px-8 body01M text-white border border-white flex justify-center items-center w-40 hover:bg-white hover:text-black transition-colors duration-300 animate-bounce"
        >
          신청하기
        </Link>
      </div>
      <div className="absolute inset-0 z-10 backdrop-brightness-50" />
    </Section>
  );
}

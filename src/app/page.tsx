"use client";

import Image from "next/image";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import { Context } from "@/components/context";
import useSchene from "@/hooks/useSchene";

// import ScrollDown from "@/components/scroll-down";
import NotionPage from "@/components/notion-page";

export default function Home() {
  const schene = useSchene([
    {
      totalFrame: 1,
    },
    {
      totalFrame: 1,
    },
    {
      totalFrame: 1,
    },
  ]);

  return (
    <Context value={schene}>
      <Header />
      <main className="pt-20">
        <div className="fixed h-full w-full overflow-hidden border-b transition-all duration-1000">
          <div
            ref={schene.ref || null}
            className="h-[calc(100%-80px)] w-full transition-all duration-1000"
          >
            <div className="w-full h-full bg-white">
              <NotionPage pageId="d6c98c2224d64d88904b262acb7abb8d" />
            </div>
            <div className="w-full h-full bg-[#81BBFA] relative">
              <Image
                src="/main01.jpg"
                alt="인천교구 봉사자 모집"
                width={1920}
                height={1080}
                className="h-full w-full object-contain"
                priority
              />
              {/* <ScrollDown /> */}
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </Context>
  );
}

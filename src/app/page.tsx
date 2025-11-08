import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20">
      <Image
        src="/main01.jpg"
        alt="인천교구 봉사자 모집"
        width={1920}
        height={1080}
        priority
      />
      <div className="w-dvw h-[calc(100dvh-80px)] bg-gray-100 flex justify-center items-center">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfYQXg8ml6O5xeZG6AZqpeMehqAYcNqkowahRNR1LI1k6DHiA/viewform?usp=sharing&ouid=103729609757395706973"
          target="_blank"
          className="bg-gray-900 text-white h-12 px-4 flex justify-center items-center rounded-md body02B hover:bg-gray-600 transition-colors duration-300"
        >
          WYD 인천 등록
        </Link>
      </div>
    </main>
  );
}

import Image from "next/image";

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
    </main>
  );
}

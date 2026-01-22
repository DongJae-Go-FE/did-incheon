import Image from "next/image";

export default function SliderItem01() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] bg-[#81BBFA]">
      <Image
        src="/main01.jpg"
        alt="인천교구 봉사자 모집"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

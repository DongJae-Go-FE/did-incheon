import Image from "next/image";

export default function SliderItem03() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <Image
        src="/main/main03m.png"
        alt="성가를로아쿠티스성인공경예식"
        fill
        className="object-contain md:hidden"
        priority
      />
      <Image
        src="/main/main03.png"
        alt="성가를로아쿠티스성인공경예식"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </div>
  );
}

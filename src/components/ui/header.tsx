import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white flex items-center justify-between z-50 px-15 max-[1079px]:px-8 shadow-sm">
      <h1>
        <Link href="/" className="flex items-center gap-x-1">
          <Image
            src="/logo.svg"
            width={120}
            height={60}
            alt="wyd did 인천 로고"
            className="h-full"
            priority
          />
        </Link>
      </h1>
    </header>
  );
}

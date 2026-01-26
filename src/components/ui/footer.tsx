import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-dvw flex h-74 justify-between bg-white px-16 py-7.5 text-black max-[1079px]:flex-wrap max-[1079px]:h-auto max-[1079px]:gap-y-8 max-[1079px]:px-8 max-[1079px]:py-12 max-sm:px-4">
      <div className="flex flex-col">
        <h3 className="mb-6">
          <Link href="/" className="flex items-center gap-x-1">
            <Image
              src="/logo.svg"
              width={200}
              height={90}
              alt="wyd did 인천 로고"
              className="h-full"
              priority
            />
          </Link>
        </h3>
        <address className="not-italic">
          <ul className="flex flex-col gap-y-2 body02R">
            <li>도로명 주소 : 인천광역시 동구 박문로1 (송림동 103-25)</li>
            <li>지번 주소 : 인천광역시 동구 송림동 103-8</li>
            <li>이메일 : masterforce999@naver.com</li>
          </ul>
        </address>
      </div>
      <div>
        <h3 className="heading03B">032-765-6960</h3>
        <p className="body02R">운영시간: 10:00 ~ 18:00</p>
        <ul className="mt-4 mb-12 flex gap-x-4">
          <li>
            <Link
              href="http://www.caincheon.or.kr/"
              className="body02R underline underline-offset-4"
              target="_blank"
            >
              인천교구청
            </Link>
          </li>
          <li>
            <Link
              href="https://youth.caincheon.or.kr/"
              className="body02R underline underline-offset-4"
              target="_blank"
            >
              인천교구 청소년 사목국
            </Link>
          </li>
        </ul>
        <p className="body02R">Copyright ⓒ 인천교구 All rights reserved</p>
      </div>
    </footer>
  );
}

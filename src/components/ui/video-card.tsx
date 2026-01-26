import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  date: string;
}

export default function VideoCard({ videoId, title, date }: VideoCardProps) {
  return (
    <li className="flex-1 flex flex-col fadeInUp">
      <div className="aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          className="w-full h-full transition-transform duration-300 hover:scale-110 cursor-pointer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex-1 flex flex-col pt-10 pb-30.5 gap-y-15 text-gray-900 max-sm:gap-y-8">
        <h3 className="heading01B max-sm:heading04B">{title}</h3>
        <p className="body01M max-md:heading04M">{date}</p>
        <Link
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 heading04M text-gray-900 hover:text-primary transition-colors w-fit ml-auto pr-4 hover:underline underline-offset-4"
        >
          영상보러가기
          <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </li>
  );
}

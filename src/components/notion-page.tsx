"use client";

import { NotionRenderer } from "react-notion-x";
import { useEffect, useState } from "react";

import { Spinner } from "./ui/spinner";

import type { ExtendedRecordMap } from "notion-types";
import dynamic from "next/dynamic";
import { Empty } from "./ui/empty";

const Collection = dynamic(
  () =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    ),
  { ssr: false }
);

interface NotionPageProps {
  pageId: string;
}

export default function NotionPage({ pageId }: NotionPageProps) {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotionPage() {
      try {
        setIsLoading(true);

        const response = await fetch(`/api/notion?pageId=${pageId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch Notion page");
        }

        const data = await response.json();

        setRecordMap(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchNotionPage();
  }, [pageId]);

  if (isLoading) {
    return (
      <div className="flex items-center w-full justify-center h-full">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Empty description={error} />
      </div>
    );
  }

  if (!recordMap) {
    return null;
  }

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isScrollable = target.scrollHeight > target.clientHeight;
    const isAtTop = target.scrollTop === 0;
    const isAtBottom =
      target.scrollTop + target.clientHeight >= target.scrollHeight - 1;

    if (isScrollable) {
      if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
        e.stopPropagation();
      }
    }
  };

  const mapPageUrl = (pageId: string) => {
    return `https://www.notion.so/${pageId.replace(/-/g, "")}`;
  };

  return (
    <div
      className="notion-container w-full h-full overflow-auto p-8 bg-white"
      onWheel={handleWheel}
    >
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        className="[&_main]:w-full! [&_header]:relative!"
        darkMode={false}
        disableHeader={false}
        mapPageUrl={mapPageUrl}
        components={{
          Collection,
        }}
      />
    </div>
  );
}

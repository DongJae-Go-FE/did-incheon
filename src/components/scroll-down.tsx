"use client";

import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

import { ArrowDown } from "lucide-react";

type ScrollDownType = {
  isVisible?: boolean;
};

export default function ScrollDown({ isVisible }: ScrollDownType) {
  const [hide, setHide] = useState(false);

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        if (isVisible) {
          const scrollY = window.scrollY;
          setHide(scrollY > 50);
        }
      }, 100),
    [isVisible]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);

  return (
    <div
      className={`scroll-down absolute bottom-1 left-1/2 -translate-x-1/2 p-0 ${
        hide ? "invisible opacity-0" : ""
      }`}
    >
      <div className={`body01B animate-bounce text-black`}>
        Scroll Down
        <ArrowDown className="m-auto" />
      </div>
    </div>
  );
}

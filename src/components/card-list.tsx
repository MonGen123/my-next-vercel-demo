"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { Card1 } from "@/components/card1";
import { Card2 } from "@/components/card2";
import { Card3 } from "@/components/card3";
import { Card4 } from "@/components/card4";

export function CardList() {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [space, setSpace] = useState(0);

  const containerEl = useRef<HTMLDivElement | null>(null);
  const contentEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const toolFn = () => {
      const containerWidth = parseInt(
        getComputedStyle(containerEl.current!)?.width
      );
      const contentWidth = parseInt(
        getComputedStyle(contentEl.current!)?.width
      );

      setContainerWidth(containerWidth);
      setContentWidth(contentWidth);
    };

    toolFn();

    window.addEventListener("resize", toolFn);
    return () => {
      window.removeEventListener("resize", toolFn);
    };
  }, []);

  const otherSpace = useMemo(() => {
    return contentWidth - containerWidth + 124 * 2;
  }, [containerWidth, contentWidth]);

  const onClickNextHandler = () => {
    if (space === 0) {
      setSpace(otherSpace);
    }
  };

  const onClickPrevHandler = () => {
    if (space === otherSpace) {
      setSpace(0);
    }
  };

  return (
    <div
      className="w-full overflow-x-hidden relative mt-[40px] px-[124px]"
      ref={containerEl}
    >
      <div
        className={[
          "absolute bg-l11 w-[190px] h-full top-0 start-0 pointer-events-none rotate-180 z-10",
          !space ? "opacity-0" : "",
        ].join(" ")}
      ></div>
      <button
        onClick={onClickPrevHandler}
        disabled={!space}
        className="w-[48px] h-[48px] bg-[#000] border-[0.8px] border-solid border-[#676767] rounded-[48px] flex justify-center items-center hover:bg-[#303030] hover:border-none absolute bottom-[115px] start-[124px] z-10 disabled:opacity-0"
      >
        <Image
          src="/arrow-right.svg"
          alt="arrow"
          width={11}
          height={16}
          className="rotate-180"
        />
      </button>
      <div
        ref={contentEl}
        className="flex gap-[52px] pt-[4px] w-max"
        style={{ marginLeft: 0 - space + "px" }}
      >
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <div
        className={[
          "absolute bg-l11 w-[190px] h-full top-0 end-0 pointer-events-none",
          otherSpace === space ? "opacity-0" : 0,
        ].join(" ")}
      ></div>
      <button
        onClick={onClickNextHandler}
        disabled={otherSpace === space}
        className="w-[48px] h-[48px] bg-[#000] border-[0.8px] border-solid border-[#676767] rounded-[48px] flex justify-center items-center hover:bg-[#303030] hover:border-none absolute bottom-[115px] end-[124px] disabled:opacity-0"
      >
        <Image src="/arrow-right.svg" alt="arrow" width={11} height={16} />
      </button>
    </div>
  );
}

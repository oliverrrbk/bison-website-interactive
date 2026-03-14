import { cn } from "../../lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10] rotate-[290deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * -20) + "%",
            left: Math.floor(Math.random() * 120) - 10 + "%",
            animationDelay: Math.random() * (12 - 0) + 0 + "s",
            animationDuration: Math.floor(Math.random() * (20 - 5) + 5) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/lib/hooks/useInView";
import { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
}>;

export function Reveal({
  as = "div",
  delayMs = 0,
  className,
  direction = "up",
  children,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  const Component = as as any;

  const translate = {
    up: "translate-y-4",
    down: "-translate-y-4",
    left: "translate-x-4",
    right: "-translate-x-4",
    scale: "scale-95",
  }[direction];

  return (
    <Component
      ref={ref}
      className={cn(
        "will-change-transform will-change-opacity transition-all duration-700 ease-out",
        !inView && cn("opacity-0", translate),
        inView && "opacity-100 translate-x-0 translate-y-0 scale-100",
        delayMs ? `delay-[${delayMs}ms]` : undefined,
        className
      )}
    >
      {children}
    </Component>
  );
}



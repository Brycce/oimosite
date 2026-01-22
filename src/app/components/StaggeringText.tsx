import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useInViewLoop } from "@/app/hooks/use-in-view-loop";

export function StaggeringText({
  children = "Oimo Technologies",
  rotateX = 80,
  stagger = true,
  hover: controlledHover,
  className = "",
  onAnimationStart,
  onAnimationComplete,
}: {
  children?: string;
  rotateX?: number;
  stagger?: boolean;
  hover?: boolean;
  className?: string;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}) {
  const [internalHover, ref] = useInViewLoop(
    1500,
    controlledHover === undefined
  );
  const hover = controlledHover ? controlledHover : internalHover;
  const chunks = children.split("");

  const target = {
    rotateX,
    y: -16,
    filter: "blur(4px)",
  };

  const transition = {
    type: "spring",
    stiffness: 250,
    damping: 30,
  } as const;

  return (
    <div ref={ref} className="w-fit grid-stack" aria-label={children}>
      <div className={className} aria-hidden>
        <AnimatePresence initial={false}>
          {chunks.map((letter, index) => {
            let delay = hover
              ? index * 0.05
              : (chunks.length - 1 - index) * 0.06;

            if (stagger === false) {
              delay = 0;
            }

            return (
              <motion.span
                className="inline-block"
                animate={{
                  rotateX: hover ? target.rotateX : 0,
                  y: hover ? target.y : 0,
                  filter: hover ? target.filter : "blur(0px)",
                  opacity: hover ? 0 : 1,
                }}
                key={index}
                style={{
                  ...(letter === " " && {
                    display: "inline",
                  }),
                }}
                onAnimationStart={() => {
                  if (index === 0) {
                    onAnimationStart?.();
                  }
                }}
                onAnimationComplete={() => {
                  if (index === chunks.length - 1) {
                    onAnimationComplete?.();
                  }
                }}
                transition={{
                  delay,
                  ...transition,
                }}
              >
                {letter}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>
      <div aria-hidden className={className}>
        <AnimatePresence initial={false}>
          {chunks.map((letter, index) => {
            let delay = hover
              ? 0.1 + index * 0.05
              : (chunks.length - 1 - index) * 0.05;

            if (stagger === false) {
              delay = 0;
            }

            return (
              <motion.span
                className="inline-block"
                animate={{
                  rotateX: hover ? 360 : 270,
                  y: hover ? 0 : target.y * -1,
                  filter: hover ? "blur(0px)" : target.filter,
                  opacity: hover ? 1 : 0,
                }}
                key={index}
                style={{
                  ...(letter === " " && {
                    display: "inline",
                  }),
                }}
                transition={{
                  ...transition,
                  delay,
                }}
              >
                {letter}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

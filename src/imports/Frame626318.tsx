import svgPaths from "./svg-myitjiylfn";
import { motion } from "motion/react";
import { useState } from "react";

export default function Frame() {
  const [hoveredPath, setHoveredPath] = useState<number | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  const pathVariants = (index: number) => ({
    animate: {
      y: hoveredPath === index ? -10 : 0,
      opacity: 1,
    },
    transition: {
      ...transition,
    },
  });

  const onLoadVariants = (delay: number) => ({
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      delay,
    },
  });

  return (
    <div className="relative size-full">
      <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 236.794 57.4483">
        <g id="Frame 626318">
          <g id="Frame 626316">
            <motion.path
              d={svgPaths.pf09d00}
              fill="var(--fill-0, #E8E580)"
              id="Subtract"
              initial={onLoadVariants(0).initial}
              animate={hasLoaded ? pathVariants(0).animate : onLoadVariants(0).animate}
              transition={hasLoaded ? pathVariants(0).transition : onLoadVariants(0).transition}
              onMouseEnter={() => setHoveredPath(0)}
              onMouseLeave={() => setHoveredPath(null)}
              onAnimationComplete={() => setHasLoaded(true)}
              style={{ cursor: 'pointer', paddingTop: '20px' }}
            />
            {/* Invisible hover area */}
            <rect
              x="0"
              y="-20"
              width="60"
              height="77"
              fill="transparent"
              onMouseEnter={() => setHoveredPath(0)}
              onMouseLeave={() => setHoveredPath(null)}
              style={{ cursor: 'pointer' }}
            />
          </g>
          <motion.path
            d={svgPaths.p5f60a00}
            fill="var(--fill-0, #E8E580)"
            id="Exclude"
            initial={onLoadVariants(0.05).initial}
            animate={hasLoaded ? pathVariants(1).animate : onLoadVariants(0.05).animate}
            transition={hasLoaded ? pathVariants(1).transition : onLoadVariants(0.05).transition}
            onMouseEnter={() => setHoveredPath(1)}
            onMouseLeave={() => setHoveredPath(null)}
            style={{ cursor: 'pointer' }}
          />
          {/* Invisible hover area */}
          <rect
            x="60"
            y="-20"
            width="60"
            height="77"
            fill="transparent"
            onMouseEnter={() => setHoveredPath(1)}
            onMouseLeave={() => setHoveredPath(null)}
            style={{ cursor: 'pointer' }}
          />
          <g id="Frame 626287">
            <motion.path
              d={svgPaths.p3538c400}
              fill="var(--fill-0, #E8E580)"
              id="Subtract_2"
              initial={onLoadVariants(0.1).initial}
              animate={hasLoaded ? pathVariants(2).animate : onLoadVariants(0.1).animate}
              transition={hasLoaded ? pathVariants(2).transition : onLoadVariants(0.1).transition}
              onMouseEnter={() => setHoveredPath(2)}
              onMouseLeave={() => setHoveredPath(null)}
              style={{ cursor: 'pointer' }}
            />
            {/* Invisible hover area */}
            <rect
              x="120"
              y="-20"
              width="60"
              height="77"
              fill="transparent"
              onMouseEnter={() => setHoveredPath(2)}
              onMouseLeave={() => setHoveredPath(null)}
              style={{ cursor: 'pointer' }}
            />
          </g>
          <g id="Frame 626317">
            <motion.path
              d={svgPaths.p23ee800}
              fill="var(--fill-0, #E8E580)"
              id="Subtract_3"
              initial={onLoadVariants(0.15).initial}
              animate={hasLoaded ? pathVariants(3).animate : onLoadVariants(0.15).animate}
              transition={hasLoaded ? pathVariants(3).transition : onLoadVariants(0.15).transition}
              onMouseEnter={() => setHoveredPath(3)}
              onMouseLeave={() => setHoveredPath(null)}
              style={{ cursor: 'pointer' }}
            />
            {/* Invisible hover area */}
            <rect
              x="177"
              y="-20"
              width="60"
              height="77"
              fill="transparent"
              onMouseEnter={() => setHoveredPath(3)}
              onMouseLeave={() => setHoveredPath(null)}
              style={{ cursor: 'pointer' }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
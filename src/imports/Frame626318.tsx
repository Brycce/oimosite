import svgPaths from "./svg-myitjiylfn";
import { motion } from "motion/react";
import { useState, useRef, useCallback } from "react";

interface FrameProps {
  animationDelay?: number;
}

// Letter center X positions in SVG coordinates
const LETTER_CENTERS = [30, 90, 150, 207];
const MAX_RAISE = -10;
const PROXIMITY_RADIUS = 80; // How far away the effect starts

export default function Frame({ animationDelay = 0 }: FrameProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [letterOffsets, setLetterOffsets] = useState([0, 0, 0, 0]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const transition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!svgRef.current || !hasLoaded) return;

    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = 236.794 / rect.width;
    const mouseX = (e.clientX - rect.left) * scaleX;

    const newOffsets = LETTER_CENTERS.map((centerX) => {
      const distance = Math.abs(mouseX - centerX);
      if (distance > PROXIMITY_RADIUS) return 0;
      const ratio = 1 - distance / PROXIMITY_RADIUS;
      return MAX_RAISE * ratio * ratio; // Quadratic easing for smoother falloff
    });

    setLetterOffsets(newOffsets);
  }, [hasLoaded]);

  const handleMouseLeave = useCallback(() => {
    setLetterOffsets([0, 0, 0, 0]);
  }, []);

  const pathVariants = (index: number) => ({
    animate: {
      y: letterOffsets[index],
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
      delay: animationDelay + delay,
    },
  });

  return (
    <div
      className="relative size-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        ref={svgRef}
        className="block size-full overflow-visible"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 236.794 57.4483"
      >
        <g id="Frame 626318">
          <g id="Frame 626316">
            <motion.path
              d={svgPaths.pf09d00}
              fill="var(--fill-0, #E8E580)"
              id="Subtract"
              initial={onLoadVariants(0).initial}
              animate={hasLoaded ? pathVariants(0).animate : onLoadVariants(0).animate}
              transition={hasLoaded ? pathVariants(0).transition : onLoadVariants(0).transition}
              onAnimationComplete={() => setHasLoaded(true)}
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
              style={{ cursor: 'pointer' }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
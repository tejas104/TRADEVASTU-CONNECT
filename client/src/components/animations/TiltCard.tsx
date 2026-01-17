import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  "data-testid"?: string;
}

export function TiltCard({ children, className, glowOnHover = true, "data-testid": testId }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={cn(
        "relative group rounded-lg transition-all duration-300",
        className
      )}
      data-testid={testId}
    >
      <div style={{ transform: "translateZ(0)" }}>
        {children}
      </div>
      {glowOnHover && (
        <motion.div
          className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, transparent 50%, rgba(0, 79, 58, 0.2) 100%)",
            filter: "blur(1px)",
          }}
        />
      )}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
        initial={false}
      >
        <motion.div
          className="absolute -inset-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.15), transparent)",
          }}
          animate={{
            x: ["0%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

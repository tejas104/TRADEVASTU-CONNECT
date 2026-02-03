"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
  href?: string;
  "data-testid"?: string;
}

export function GlowButton({
  children,
  className,
  variant = "primary",
  size = "default",
  onClick,
  href,
  "data-testid": testId,
}: GlowButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const translateX = useTransform(xSpring, [-50, 50], [-3, 3]);
  const translateY = useTransform(ySpring, [-50, 50], [-3, 3]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = cn(
    "relative inline-flex items-center justify-center font-medium transition-all duration-300",
    "rounded-md overflow-visible",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "default",
      "px-8 py-4 text-lg": size === "lg",
    },
    {
      "bg-gradient-to-r from-gold to-gold-light text-dark-bg shadow-gold hover:shadow-gold-lg": variant === "primary",
      "bg-dark-surface text-foreground border border-gold/30 hover:border-gold/60": variant === "secondary",
      "bg-transparent text-gold border-2 border-gold/50 hover:border-gold hover:bg-gold/10": variant === "outline",
    },
    className
  );

  const MotionComponent = href ? motion.div : motion.button;

  return (
    <MotionComponent
      ref={ref as any}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseStyles}
      style={{ x: translateX, y: translateY }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      data-testid={testId}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300"
        style={{
          background: variant === "primary" 
            ? "radial-gradient(circle at center, rgba(212, 175, 55, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
        }}
        whileHover={{ opacity: 1 }}
      />
    </MotionComponent>
  );
}

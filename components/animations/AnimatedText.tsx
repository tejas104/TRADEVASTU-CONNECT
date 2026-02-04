"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars" | "lines";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  "data-testid"?: string;
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  splitBy = "words",
  as: Component = "p",
  "data-testid": testId,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (typeof children !== "string") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay }}
        className={className}
        data-testid={testId}
      >
        {children}
      </motion.div>
    );
  }

  const text = children as string;
  let elements: string[] = [];

  switch (splitBy) {
    case "chars":
      elements = text.split("");
      break;
    case "lines":
      elements = text.split("\n");
      break;
    case "words":
    default:
      elements = text.split(" ");
      break;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("overflow-hidden", className)}
      data-testid={testId}
    >
      <Component className="inline">
        {elements.map((element, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
            style={{ perspective: 1000 }}
          >
            {element}
            {splitBy === "words" && index < elements.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}

export function AnimatedGradientText({
  children,
  className,
  delay = 0,
  "data-testid": testId,
}: Omit<AnimatedTextProps, "splitBy" | "as">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "bg-gradient-to-r from-gold via-lime-gold to-emerald bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x",
        className
      )}
      data-testid={testId}
    >
      {children}
    </motion.div>
  );
}

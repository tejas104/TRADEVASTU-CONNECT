"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  parallax?: boolean;
  parallaxIntensity?: number;
  overlay?: boolean;
  "data-testid"?: string;
}

export function AnimatedImage({
  src,
  alt,
  className,
  containerClassName,
  parallax = false,
  parallaxIntensity = 0.2,
  overlay = true,
  "data-testid": testId,
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * parallaxIntensity, 50 * parallaxIntensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("relative overflow-hidden rounded-lg", containerClassName)}
      data-testid={testId}
    >
      <motion.div
        style={parallax ? { y, scale } : undefined}
        className="relative w-full h-full"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-dark-surface animate-pulse"
        />
        
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ filter: "blur(20px)", scale: 1.1 }}
          animate={isLoaded ? { filter: "blur(0px)", scale: 1 } : { filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("w-full h-full object-cover", className)}
        />

        {overlay && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={isLoaded ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent animate-shimmer bg-[length:200%_100%]" />
          </motion.div>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function PortfolioImage({
  src,
  alt,
  title,
  category,
  className,
  onClick,
  "data-testid": testId,
}: {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  className?: string;
  onClick?: () => void;
  "data-testid"?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-lg cursor-pointer",
        className
      )}
      data-testid={testId}
    >
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ filter: isLoaded ? "none" : "blur(10px)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
      />

      <motion.div
        className="absolute -inset-full opacity-0 group-hover:opacity-100"
        animate={{
          x: ["0%", "200%"],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
        }}
      />

      {(title || category) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {category && (
            <span className="text-gold text-xs font-medium uppercase tracking-wider">
              {category}
            </span>
          )}
          {title && (
            <h3 className="font-heading font-bold text-lg text-foreground mt-1">
              {title}
            </h3>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

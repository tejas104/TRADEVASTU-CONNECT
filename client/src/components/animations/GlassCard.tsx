import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  glow?: boolean;
  "data-testid"?: string;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
  glow = true,
  "data-testid": testId,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "relative rounded-lg p-6",
        "bg-dark-card/80 backdrop-blur-xl",
        "border border-gold/10",
        "transition-all duration-300",
        hover && "hover:border-gold/30 hover:shadow-gold",
        glow && "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-gold/5 before:to-emerald/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className
      )}
      data-testid={testId}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
  delay = 0,
  "data-testid": testId,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  "data-testid"?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -15 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-lg p-6 bg-dark-card border border-gold/10 hover:border-gold/40 transition-all duration-500 overflow-hidden"
      style={{ perspective: 1000 }}
      data-testid={testId}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div
        className="absolute -inset-full opacity-0 group-hover:opacity-100"
        animate={{
          x: ["0%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)",
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <motion.div
          className="mt-4 h-0.5 bg-gradient-to-r from-gold to-emerald rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

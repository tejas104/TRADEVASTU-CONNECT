import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  "data-testid"?: string;
}

export function TestimonialSlider({
  testimonials,
  autoPlay = true,
  interval = 5000,
  className,
  "data-testid": testId,
}: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => paginate(1), interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)} data-testid={testId}>
      <div className="relative overflow-hidden py-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
          >
            <GlassCard className="text-center p-8 md:p-12" hover={false} data-testid={`testimonial-card-${testimonials[current].id}`}>
              <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-emerald flex items-center justify-center text-dark-bg font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role} at {testimonials[current].company}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-dark-surface border border-gold/20 text-gold hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
          data-testid="testimonial-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === current
                  ? "bg-gold w-6"
                  : "bg-gold/30 hover:bg-gold/60"
              )}
              data-testid={`testimonial-dot-${index}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-dark-surface border border-gold/20 text-gold hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
          data-testid="testimonial-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 400);
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 100,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed right-6 bottom-6 z-40"
    >
      <Link href="/contact">
        <motion.div
          className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-light text-dark-bg font-medium text-sm shadow-gold cursor-pointer overflow-hidden group"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 50px rgba(212, 175, 55, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          data-testid="button-floating-cta"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          <Sparkles className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Get Quote</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(212, 175, 55, 0.4)",
                "0 0 0 10px rgba(212, 175, 55, 0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

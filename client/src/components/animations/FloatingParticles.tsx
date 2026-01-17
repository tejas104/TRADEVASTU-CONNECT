import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            filter: "blur(1px)",
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 1, 1, 0],
            rotate: 720,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

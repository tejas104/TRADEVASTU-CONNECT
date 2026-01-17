import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlowButton } from "@/components/animations/GlowButton";
import { FloatingParticles } from "@/components/animations/FloatingParticles";

export default function NotFound() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12" data-testid="section-not-found">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={20} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="mb-8"
          >
            <AlertCircle className="w-24 h-24 mx-auto text-gold/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold text-5xl md:text-6xl mb-4"
            data-testid="text-404-title"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-heading font-semibold text-gold mb-4"
          >
            Page Not Found
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-md mx-auto mb-12"
          >
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlowButton href="/" variant="primary" size="lg" data-testid="button-home">
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </GlowButton>
            <GlowButton href="/contact" variant="outline" size="lg" data-testid="button-contact">
              Contact Support
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

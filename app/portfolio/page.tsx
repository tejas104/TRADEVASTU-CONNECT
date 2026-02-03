"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { PortfolioImage } from "@/components/animations/AnimatedImage";

const portfolioItems = [
  {
    id: 1,
    title: "Web Development",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Luxury Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Health & Fitness App",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-portfolio-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={25} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <span className="text-sm text-gold font-medium">Our Work</span>
          </motion.div>

          <AnimatedText
            as="h1"
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
            splitBy="words"
            data-testid="text-portfolio-title"
          >
            Featured Projects
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our latest work and see how we've helped brands achieve digital excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-24" data-testid="section-portfolio-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Link key={item.id} href={`/portfolio/${item.id}`}>
                <PortfolioImage
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  category={item.category}
                  className="aspect-[16/10]"
                  data-testid={`card-portfolio-${item.id}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-portfolio-cta">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Ready to Start</span>
          </SectionReveal>
          <AnimatedText
            as="h2"
            className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
            delay={0.1}
          >
            Let's Create Something Amazing
          </AnimatedText>
          <SectionReveal delay={0.2}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Have a project in mind? We'd love to hear about it and discuss how we can bring your vision to life.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-portfolio-contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlowButton>
              <GlowButton href="/services" variant="outline" size="lg" data-testid="button-portfolio-services">
                View Our Services
              </GlowButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Palette, Smartphone, LineChart, ShoppingCart, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { ServiceCard, GlassCard } from "@/components/animations/GlassCard";
import { TiltCard } from "@/components/animations/TiltCard";

const services = [
  {
    slug: "web-development",
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for exceptional performance and user experience.",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"],
  },
  {
    slug: "digital-marketing",
    icon: <Palette className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that amplify your reach and drive measurable business growth across all digital channels.",
    features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns", "Email Marketing"],
  },
  {
    slug: "branding",
    icon: <Globe className="w-8 h-8" />,
    title: "Branding",
    description: "Comprehensive brand identity design that tells your unique story and resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
  },
  {
    slug: "ui-ux-design",
    icon: <LineChart className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, beautiful interfaces that drive engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    slug: "analytics-growth-intelligence",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Analytics & Growth Intelligence",
    description: "Actionable insights from real-time data to track performance, uncover opportunities, and drive smarter growth decisions.",
    features: ["Data Analytics", "Performance Tracking", "Growth Strategy", "ROI Optimization"],
  },
  {
    slug: "performance-marketing",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "Data-driven ad campaigns engineered to maximize ROI, scale revenue, and convert intent into customers.",
    features: ["Google Ads", "Facebook Ads", "Conversion Tracking", "A/B Testing"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-services-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={25} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <span className="text-sm text-gold font-medium">Our Services</span>
          </motion.div>

          <AnimatedText
            as="h1"
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
            splitBy="words"
            data-testid="text-services-title"
          >
            What We Do Best
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of digital services designed to transform your vision into reality.
          </motion.p>
        </div>
      </section>

      <section className="py-24" data-testid="section-services-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <TiltCard key={service.slug} data-testid={`card-service-${service.slug}`}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
                <div className="mt-4">
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all" data-testid={`link-service-${service.slug}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-services-cta">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Ready to Get Started</span>
          </SectionReveal>
          <AnimatedText
            as="h2"
            className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
            delay={0.1}
          >
            Let's Build Something Extraordinary
          </AnimatedText>
          <SectionReveal delay={0.2}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Every great project starts with a conversation. Let's discuss your goals and how we can help you achieve them.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-services-contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </GlowButton>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}

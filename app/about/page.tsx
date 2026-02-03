import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText, AnimatedGradientText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { GlassCard } from "@/components/animations/GlassCard";
import { TiltCard } from "@/components/animations/TiltCard";


const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Team Members" },
];

const values = [
  {
    icon: <Target className="w-7 h-7" />,
    title: "Excellence",
    description: "We strive for excellence in every pixel, every line of code, and every interaction.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Passion",
    description: "We're passionate about creating digital experiences that make a real difference.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Collaboration",
    description: "We believe in the power of partnership and working closely with our clients.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies and ideas.",
  },
];

export default function About() {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-about-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={30} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <span className="text-sm text-gold font-medium">Our Story</span>
          </motion.div>

          <AnimatedText
            as="h1"
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
            splitBy="words"
            data-testid="text-about-title"
          >
            About TRADEVASTU CONNECT
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We are a digital agency under TRADEVASTU ENTERPRISES LLP,
            dedicated to crafting exceptional digital experiences that help brands stand out in the digital landscape.
          </motion.p>
        </div>
      </section>

      <section className="py-16 border-y border-gold/10 bg-dark-card/50" data-testid="section-about-stats">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative" data-testid="section-about-mission">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wider">Who We Are</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6">
                  Transforming Ideas Into Digital Reality
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  TRADEVASTU CONNECT is the premium digital agency division of TRADEVASTU ENTERPRISES LLP.
                  Founded with a passion for excellence, we combine creativity with technical expertise
                  to deliver digital solutions that exceed expectations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team of designers, developers, and strategists work collaboratively to transform
                  your vision into stunning digital experiences. We believe in the power of design to
                  inspire, engage, and drive business growth.
                </p>
                <GlowButton href="/contact" variant="primary" data-testid="button-about-contact">
                  Work With Us
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </GlowButton>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-6 text-center" data-testid="card-about-mission">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To empower businesses with exceptional digital experiences
                  </p>
                </GlassCard>
                <GlassCard className="p-6 text-center" data-testid="card-about-vision">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To be the leading premium digital agency in India
                  </p>
                </GlassCard>
                <GlassCard className="p-6 text-center col-span-2" data-testid="card-about-approach">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Our Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Combining creativity, technology, and strategy for results that matter
                  </p>
                </GlassCard>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-about-values">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">What Drives Us</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4"
              delay={0.1}
            >
              Our Core Values
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <TiltCard key={value.title} data-testid={`card-value-${value.title.toLowerCase()}`}>
                <SectionReveal delay={index * 0.1}>
                  <div className="p-6 rounded-lg bg-dark-card border border-gold/10 hover:border-gold/30 transition-all h-full">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center mb-4 text-gold">
                      {value.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </SectionReveal>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-about-cta">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Join Our Journey</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
              delay={0.1}
            >
              Ready to Work Together?
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you have a project in mind or just want to say hello, we'd love to hear from you.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-about-start">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </GlowButton>
                <GlowButton href="/portfolio" variant="outline" size="lg" data-testid="button-about-work">
                  View Our Work
                </GlowButton>
              </div>
            </SectionReveal>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  LineChart, 
  ShoppingCart, 
  Globe,
  ArrowRight,
  Check,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText, AnimatedGradientText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { GlassCard } from "@/components/animations/GlassCard";
import { ParallaxBackground } from "@/components/animations/ParallaxContainer";

const services = [
  {
    slug: "web-development",
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for exceptional performance and user experience.",
    features: ["Custom CMS Solutions", "E-commerce Platforms", "Web Applications", "API Development", "Performance Optimization"],
    color: "from-blue-500/20 to-emerald/20",
  },
  {
    slug: "digital-marketing",
    icon: <LineChart className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that amplify your reach, engage your audience, and drive measurable business growth.",
    features: ["SEO Optimization", "Content Marketing", "Social Media", "PPC Campaigns", "Analytics"],
    color: "from-green-500/20 to-emerald/20",
  },
  {
    slug: "ui-ux-design",
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, beautiful interfaces that drive engagement and boost conversions.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping", "Usability Testing"],
    color: "from-purple-500/20 to-gold/20",
  },
  {
    slug: "branding",
    icon: <Globe className="w-8 h-8" />,
    title: "Branding",
    description: "Comprehensive brand identity design that tells your unique story and resonates deeply with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Packaging Design"],
    color: "from-gold/20 to-orange-500/20",
  },
  {
    slug: "mobile-apps",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Export Specefic Websites",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
    features: ["Export websites","Android Development", "Cross-Platform Websites", "App Store Optimization", "Maintenance"],
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    slug: "ecommerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Analytics & Growth Intelligence",
    description: "Feature-rich online stores that convert visitors into customers and drive sustainable revenue growth.",
    features: ["CRM Development", "Customized Dashboard", "Payment Integration", "Inventory Management", "Analytics"],
    color: "from-emerald/20 to-gold/20",
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-services-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={25} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <span className="text-sm text-gold font-medium">What We Offer</span>
          </motion.div>

          <AnimatedText
            as="h1"
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
            splitBy="words"
            data-testid="text-services-page-title"
          >
            Our Services
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to elevate your brand and drive business growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative" data-testid="section-services-grid">
        <ParallaxBackground intensity={0.15} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <TiltCard key={service.slug} data-testid={`card-service-${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className={`relative h-full p-8 rounded-lg bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-500 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <motion.div
                      className="absolute -inset-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ["0%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-gold flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link href={`/services/${service.slug}`}>
                        <a className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all" data-testid={`link-service-${service.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-services-cta">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Get Started</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
              delay={0.1}
            >
              Not Sure Which Service You Need?
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss your project and find the perfect solution for your business goals.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-services-contact">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlowButton>
            </SectionReveal>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}

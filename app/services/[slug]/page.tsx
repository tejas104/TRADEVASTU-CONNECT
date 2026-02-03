import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Users,
  Award,
  Code2,
  Palette,
  Smartphone,
  LineChart,
  ShoppingCart,
  Globe,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { GlassCard } from "@/components/animations/GlassCard";
import { ParallaxBackground } from "@/components/animations/ParallaxContainer";

const services = [
  {
    slug: "web-development",
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for exceptional performance and user experience.",
    longDescription: "We create robust, scalable web solutions that not only look stunning but also perform exceptionally well. Our development process combines the latest technologies with best practices to deliver websites that drive results.",
    features: [
      "Custom CMS Solutions",
      "E-commerce Platforms",
      "Web Applications",
      "API Development",
      "Performance Optimization",
      "SEO-Friendly Architecture",
      "Mobile-First Design",
      "Cross-Browser Compatibility"
    ],
    process: [
      { step: "01", title: "Discovery & Planning", description: "Understanding your requirements and creating a detailed project roadmap." },
      { step: "02", title: "Design & Prototyping", description: "Creating wireframes and interactive prototypes for user validation." },
      { step: "03", title: "Development", description: "Building your solution with clean, maintainable code." },
      { step: "04", title: "Testing & Launch", description: "Rigorous testing followed by smooth deployment and ongoing support." }
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    color: "from-blue-500/20 to-emerald/20",
  },
  {
    slug: "digital-marketing",
    icon: <LineChart className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that amplify your reach, engage your audience, and drive measurable business growth.",
    longDescription: "Our data-driven digital marketing strategies help you connect with your target audience across multiple channels. We combine creativity with analytics to deliver campaigns that not only look great but also deliver measurable ROI.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "PPC Campaigns",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Brand Awareness Campaigns"
    ],
    process: [
      { step: "01", title: "Strategy Development", description: "Analyzing your market and creating a comprehensive marketing strategy." },
      { step: "02", title: "Content Creation", description: "Developing engaging content that resonates with your audience." },
      { step: "03", title: "Campaign Execution", description: "Implementing and managing your marketing campaigns across channels." },
      { step: "04", title: "Optimization & Scaling", description: "Monitoring performance and scaling successful strategies." }
    ],
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools", "CRM Systems"],
    color: "from-green-500/20 to-emerald/20",
  },
  {
    slug: "ui-ux-design",
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, beautiful interfaces that drive engagement and boost conversions.",
    longDescription: "Great design is invisible. It guides users effortlessly through your digital experience. Our design process focuses on understanding user behavior and creating interfaces that are both beautiful and functional.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
      "Accessibility Compliance",
      "Mobile App Design"
    ],
    process: [
      { step: "01", title: "Research & Discovery", description: "Understanding your users and their needs through research." },
      { step: "02", title: "Information Architecture", description: "Organizing content and features for optimal user experience." },
      { step: "03", title: "Design & Iteration", description: "Creating and refining designs based on user feedback." },
      { step: "04", title: "Handoff & Implementation", description: "Delivering design assets and collaborating with developers." }
    ],
    technologies: ["Figma", "Sketch", "Adobe Creative Suite", "InVision", "Principle"],
    color: "from-purple-500/20 to-gold/20",
  },
  {
    slug: "branding",
    icon: <Globe className="w-8 h-8" />,
    title: "Branding",
    description: "Comprehensive brand identity design that tells your unique story and resonates deeply with your target audience.",
    longDescription: "Your brand is more than just a logo. It's the emotional connection you create with your customers. We help you craft a brand identity that tells your story and builds lasting relationships with your audience.",
    features: [
      "Logo Design & Identity",
      "Brand Guidelines",
      "Visual Identity Systems",
      "Brand Strategy",
      "Packaging Design",
      "Brand Voice & Messaging",
      "Brand Collateral",
      "Brand Implementation"
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "Understanding your business, values, and target audience." },
      { step: "02", title: "Brand Strategy", description: "Developing a clear brand positioning and messaging strategy." },
      { step: "03", title: "Visual Identity", description: "Creating logos, color palettes, and visual elements." },
      { step: "04", title: "Brand Rollout", description: "Implementing your brand across all touchpoints." }
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Brand Strategy Tools"],
    color: "from-gold/20 to-orange-500/20",
  },
  {
    slug: "mobile-apps",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Export Specific Websites",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
    longDescription: "Mobile apps are essential for engaging customers on-the-go. We create native and cross-platform apps that provide exceptional user experiences while maintaining high performance and reliability.",
    features: [
      "Export Specific Websites",
      "Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "UI/UX Design",
      "API Integration",
      "Push Notifications",
      "App Maintenance & Support"
    ],
    process: [
      { step: "01", title: "App Strategy", description: "Defining app goals, target audience, and key features." },
      { step: "02", title: "Design & Prototyping", description: "Creating wireframes and interactive prototypes." },
      { step: "03", title: "Development & Testing", description: "Building and thoroughly testing your mobile app." },
      { step: "04", title: "Launch & Support", description: "Deploying to app stores and providing ongoing support." }
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    slug: "ecommerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Analytics & Growth Intelligence",
    description: "Feature-rich online stores that convert visitors into customers and drive sustainable revenue growth.",
    longDescription: "E-commerce is about more than just selling products online. It's about creating seamless shopping experiences that build customer loyalty and drive repeat business. We build powerful e-commerce solutions that scale with your business.",
    features: [
      "CRM Development",
      "Customized Dashboard",
      "Payment Integration",
      "Inventory Management",
      "Analytics & Reporting",
      "Multi-Channel Integration",
      "Customer Support Tools",
      "Performance Optimization"
    ],
    process: [
      { step: "01", title: "E-commerce Strategy", description: "Planning your online store architecture and features." },
      { step: "02", title: "Store Design & Setup", description: "Creating an attractive and user-friendly online store." },
      { step: "03", title: "Integration & Testing", description: "Connecting payment systems and testing all functionality." },
      { step: "04", title: "Launch & Optimization", description: "Going live and continuously optimizing for conversions." }
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Analytics"],
    color: "from-emerald/20 to-gold/20",
  },
];

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetail({ params }: ServiceDetailPageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-service-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={20} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
            >
              <span className="text-sm text-gold font-medium">Service Details</span>
            </motion.div>

            <div className="w-20 h-20 mx-auto mb-6 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center text-gold">
              {service.icon}
            </div>

            <AnimatedText
              as="h1"
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
              splitBy="words"
              data-testid="text-service-title"
            >
              {service.title}
            </AnimatedText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              {service.longDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <GlowButton href="/contact" variant="primary" data-testid="button-service-contact">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlowButton>
              <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative" data-testid="section-service-features">
        <ParallaxBackground intensity={0.15} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <SectionReveal>
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wider">What We Offer</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6">
                  Key Features & Benefits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our comprehensive approach ensures that every aspect of your project is covered,
                  from initial concept to final delivery and beyond.
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <GlassCard className="p-8" data-testid="card-service-tech">
                <h3 className="font-heading font-semibold text-xl mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-dark-card border border-gold/20 rounded-full text-sm text-muted-foreground hover:border-gold/40 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-service-process">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Process</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
              delay={0.1}
            >
              How We Work
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven methodology ensures consistent results and clear communication throughout your project.
              </p>
            </SectionReveal>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <SectionReveal key={step.step} delay={index * 0.15} className="relative">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15, type: "spring" }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-emerald/10 border-2 border-gold/30 flex items-center justify-center relative z-10"
                    >
                      <span className="font-heading font-bold text-2xl text-gold">{step.step}</span>
                    </motion.div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-service-cta">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Ready to Get Started?</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
              delay={0.1}
            >
              Let's Build Something Amazing Together
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Ready to transform your ideas into reality? Let's discuss your project and create a solution that exceeds your expectations.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-service-start">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </GlowButton>
                <GlowButton href="/portfolio" variant="outline" size="lg" data-testid="button-service-portfolio">
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

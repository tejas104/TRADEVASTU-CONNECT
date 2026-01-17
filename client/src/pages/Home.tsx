import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Code2, 
  Palette, 
  Smartphone, 
  LineChart, 
  ShoppingCart, 
  Globe, 
  Check,
  Star,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText, AnimatedGradientText } from "@/components/animations/AnimatedText";
import { SectionReveal, StaggerItem } from "@/components/animations/SectionReveal";
import { ServiceCard, GlassCard } from "@/components/animations/GlassCard";
import { ParallaxBackground, ParallaxLayer } from "@/components/animations/ParallaxContainer";
import { TestimonialSlider } from "@/components/animations/TestimonialSlider";
import { PortfolioImage } from "@/components/animations/AnimatedImage";
import { TiltCard } from "@/components/animations/TiltCard";

const services = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for exceptional performance.",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that amplify your reach and drive measurable business growth.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Branding",
    description: "Comprehensive brand identity design that tells your unique story and resonates with your audience.",
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "Design",
    description: "User-centered design that creates intuitive, beautiful interfaces that drive engagement and conversions.",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Analytics & Growth Intelligence",
    description: "Actionable insights from real-time data to track performance, uncover opportunities, and drive smarter growth decisions.",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Performance Marketing",
    description: "Data-driven ad campaigns engineered to maximize ROI, scale revenue, and convert intent into customers.",
  },
];

const trustedBy = [
  "TechCorp", "Innovate Inc", "Digital First", "CloudSystems", "DataFlow", "NextGen",
];

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
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Understanding your vision, goals, and target audience" },
  { number: "02", title: "Strategy", description: "Crafting a tailored roadmap for your digital success" },
  { number: "03", title: "Design & Build", description: "Creating stunning experiences with pixel-perfect precision" },
  { number: "04", title: "Launch & Scale", description: "Deploying your solution and optimizing for growth" },
];

// const testimonials = [
//   {
//     id: 1,
//     name: "Rajesh Sharma",
//     role: "CEO",
//     company: "TechVentures",
//     content: "TRADEVASTU CONNECT transformed our digital presence completely. Their attention to detail and creative vision exceeded all our expectations. The team delivered a stunning website that has significantly increased our conversions.",
//   },
//   {
//     id: 2,
//     name: "Priya Mehta",
//     role: "Marketing Director",
//     company: "InnovateCo",
//     content: "Working with TRADEVASTU was an absolute pleasure. They understood our brand perfectly and delivered a design that truly resonates with our audience. Highly recommend their services to anyone looking for premium digital solutions.",
//   },
//   {
//     id: 3,
//     name: "Amit Patel",
//     role: "Founder",
//     company: "StartupHub",
//     content: "The e-commerce platform they built for us has been a game-changer. Sales increased by 200% within the first quarter. Their technical expertise and design sensibility are truly world-class.",
//   },
// ];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <FloatingParticles count={40} />
        
        <ParallaxLayer depth={2} className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold/5 blur-2xl">
          <div className="w-full h-full" />
        </ParallaxLayer>
        <ParallaxLayer depth={1.5} className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-emerald/5 blur-2xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
            >
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-medium">Premium Digital Agency</span>
            </motion.div>

            <AnimatedText
              as="h1"
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              splitBy="words"
              data-testid="text-hero-title"
            >
              Crafting Digital
            </AnimatedText>
            
            <AnimatedGradientText
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8"
              delay={0.3}
              data-testid="text-hero-gradient"
            >
              Experiences That Inspire
            </AnimatedGradientText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
              data-testid="text-hero-subtitle"
            >
              We transform bold ideas into stunning digital realities. From concept to launch, 
              we craft premium experiences that elevate your brand and captivate your audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <GlowButton
                href="/contact"
                variant="primary"
                size="lg"
                data-testid="button-hero-start"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlowButton>
              <GlowButton
                href="/portfolio"
                variant="outline"
                size="lg"
                data-testid="button-hero-portfolio"
              >
                View Our Work
              </GlowButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-gold rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-gold/10 bg-dark-card/50" data-testid="section-trusted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <p className="text-center text-muted-foreground text-sm mb-8">
              TRUSTED BY LEADING BRANDS
            </p>
          </SectionReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {trustedBy.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#D4AF37" }}
                className="text-muted-foreground/60 font-heading font-semibold text-xl transition-colors cursor-default"
                data-testid={`text-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative" data-testid="section-services">
        <ParallaxBackground intensity={0.2} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Services</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
              delay={0.1}
              data-testid="text-services-title"
            >
              What We Do Best
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive suite of digital services designed to transform your vision into reality.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <TiltCard key={service.title} data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
              </TiltCard>
            ))}
          </div>

          <SectionReveal delay={0.6} className="text-center mt-12">
            <GlowButton href="/services" variant="outline" data-testid="button-view-services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </GlowButton>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-portfolio">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Work</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
              delay={0.1}
              data-testid="text-portfolio-title"
            >
              Featured Projects
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our latest work and see how we've helped brands achieve digital excellence.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <SectionReveal delay={0.4} className="text-center mt-12">
            <GlowButton href="/portfolio" variant="outline" data-testid="button-view-portfolio">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </GlowButton>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 relative" data-testid="section-process">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Process</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
              delay={0.1}
              data-testid="text-process-title"
            >
              How We Work
            </AnimatedText>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <SectionReveal key={step.number} delay={index * 0.15} className="relative">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15, type: "spring" }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-emerald/10 border-2 border-gold/30 flex items-center justify-center relative z-10"
                    >
                      <span className="font-heading font-bold text-2xl text-gold">{step.number}</span>
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

      {/* <section className="py-24 bg-dark-card/30" data-testid="section-testimonials">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Testimonials</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
              delay={0.1}
              data-testid="text-testimonials-title"
            >
              What Our Clients Say
            </AnimatedText>
          </div> */}

          {/* <TestimonialSlider testimonials={testimonials} data-testid="slider-testimonials" /> */}
        {/* </div>
      </section> */}

      <section className="py-24 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-dark-bg to-emerald/10" />
        <FloatingParticles count={20} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <GlassCard className="max-w-4xl mx-auto text-center p-12" data-testid="card-cta">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Start Your Journey</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
              delay={0.1}
              data-testid="text-cta-title"
            >
              Ready to Transform Your Digital Presence?
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's collaborate to create something extraordinary. Your vision, our expertise – together we'll build digital experiences that stand out.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-cta-contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </GlowButton>
                <GlowButton href="/about" variant="outline" size="lg" data-testid="button-cta-about">
                  Learn More About Us
                </GlowButton>
              </div>
            </SectionReveal>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}

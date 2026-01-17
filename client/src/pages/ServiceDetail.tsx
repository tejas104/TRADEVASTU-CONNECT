import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  LineChart, 
  ShoppingCart, 
  Globe,
  ArrowRight,
  ArrowLeft,
  Check,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { GlassCard } from "@/components/animations/GlassCard";
import { ParallaxBackground } from "@/components/animations/ParallaxContainer";

const servicesData: Record<string, {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  // pricing: { name: string; price: string; features: string[]; popular?: boolean }[];
}> = {
  "web-development": {
    icon: <Code2 className="w-12 h-12" />,
    title: "Web Development",
    subtitle: "Building Digital Excellence",
    description: "We craft custom websites and web applications using cutting-edge technologies. From responsive designs to complex web applications, we deliver solutions that drive results.",
    features: [
      { title: "Custom Development", description: "Tailored solutions built from the ground up to meet your specific needs." },
      { title: "Responsive Design", description: "Websites that look and perform beautifully on all devices." },
      { title: "Performance Optimized", description: "Lightning-fast load times for exceptional user experience." },
      { title: "SEO Ready", description: "Built with best practices for search engine visibility." },
    ],
    benefits: ["Increased online visibility", "Better user engagement", "Higher conversion rates", "Scalable architecture", "Ongoing support"],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements" },
      { step: "02", title: "Planning", description: "Creating detailed roadmap and technical specifications" },
      { step: "03", title: "Design", description: "Crafting visual designs and user experience flows" },
      { step: "04", title: "Development", description: "Building with clean, maintainable code" },
      { step: "05", title: "Launch", description: "Deploying and optimizing for performance" },
    ],
    // pricing: [
    //   { name: "Starter", price: "₹49,999", features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"] },
    //   { name: "Professional", price: "₹99,999", features: ["15 Pages", "Custom Design", "Advanced SEO", "CMS Integration", "3 Months Support"], popular: true },
    //   { name: "Enterprise", price: "Custom", features: ["Unlimited Pages", "Custom Features", "E-commerce", "API Integration", "1 Year Support"] },
    // ],
  },
  "ui-ux-design": {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    subtitle: "Design That Delights",
    description: "We create user-centered designs that combine aesthetics with functionality. Our designs don't just look beautiful—they solve real problems and drive engagement.",
    features: [
      { title: "User Research", description: "Deep understanding of your users' needs and behaviors." },
      { title: "Wireframing", description: "Strategic layout planning for optimal user flow." },
      { title: "Visual Design", description: "Stunning interfaces that reflect your brand identity." },
      { title: "Prototyping", description: "Interactive prototypes for testing and validation." },
    ],
    benefits: ["Improved user satisfaction", "Reduced development costs", "Faster time to market", "Consistent brand experience", "Data-driven decisions"],
    process: [
      { step: "01", title: "Research", description: "Understanding users and market landscape" },
      { step: "02", title: "Strategy", description: "Defining design direction and goals" },
      { step: "03", title: "Wireframes", description: "Creating structural blueprints" },
      { step: "04", title: "Visual Design", description: "Crafting beautiful interfaces" },
      { step: "05", title: "Handoff", description: "Delivering production-ready designs" },
    ],
    // pricing: [
    //   { name: "Basic", price: "₹29,999", features: ["5 Screens", "Wireframes", "Visual Design", "1 Revision Round", "Design Files"] },
    //   { name: "Standard", price: "₹59,999", features: ["15 Screens", "User Research", "Wireframes", "Visual Design", "Prototyping"], popular: true },
    //   { name: "Premium", price: "₹99,999", features: ["Unlimited Screens", "Complete UX Research", "Design System", "Animation Specs", "Developer Support"] },
    // ],
  },
  "branding": {
    icon: <Globe className="w-12 h-12" />,
    title: "Branding",
    subtitle: "Build a Lasting Identity",
    description: "We create comprehensive brand identities that tell your unique story. From logo design to brand guidelines, we ensure consistency across all touchpoints.",
    features: [
      { title: "Logo Design", description: "Memorable logos that capture your brand essence." },
      { title: "Brand Guidelines", description: "Comprehensive rules for consistent brand application." },
      { title: "Visual Identity", description: "Complete visual system including colors, typography, and imagery." },
      { title: "Brand Strategy", description: "Strategic positioning for market differentiation." },
    ],
    benefits: ["Strong market presence", "Customer recognition", "Trust and credibility", "Competitive advantage", "Long-term value"],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your vision and values" },
      { step: "02", title: "Research", description: "Analyzing market and competitors" },
      { step: "03", title: "Concept", description: "Developing creative directions" },
      { step: "04", title: "Design", description: "Creating brand elements" },
      { step: "05", title: "Delivery", description: "Providing complete brand package" },
    ],
    // pricing: [
    //   { name: "Essential", price: "₹39,999", features: ["Logo Design", "Color Palette", "Typography", "Business Cards", "Basic Guidelines"] },
    //   { name: "Complete", price: "₹79,999", features: ["Logo Design", "Full Visual Identity", "Brand Guidelines", "Stationery", "Social Templates"], popular: true },
    //   { name: "Premium", price: "₹1,49,999", features: ["Complete Branding", "Brand Strategy", "Messaging", "Marketing Collateral", "Brand Book"] },
    // ],
  },
  "digital-marketing": {
    icon: <LineChart className="w-12 h-12" />,
    title: "Digital Marketing",
    subtitle: "Grow Your Reach",
    description: "We develop strategic marketing solutions that amplify your brand's reach and drive measurable business growth through data-driven campaigns.",
    features: [
      { title: "SEO Optimization", description: "Improve your search rankings and organic visibility." },
      { title: "Content Marketing", description: "Engaging content that attracts and converts." },
      { title: "Social Media", description: "Build community and engagement across platforms." },
      { title: "PPC Campaigns", description: "Targeted advertising for immediate results." },
    ],
    benefits: ["Increased traffic", "Better lead generation", "Higher ROI", "Brand awareness", "Measurable results"],
    process: [
      { step: "01", title: "Audit", description: "Analyzing current performance" },
      { step: "02", title: "Strategy", description: "Developing marketing roadmap" },
      { step: "03", title: "Execute", description: "Implementing campaigns" },
      { step: "04", title: "Optimize", description: "Continuous improvement" },
      { step: "05", title: "Report", description: "Tracking and reporting results" },
    ],
    // pricing: [
    //   { name: "Starter", price: "₹19,999/mo", features: ["SEO Audit", "5 Keywords", "Monthly Report", "Basic Optimization", "Email Support"] },
    //   { name: "Growth", price: "₹39,999/mo", features: ["Full SEO", "15 Keywords", "Content Creation", "Social Management", "Bi-weekly Reports"], popular: true },
    //   { name: "Scale", price: "₹79,999/mo", features: ["Complete Marketing", "PPC Campaigns", "Lead Generation", "Marketing Automation", "Dedicated Manager"] },
    // ],
  },
  "mobile-apps": {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Apps",
    subtitle: "Apps That Inspire",
    description: "We build native and cross-platform mobile applications that deliver exceptional user experiences and drive business value.",
    features: [
      { title: "iOS Development", description: "Native iOS apps with Swift and SwiftUI." },
      { title: "Android Development", description: "Native Android apps with Kotlin." },
      { title: "Cross-Platform", description: "React Native and Flutter solutions." },
      { title: "App Maintenance", description: "Ongoing support and updates." },
    ],
    benefits: ["Reach more users", "Better engagement", "Revenue generation", "Brand loyalty", "Competitive edge"],
    process: [
      { step: "01", title: "Ideation", description: "Defining app concept and features" },
      { step: "02", title: "Design", description: "Creating intuitive user interfaces" },
      { step: "03", title: "Development", description: "Building robust applications" },
      { step: "04", title: "Testing", description: "Ensuring quality and performance" },
      { step: "05", title: "Launch", description: "App store submission and marketing" },
    ],
    // pricing: [
    //   { name: "MVP", price: "₹1,49,999", features: ["Core Features", "Basic UI", "One Platform", "Bug Fixes", "1 Month Support"] },
    //   { name: "Standard", price: "₹2,99,999", features: ["Full Features", "Custom Design", "Both Platforms", "Analytics", "3 Months Support"], popular: true },
    //   { name: "Enterprise", price: "Custom", features: ["Advanced Features", "Custom Backend", "Both Platforms", "Admin Panel", "1 Year Support"] },
    // ],
  },
  "ecommerce": {
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "E-Commerce",
    subtitle: "Sell Smarter",
    description: "We build feature-rich online stores that convert visitors into customers and drive sustainable revenue growth for your business.",
    features: [
      { title: "Custom Stores", description: "Tailored e-commerce solutions for your needs." },
      { title: "Payment Integration", description: "Secure payment gateways and processing." },
      { title: "Inventory Management", description: "Efficient stock and order management." },
      { title: "Analytics", description: "Insights to optimize sales and marketing." },
    ],
    benefits: ["24/7 sales", "Global reach", "Lower overhead", "Customer insights", "Scalability"],
    process: [
      { step: "01", title: "Planning", description: "Defining requirements and features" },
      { step: "02", title: "Design", description: "Creating conversion-focused layouts" },
      { step: "03", title: "Development", description: "Building your online store" },
      { step: "04", title: "Integration", description: "Connecting payments and shipping" },
      { step: "05", title: "Launch", description: "Going live and marketing" },
    ],
  //   pricing: [
  //     { name: "Basic", price: "₹69,999", features: ["50 Products", "Payment Gateway", "Basic Theme", "Shipping Setup", "1 Month Support"] },
  //     { name: "Professional", price: "₹1,29,999", features: ["500 Products", "Custom Design", "Multi-payment", "Inventory System", "3 Months Support"], popular: true },
  //     { name: "Enterprise", price: "₹2,49,999", features: ["Unlimited Products", "Custom Features", "ERP Integration", "Multi-vendor", "1 Year Support"] },
  //   ],
  },  
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";
  const service = servicesData[slug];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-12">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <GlowButton href="/services" variant="primary" data-testid="button-back-services">
              Back to Services
            </GlowButton>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-12" data-testid="section-service-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={25} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link href="/services">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold mb-8 transition-colors" data-testid="link-back-services">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </a>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-xl bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center mb-6 text-gold"
              >
                {service.icon}
              </motion.div>

              <AnimatedText
                as="h1"
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-4"
                data-testid="text-service-title"
              >
                {service.title}
              </AnimatedText>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gold text-xl mb-4"
              >
                {service.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-lg mb-8"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-service-cta">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </GlowButton>
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-emerald/20 rounded-2xl blur-2xl" />
                <div className="relative bg-dark-card rounded-2xl p-8 border border-gold/20">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Zap className="w-6 h-6" />, label: "Fast Delivery" },
                      { icon: <Shield className="w-6 h-6" />, label: "Quality Assured" },
                      { icon: <Clock className="w-6 h-6" />, label: "24/7 Support" },
                      { icon: <Check className="w-6 h-6" />, label: "Satisfaction" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-dark-surface"
                      >
                        <div className="text-gold">{item.icon}</div>
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-lime-gold to-emerald"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      <section className="py-24 relative" data-testid="section-service-features">
        <ParallaxBackground intensity={0.1} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">What's Included</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4"
              delay={0.1}
            >
              Key Features
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <SectionReveal key={feature.title} delay={index * 0.1}>
                <GlassCard className="h-full" data-testid={`card-feature-${index}`}>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-service-process">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">How We Work</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4"
              delay={0.1}
            >
              Our Process
            </AnimatedText>
          </div>

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <SectionReveal key={step.step} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-emerald/10 border-2 border-gold/30 flex items-center justify-center">
                      <span className="font-heading font-bold text-xl text-gold">{step.step}</span>
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-8 bg-gold/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
{/* 
      <section className="py-24" data-testid="section-service-pricing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Investment</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4"
              delay={0.1}
            > */}
              {/* Pricing Plans
            </AnimatedText>
          </div> */}

          {/* <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.pricing.map((plan, index) => (
              <SectionReveal key={plan.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative rounded-lg p-8 ${
                    plan.popular 
                      ? "bg-gradient-to-br from-gold/10 to-emerald/10 border-2 border-gold/50" 
                      : "bg-dark-card border border-gold/10"
                  }`}
                  data-testid={`card-pricing-${plan.name.toLowerCase()}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark-bg text-sm font-medium rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="font-heading font-bold text-4xl text-gold">{plan.price}</span>
                  </div> */}

                  {/* <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul> */}

                  {/* <GlowButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full"
                    data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                  >
                    Get Started
                  </GlowButton>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-dark-card/30" data-testid="section-service-cta">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Ready to Start?</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
              delay={0.1}
            >
              Let's Discuss Your Project
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Get a free consultation and custom quote for your {service.title.toLowerCase()} needs.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <GlowButton href="/contact" variant="primary" size="lg" data-testid="button-service-final-cta">
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlowButton>
            </SectionReveal>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}

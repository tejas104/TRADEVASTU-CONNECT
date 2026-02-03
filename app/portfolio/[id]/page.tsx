import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { GlassCard } from "@/components/animations/GlassCard";
import { AnimatedImage } from "@/components/animations/AnimatedImage";
import { ParallaxContainer } from "@/components/animations/ParallaxContainer";

const portfolioData: Record<string, {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  //client: string;
  date: string;
  tags: string[];
  heroImage: string;
  //images: string[];
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  //testimonial?: { quote: string; author: string; role: string };
  nextProject?: { id: number; title: string };
}> = {
  "1": {
    title: "Web Development",
    category: "E-Commerce",
    description: "A high-performance website built for speed, scalability, and exceptional user experience.",
    fullDescription: "We design and develop modern, conversion-focused websites that combine clean architecture with intuitive user experience. Our web solutions are optimized for performance, security, and scalability—ensuring seamless interactions across devices while supporting long-term business growth.",
    // client: "LuxeMode Fashion",
    date: "September 2024",
    tags: ["Shopify", "React", "Node.js", "Stripe"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    // images: [
    //   "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
    // ],
    challenge: "The client needed a platform that could handle high traffic volumes during sales events while maintaining a premium user experience that reflected their luxury brand positioning.",
    solution: "We built a custom Shopify Plus solution with a headless React frontend, enabling lightning-fast page loads and a highly interactive shopping experience. Advanced caching strategies and CDN optimization ensured stability during peak traffic.",
    results: [
      { metric: "Conversion Rate", value: "+45%" },
      { metric: "Page Load Time", value: "1.2s" },
      { metric: "Revenue Growth", value: "+120%" },
      { metric: "Cart Abandonment", value: "-30%" },
    ],
    // testimonial: {
    //   quote: "TRADEVASTU CONNECT transformed our online presence. The new platform has exceeded all our expectations in terms of performance and user engagement.",
    //   author: "Priya Kapoor",
    //   role: "CEO, LuxeMode Fashion",
    // },
    nextProject: { id: 2, title: "Financial Dashboard" },
  },
  "2": {
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "Real-time analytics dashboard for a fintech startup with complex data visualization.",
    fullDescription: "We designed and developed a comprehensive analytics dashboard for a fast-growing fintech startup. The platform provides real-time insights into financial data with intuitive visualizations and actionable intelligence.",
    //client: "FinTrack Analytics",
    date: "August 2024",
    tags: ["Figma", "D3.js", "React", "TypeScript"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    // images: [
    //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop",
    // ],
    challenge: "The existing dashboard was cluttered and difficult to navigate, making it hard for users to extract meaningful insights from their financial data.",
    solution: "We conducted extensive user research to understand pain points and redesigned the entire interface with a focus on clarity and efficiency. Custom D3.js visualizations bring data to life while maintaining performance.",
    results: [
      { metric: "User Engagement", value: "+85%" },
      { metric: "Task Completion", value: "+60%" },
      { metric: "Support Tickets", value: "-40%" },
      { metric: "User Satisfaction", value: "4.8/5" },
    ],
    nextProject: { id: 3, title: "Luxury Brand Identity" },
  },
  "3": {
    title: "Luxury Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a premium hospitality group including logo and guidelines.",
    fullDescription: "We created a complete brand identity system for an emerging luxury hospitality group. The project encompassed everything from logo design to comprehensive brand guidelines, setting the foundation for their market presence.",
   // client: "Grandeur Hotels",
    date: "July 2024",
    tags: ["Logo Design", "Brand Guidelines", "Print", "Digital"],
    heroImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop",
    // images: [
    //   "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&h=600&fit=crop",
    // ],
    challenge: "The client was launching a new luxury hotel chain and needed a brand identity that would immediately convey sophistication and exclusivity to high-net-worth travelers.",
    solution: "We developed an elegant visual identity rooted in timeless design principles with a modern edge. The brand system includes a distinctive logo, custom typography, and a refined color palette that works across all touchpoints.",
    results: [
      { metric: "Brand Recognition", value: "+200%" },
      { metric: "Social Engagement", value: "+150%" },
      { metric: "Booking Inquiries", value: "+80%" },
      { metric: "Guest Reviews", value: "4.9/5" },
    ],
    nextProject: { id: 4, title: "Health & Fitness App" },
  },
  "4": {
    title: "Health & Fitness App",
    category: "Mobile Apps",
    description: "AI-powered fitness app with personalized workout plans and gamification features.",
    fullDescription: "We developed a comprehensive health and fitness application that uses artificial intelligence to create personalized workout plans. The app features gamification elements, social connectivity, and real-time progress tracking to keep users motivated and engaged.",
    //client: "FitLife Tech",
    date: "June 2024",
    tags: ["React Native", "Node.js", "AI/ML", "Firebase"],
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    // images: [
    //   "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    // ],
    challenge: "The fitness app market is saturated, and the client needed a product that would stand out through superior user experience and intelligent personalization.",
    solution: "We built a React Native app with a custom AI engine that learns from user behavior to provide increasingly personalized workout plans. Gamification elements and social features boost engagement and retention.",
    results: [
      { metric: "App Downloads", value: "500K+" },
      { metric: "Daily Active Users", value: "120K" },
      { metric: "User Retention", value: "78%" },
      { metric: "App Store Rating", value: "4.8" },
    ],
    nextProject: { id: 5, title: "Real Estate Platform" },
  },
};

interface PortfolioDetailProps {
  params: {
    id: string;
  };
}

export default function PortfolioDetail({ params }: PortfolioDetailProps) {
  const id = params.id;
  const project = portfolioData[id];

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/portfolio">
              <GlowButton variant="primary" data-testid="button-back-portfolio">
                Back to Portfolio
              </GlowButton>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden" data-testid="section-project-hero">
        <div className="absolute inset-0">
          <ParallaxContainer speed={0.3}>
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[100vh] object-cover"
            />
          </ParallaxContainer>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
        </div>
        <FloatingParticles count={15} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 pt-12">
          <Link href="/portfolio">
            <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold mb-8 transition-colors cursor-pointer" data-testid="link-back-portfolio">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </span>
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-sm font-medium uppercase tracking-wider mb-4"
          >
            {project.category}
          </motion.span>

          <AnimatedText
            as="h1"
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
            data-testid="text-project-title"
          >
            {project.title}
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              {/* <span>{project.client}</span> */}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gold" />
              <span>{project.tags.join(", ")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-project-overview">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <SectionReveal>
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-sm text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <GlassCard key={result.metric} delay={index * 0.1} data-testid={`card-result-${index}`}>
                    <div className="font-heading font-bold text-3xl text-gold mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.metric}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-project-challenge">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <SectionReveal>
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wider">The Challenge</span>
                <h2 className="font-heading font-bold text-3xl mt-4 mb-6">What We Faced</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wider">The Solution</span>
                <h2 className="font-heading font-bold text-3xl mt-4 mb-6">How We Solved It</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* <section className="py-24" data-testid="section-project-gallery">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading font-bold text-3xl mb-12 text-center">Project Gallery</h2>
          </SectionReveal> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {/* {project.images.map((image, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <AnimatedImage
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  containerClassName="aspect-[4/3] rounded-lg overflow-hidden"
                  parallax
                  data-testid={`image-gallery-${index}`}
                />
              </SectionReveal>
            ))} */}
          {/* </div>
        </div>
      </section> */}

      {/* {project.testimonial && (
        <section className="py-24 bg-dark-card/30" data-testid="section-project-testimonial">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionReveal>
              <GlassCard className="max-w-3xl mx-auto text-center p-12">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.role}
                  </div>
                </div>
              </GlassCard>
            </SectionReveal>
          </div>
        </section>
      )} */}

      <section className="py-24" data-testid="section-project-nav">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <Link href="/portfolio">
              <motion.span
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors cursor-pointer"
                data-testid="link-all-projects"
              >
                <ArrowLeft className="w-5 h-5" />
                All Projects
              </motion.span>
            </Link>

            {project.nextProject && (
              <Link href={`/portfolio/${project.nextProject.id}`}>
                <motion.span
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gold font-medium cursor-pointer"
                  data-testid="link-next-project"
                >
                  Next: {project.nextProject.title}
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-project-cta">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="max-w-4xl mx-auto text-center p-12">
            <SectionReveal>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Like What You See?</span>
            </SectionReveal>
            <AnimatedText
              as="h2"
              className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
              delay={0.1}
            >
              Ready to Start Your Project?
            </AnimatedText>
            <SectionReveal delay={0.2}>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's collaborate to create something extraordinary for your brand.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <Link href="/contact">
                <GlowButton variant="primary" size="lg" data-testid="button-project-cta">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </GlowButton>
              </Link>
            </SectionReveal>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}

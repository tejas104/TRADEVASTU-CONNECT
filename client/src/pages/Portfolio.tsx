import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { PortfolioImage } from "@/components/animations/AnimatedImage";
import { cn } from "@/lib/utils";

const categories = ["All", "Web Development", "UI/UX Design", "Branding", "Digital Marketing", "Analytics & Growth Intelligence"];

const portfolioItems = [
  {
    id: 1,
    title: "Web Development",
    category: "Web Development",
    description: "A luxury fashion e-commerce platform with advanced filtering and seamless checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Shopify", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "Real-time analytics dashboard for a fintech startup with complex data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Figma", "D3.js", "React"],
  },
  {
    id: 3,
    title: "Luxury Brand Identity",
    category: "Branding",
    description: "Complete brand identity for a premium hospitality group including logo and guidelines.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Digital Marketing",
    description: "Cross-platform fitness tracking app with AI-powered workout recommendations.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "AI/ML"],
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing and management platform with virtual tour integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Next.js", "PostgreSQL", "3D Tours"],
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Enterprise SaaS dashboard redesign focusing on user efficiency and data clarity.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    tags: ["UX Research", "Figma", "Design System"],
  },
  // {
  //   id: 7,
  //   title: "Restaurant Chain Branding",
  //   category: "Branding",
  //   description: "Modern rebranding for a restaurant chain including menu design and packaging.",
  //   image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
  //   tags: ["Brand Strategy", "Packaging", "Menu Design"],
  // },
  // {
  //   id: 8,
  //   title: "Banking App",
  //   category: "Mobile Apps",
  //   description: "Secure mobile banking application with biometric authentication and real-time notifications.",
  //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  //   tags: ["iOS", "Android", "FinTech"],
  // },
  // {
  //   id: 9,
  //   title: "Online Learning Platform",
  //   category: "Web Development",
  //   description: "Feature-rich LMS with live classes, course management, and progress tracking.",
  //   image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  //   tags: ["React", "Django", "WebRTC"],
  // },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-portfolio-hero">
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
            data-testid="text-portfolio-page-title"
          >
            Portfolio
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our collection of award-winning projects that showcase our expertise and creativity.
          </motion.p>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-dark-bg/90 backdrop-blur-xl border-b border-gold/10" data-testid="section-portfolio-filters">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-gold text-dark-bg"
                    : "bg-dark-surface text-muted-foreground hover:text-gold hover:bg-gold/10 border border-gold/10"
                )}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-portfolio-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/portfolio/${item.id}`}>
                  <a className="block group" data-testid={`link-portfolio-${item.id}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <PortfolioImage
                        src={item.image}
                        alt={item.title}
                        className="aspect-[4/3]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <span className="text-gold text-xs font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-heading font-semibold text-xl text-foreground mt-1 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-dark-surface border border-gold/10 rounded-md text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-portfolio-cta">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Start Your Project</span>
          </SectionReveal>
          <AnimatedText
            as="h2"
            className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
            delay={0.1}
          >
            Want to Be Our Next Success Story?
          </AnimatedText>
          <SectionReveal delay={0.2}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's create something amazing together. We'd love to hear about your project.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <Link href="/contact">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-medium rounded-md shadow-gold"
                data-testid="button-portfolio-cta"
              >
                Start a Project
              </motion.a>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}

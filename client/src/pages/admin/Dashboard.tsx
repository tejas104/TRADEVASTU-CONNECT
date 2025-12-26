import { motion } from "framer-motion";
import { Plus, MessageSquare, Grid3x3, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { GlowButton } from "@/components/animations/GlowButton";
import { GlassCard } from "@/components/animations/GlassCard";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";

export default function Dashboard() {
  const { data: messages = [] } = useQuery({
    queryKey: ["/api/contact"],
    queryFn: async () => {
      const res = await fetch("/api/contact");
      return res.json();
    },
  });

  const { data: portfolio = [] } = useQuery({
    queryKey: ["/api/portfolio"],
    queryFn: async () => {
      const res = await fetch("/api/portfolio");
      return res.json();
    },
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ["/api/testimonials"],
    queryFn: async () => {
      const res = await fetch("/api/testimonials");
      return res.json();
    },
  });

  const stats = [
    { icon: <MessageSquare className="w-6 h-6" />, label: "Messages", value: messages.length, color: "from-blue-500 to-blue-600" },
    { icon: <Grid3x3 className="w-6 h-6" />, label: "Portfolio Items", value: portfolio.length, color: "from-gold to-orange-500" },
    { icon: <Star className="w-6 h-6" />, label: "Testimonials", value: testimonials.length, color: "from-emerald to-teal-600" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedText as="h1" className="font-heading font-bold text-4xl md:text-5xl mb-6" data-testid="text-admin-title">
            Admin Dashboard
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <SectionReveal key={stat.label} delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} className={`p-6 rounded-lg bg-gradient-to-br ${stat.color} opacity-10`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                      <p className="font-heading font-bold text-3xl mt-2">{stat.value}</p>
                    </div>
                    <div className="text-3xl opacity-50">{stat.icon}</div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <SectionReveal>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-semibold text-xl">Recent Messages</h2>
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {messages.slice(0, 5).map((msg: any) => (
                    <div key={msg.id} className="p-3 bg-dark-surface rounded-lg border border-gold/10">
                      <p className="font-medium text-sm text-foreground">{msg.name}</p>
                      <p className="text-xs text-muted-foreground">{msg.service}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-semibold text-xl">Admin Actions</h2>
                  <Plus className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-3">
                  <GlowButton href="/admin/portfolio" variant="secondary" className="w-full justify-start" data-testid="button-manage-portfolio">
                    Manage Portfolio
                  </GlowButton>
                  <GlowButton href="/admin/testimonials" variant="secondary" className="w-full justify-start" data-testid="button-manage-testimonials">
                    Manage Testimonials
                  </GlowButton>
                  <GlowButton href="/admin/services" variant="secondary" className="w-full justify-start" data-testid="button-manage-services">
                    Manage Services
                  </GlowButton>
                  <GlowButton href="/admin/messages" variant="secondary" className="w-full justify-start" data-testid="button-view-messages">
                    View All Messages
                  </GlowButton>
                </div>
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}

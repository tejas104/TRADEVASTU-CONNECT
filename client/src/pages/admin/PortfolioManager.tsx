import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Edit2, Trash2, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { GlowButton } from "@/components/animations/GlowButton";
import { GlassCard } from "@/components/animations/GlassCard";
import { AnimatedText } from "@/components/animations/AnimatedText";

export default function PortfolioManager() {
  const { data: items = [] } = useQuery({
    queryKey: ["/api/portfolio"],
    queryFn: async () => {
      const res = await fetch("/api/portfolio");
      return res.json();
    },
  });

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <AnimatedText as="h1" className="font-heading font-bold text-4xl" data-testid="text-portfolio-manager">
              Portfolio Manager
            </AnimatedText>
            <GlowButton href="#" variant="primary" size="sm" data-testid="button-add-portfolio">
              <Plus className="w-4 h-4 mr-2 inline" />
              Add Item
            </GlowButton>
          </div>

          <div className="space-y-4">
            {items.length === 0 ? (
              <GlassCard className="p-12 text-center">
                <p className="text-muted-foreground">No portfolio items yet. Add one to get started!</p>
              </GlassCard>
            ) : (
              items.map((item: any) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-dark-card border border-gold/10 hover:border-gold/30 transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gold/10 rounded-lg transition-colors" data-testid={`button-edit-portfolio-${item.id}`}>
                      <Edit2 className="w-4 h-4 text-gold" />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors" data-testid={`button-delete-portfolio-${item.id}`}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

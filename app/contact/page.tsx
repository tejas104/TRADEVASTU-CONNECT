"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GlowButton } from "@/components/animations/GlowButton";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { GlassCard } from "@/components/animations/GlassCard";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Web Development",
  "Digital Marketing",
  "Branding",
  "Export Specific Websites",
  "UI/UX Design",
  "Analytics & Growth Intelligence",
  "Other",
];

const budgetRanges = [
  "Under ₹8,000",
  "₹8,000 - ₹15,000",
  "₹15,000 - ₹30,000",
  "₹30,000 - ₹50,000",
  "₹50,000+",
];

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    value: "hello@tradevastu.com",
    href: "mailto:hello@tradevastu.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    value: "+91 7558516577",
    href: "tel:+919876543210",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    value: "Pune, Maharashtra, India",
    href: "https://www.google.com/maps/place/10,+Narhe+Rd,+Wadgaon+Budruk,+Dhayari+Phata,+Pune,+Maharashtra+411041,+India/@18.4551147,73.8195689,19z/data=!3m1!4b1!4m6!3m5!1s0x3bc2953fb13570dd:0xec6e6da05ee45855!8m2!3d18.4551147!4d73.8202126!16s%2Fg%2F11tt5pcy4t?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D"
  }
  ,
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    value: "Mon - Fri: 9AM - 6PM",
    href: "#",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-12" data-testid="section-contact-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-emerald/10" />
        <FloatingParticles count={25} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <span className="text-sm text-gold font-medium">Get in Touch</span>
          </motion.div>

          <AnimatedText
            as="h1"
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6"
            splitBy="words"
            data-testid="text-contact-title"
          >
            Contact Us
          </AnimatedText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to start your next project? Let's create something amazing together.
          </motion.p>
        </div>
      </section>

      <section className="py-24" data-testid="section-contact-form">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionReveal>
                <GlassCard className="p-8" data-testid="card-contact-form">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-emerald/20 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-gold" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-2xl mb-4">Thank You!</h3>
                      <p className="text-muted-foreground mb-8">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                      <GlowButton
                        onClick={() => {
                          setIsSubmitted(false);
                          form.reset();
                        }}
                        variant="outline"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </GlowButton>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="font-heading font-bold text-2xl mb-6">Send us a Message</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground">Full Name *</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder=""
                                      className="bg-dark-surface border-gold/20 focus:border-gold/50 h-12"
                                      data-testid="input-name"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground">Email Address *</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      type="email"
                                      placeholder=""
                                      className="bg-dark-surface border-gold/20 focus:border-gold/50 h-12"
                                      data-testid="input-email"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground">Phone Number</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder=""
                                      className="bg-dark-surface border-gold/20 focus:border-gold/50 h-12"
                                      data-testid="input-phone"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="service"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground">Service Interested In *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-dark-surface border-gold/20 focus:border-gold/50 h-12" data-testid="select-service">
                                        <SelectValue placeholder="Select a service" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-dark-card border-gold/20">
                                      {services.map((service) => (
                                        <SelectItem key={service} value={service} className="hover:bg-gold/10">
                                          {service}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-dark-surface border-gold/20 focus:border-gold/50 h-12" data-testid="select-budget">
                                      <SelectValue placeholder="Select your budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-dark-card border-gold/20">
                                    {budgetRanges.map((range) => (
                                      <SelectItem key={range} value={range} className="hover:bg-gold/10">
                                        {range}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Your Message *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    {...field}
                                    placeholder="Tell us about your project..."
                                    className="bg-dark-surface border-gold/20 focus:border-gold/50 min-h-[150px] resize-none"
                                    data-testid="textarea-message"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <motion.button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-medium rounded-md shadow-gold disabled:opacity-50"
                            data-testid="button-submit"
                          >
                            {form.formState.isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full"
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5" />
                                Send Message
                              </>
                            )}
                          </motion.button>
                        </form>
                      </Form>
                    </>
                  )}
                </GlassCard>
              </SectionReveal>
            </div>

            <div>
              <SectionReveal delay={0.2}>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      onClick={() => window.open(info.href, '_blank')}
                      className="flex items-start gap-4 p-4 rounded-lg bg-dark-card border border-gold/10 hover:border-gold/30 transition-all group cursor-pointer"
                      data-testid={`link-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-emerald/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4} className="mt-8">
                <a
                  href="https://www.google.com/maps/place/10,+Narhe+Rd,+Wadgaon+Budruk,+Dhayari+Phata,+Pune,+Maharashtra+411041,+India/@18.4551147,73.8195689,19z/data=!3m1!4b1!4m6!3m5!1s0x3bc2953fb13570dd:0xec6e6da05ee45855!8m2!3d18.4551147!4d73.8202126!16s%2Fg%2F11tt5pcy4t?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden border border-gold/10 hover:border-gold/40 transition-all group"
                >
                  <div className="aspect-[4/3] relative">
                    {/* Google Maps Embed */}
                    <iframe
                      title="TradeVastu Enterprises Location"
                      src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                      className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent pointer-events-none" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <MapPin className="w-6 h-6 text-gold mx-auto mb-1" />
                      <p className="text-sm font-medium text-foreground">
                        TRADEVASTU ENTERPRISES LLP
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Pune, Maharashtra, India
                      </p>
                      <p className="text-[11px] text-gold mt-1">
                        Click to open in Google Maps →
                      </p>
                    </div>
                  </div>
                </a>
              </SectionReveal>

            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-card/30" data-testid="section-contact-cta">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionReveal>
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Quick Response</span>
          </SectionReveal>
          <AnimatedText
            as="h2"
            className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6"
            delay={0.1}
          >
            We'll Respond Within 24 Hours
          </AnimatedText>
          <SectionReveal delay={0.2}>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our team is dedicated to providing timely responses. Whether it's a question or a project inquiry, we're here to help.
            </p>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}

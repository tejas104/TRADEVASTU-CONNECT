import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SiLinkedin, SiInstagram, SiX, SiFacebook } from "react-icons/si";

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Export Specefic Websites", href: "/services/ui-ux-design" },
    { label: "Branding", href: "/services/branding" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "UI/UX Design", href: "/services/mobile-apps" },
    { label: "Analytics & Growth Intelligence", href: "/services/Analytics & Growth Intelligence" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiX, href: "#", label: "Twitter" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative bg-dark-bg border-t border-gold/10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/">
              <a className="flex items-center gap-2 mb-6" data-testid="link-footer-logo">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-emerald flex items-center justify-center">
                  <span className="font-heading font-bold text-dark-bg text-lg">T</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-lg text-foreground">
                    TRADEVASTU
                  </span>
                  <span className="font-heading font-bold text-lg text-gold ml-1">
                    CONNECT
                  </span>
                </div>
              </a>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Crafting premium digital experiences that elevate your brand to new heights. 
              A product of TRADEVASTU ENTERPRISES LLP.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-dark-surface border border-gold/20 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-gold text-sm transition-colors flex items-center gap-1 group" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-muted-foreground hover:text-gold text-sm transition-colors flex items-center gap-1 group" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                Office No 1 15/1
                Flat No. S No 50,
                Samarth Sankul , near Bank of Maharashtra
                Pune, Maharashtra
                PIN Code: 411041
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:hello@tradevastu.com" className="text-muted-foreground hover:text-gold text-sm transition-colors">
                  hello@tradevastu.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+917558516577" className="text-muted-foreground hover:text-gold text-sm transition-colors">
                  +91 7558516577
                </a>
                <a href="tel:+917028540920" className="text-muted-foreground hover:text-gold text-sm transition-colors">
                  +91 7028540920
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {new Date().getFullYear()} TRADEVASTU ENTERPRISES LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-muted-foreground hover:text-gold text-sm transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

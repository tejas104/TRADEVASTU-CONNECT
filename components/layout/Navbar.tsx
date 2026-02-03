"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/animations/GlowButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-dark-bg/90 backdrop-blur-xl border-b border-gold/10"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/">
              <div
                className="flex items-center gap-2 cursor-pointer"
                data-testid="link-home-logo"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white to-white flex items-center justify-center">
                  <img
                    src="/LOGO_TRADEVASTU1.png"   // replace with your image path
                    alt="Logo"
                    className="w-12 h-12 object-contain"  // adjust size as needed
                  />
                </div>
                <div className="block">
                  <span className="font-heading font-bold text-sm sm:text-lg text-foreground">
                    TRADEVASTU
                  </span>
                  <span className="font-heading font-bold text-sm sm:text-lg text-gold ml-1">
                    CONNECT
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <GlowButton
              href="/contact"
              variant="primary"
              size="sm"
              data-testid="button-get-quote-nav"
            >
              Get Quote
            </GlowButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-dark-bg/95 backdrop-blur-xl border-b border-gold/10"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-2 px-4 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-gold/10 text-gold"
                  : "text-foreground hover:bg-gold/5"
              )}
              data-testid={`link-mobile-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <GlowButton
              href="/contact"
              variant="primary"
              className="w-full"
              data-testid="button-get-quote-mobile"
            >
              Get Quote
            </GlowButton>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: string;
  active: boolean;
}) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "relative py-2 text-sm font-medium transition-colors cursor-pointer",
          active ? "text-gold" : "text-foreground hover:text-gold"
        )}
        whileHover={{ y: -2 }}
        data-testid={`link-nav-${children.toLowerCase()}`}
      >
        {children}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-lime-gold rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: active ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}

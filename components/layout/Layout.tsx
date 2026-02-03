"use client";

import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

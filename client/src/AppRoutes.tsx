import { Switch, Route } from "wouter";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const PortfolioDetail = lazy(() => import("@/pages/PortfolioDetail"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/not-found"));

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:id" component={PortfolioDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

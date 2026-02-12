import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import {
  Brain, BarChart3, Database, Zap, Code2, Rocket,
  Search, Palette, Wrench, CloudCog, HeadphonesIcon, ArrowRight
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI/ML Development", desc: "Custom machine learning models, NLP, and predictive analytics." },
  { icon: BarChart3, title: "Data Analytics & BI Dashboards", desc: "Transform data into visual insights for better decision-making." },
  { icon: Database, title: "Data Engineering Pipelines", desc: "Build and maintain robust ETL/ELT data infrastructure." },
  { icon: Zap, title: "Automation & Agents", desc: "Intelligent automation with AI agents and workflow optimization." },
  { icon: Code2, title: "Custom Software Development", desc: "Full-stack development of scalable, maintainable applications." },
  { icon: Rocket, title: "Product Strategy & MVP Build", desc: "From idea to launch — product-market fit focused development." },
];

const industries = [
  "Education", "Healthcare", "Retail", "Finance", "Logistics", "SMEs"
];

const processSteps = [
  { icon: Search, title: "Discover", desc: "Understand your needs and define project scope." },
  { icon: Palette, title: "Design", desc: "Architecture, UX/UI, and technical planning." },
  { icon: Wrench, title: "Build", desc: "Agile development with regular check-ins." },
  { icon: CloudCog, title: "Deploy", desc: "Launch with CI/CD, monitoring, and scaling." },
  { icon: HeadphonesIcon, title: "Support", desc: "Ongoing maintenance and continuous improvement." },
];

const EdGrowAI = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="dark-section section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/3 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-block">edgrow.ai · International Company</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              AI-powered software solutions and{" "}
              <span className="gradient-text">product engineering</span>
            </h1>
            <p className="mt-6 text-lg text-dark-foreground/70 max-w-2xl">
              We build scalable, intelligent systems that help businesses thrive in the age of AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products">Our Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedCard key={service.title} delay={i * 0.1}>
                <div className="card-hover rounded-xl border border-border p-6 bg-card h-full">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-secondary">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industries.map((industry, i) => (
              <AnimatedCard key={industry} delay={i * 0.05}>
                <span className="px-6 py-3 rounded-full border border-border text-sm font-medium bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default">
                  {industry}
                </span>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <AnimatedCard key={step.title} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 relative">
                      <step.icon className="w-6 h-6 text-primary" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section section-padding">
        <div className="container-narrow mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Ready to build something{" "}
              <span className="gradient-text">great</span>?
            </h2>
            <p className="mt-4 text-dark-foreground/70 max-w-xl mx-auto">
              Let's discuss your project and find the best solution for your business needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default EdGrowAI;

import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Brain, BarChart3, Database, Zap, Package, GraduationCap } from "lucide-react";

const features = [
  { icon: Brain, title: "AI & ML Solutions", desc: "Intelligent systems powered by machine learning and deep learning." },
  { icon: BarChart3, title: "Data Analytics & BI", desc: "Transform raw data into actionable business intelligence." },
  { icon: Database, title: "Data Engineering", desc: "Build robust data pipelines and infrastructure at scale." },
  { icon: Zap, title: "Intelligent Automation", desc: "Automate workflows with smart agents and AI-powered tools." },
  { icon: Package, title: "Product Development", desc: "From MVP to market — full-cycle product engineering." },
  { icon: GraduationCap, title: "Education Technology", desc: "EdTech programs that bridge gaps and empower learners." },
];

export const WhatWeDo = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From AI innovation to community education — we build solutions that matter.
          </p>
          <div className="section-divider mt-4" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedCard key={feature.title} delay={i * 0.1}>
              <div className="card-hover rounded-xl border border-border p-6 bg-card h-full">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

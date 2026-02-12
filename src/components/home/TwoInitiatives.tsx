import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Users, Globe, BookOpen, Cpu, BarChart3, Rocket } from "lucide-react";

export const TwoInitiatives = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Two Initiatives, <span className="gradient-text">One Vision</span>
          </h2>
          <div className="section-divider mt-4" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* edgrow.lk */}
          <AnimatedCard delay={0.1}>
            <div className="card-hover rounded-xl border border-border p-8 md:p-10 h-full flex flex-col bg-card">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">
                edgrow.lk
              </h3>
              <p className="text-sm text-primary font-medium mb-4">Community & Education Club</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Volunteer-driven national club",
                  "Workshops, tech campaigns, and learning events",
                  "Education through technology in every field",
                  "Focus: Northern, Eastern, Central → national expansion",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button variant="default" asChild>
                <Link to="/volunteer">Join as Volunteer</Link>
              </Button>
            </div>
          </AnimatedCard>

          {/* edgrow.ai */}
          <AnimatedCard delay={0.2}>
            <div className="card-hover rounded-xl border border-border p-8 md:p-10 h-full flex flex-col bg-card">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">
                edgrow.ai
              </h3>
              <p className="text-sm text-primary font-medium mb-4">International Software & AI Company</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Software solutions & product engineering",
                  "AI/ML, Data Analytics, BI & Automation",
                  "Build scalable systems and microservices",
                  "Product-focused innovation with client needs",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Cpu className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button variant="dark" asChild>
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

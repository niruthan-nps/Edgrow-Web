import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const partners = [
  { name: "Omdena", desc: "Global AI community for social impact projects.", type: "Partner" },
  { name: "SLIIT", desc: "Sri Lanka Institute of Information Technology.", type: "Collaboration" },
  { name: "Northern University", desc: "University partnerships for Northern Province.", type: "Collaboration" },
];

export const PartnersPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <div className="section-divider mt-4" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <AnimatedCard key={partner.name} delay={i * 0.1}>
              <div className="card-hover rounded-xl border border-border p-6 bg-card text-center h-full">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-7 h-7 text-muted-foreground" />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wide">{partner.type}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-1">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Button variant="darkOutline" size="lg" asChild>
            <Link to="/partners">View All Partners</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

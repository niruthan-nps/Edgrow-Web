import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Handshake, ExternalLink, Building2, GraduationCap } from "lucide-react";

const partners = [
  {
    name: "Omdena",
    type: "Partner",
    desc: "Omdena is a global platform for collaborative AI projects. EdGrow partners with Omdena to bring real-world AI for social impact to Sri Lanka and beyond.",
    icon: Handshake,
  },
  {
    name: "SLIIT",
    type: "Collaboration",
    desc: "Sri Lanka Institute of Information Technology — collaborating on research, workshops, and student engagement programs.",
    icon: GraduationCap,
  },
  {
    name: "Northern University",
    type: "Collaboration",
    desc: "University partnerships driving education technology adoption in the Northern Province.",
    icon: Building2,
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="dark-section section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-block">Partners</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-3xl">
              Together, we go <span className="gradient-text">further</span>
            </h1>
            <p className="mt-4 text-dark-foreground/70 max-w-2xl">
              Strategic partnerships that amplify our impact on education and technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners List */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, i) => (
              <AnimatedCard key={partner.name} delay={i * 0.1}>
                <div className="card-hover rounded-xl border border-border p-8 bg-card h-full flex flex-col text-center">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <partner.icon className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{partner.type}</span>
                  <h3 className="font-heading font-bold text-xl mt-2 mb-3">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{partner.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Future Partners Placeholder */}
      <section className="section-padding bg-secondary">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              More partners <span className="gradient-text">coming soon</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We're actively building partnerships with universities, NGOs, and tech companies worldwide.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[1, 2, 3].map((i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-dashed border-border p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-muted/60 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Partner Slot</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section section-padding">
        <div className="container-narrow mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Partner with <span className="gradient-text">EdGrow</span>
            </h2>
            <p className="mt-4 text-dark-foreground/70 max-w-xl mx-auto">
              Let's create something impactful together. Whether you're an organization, university, or company.
            </p>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/contact">Partner with EdGrow</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;

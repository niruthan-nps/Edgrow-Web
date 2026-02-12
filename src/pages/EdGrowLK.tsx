import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import {
  Users, BookOpen, Megaphone, MapPin, ArrowRight,
  Heart, Lightbulb, Globe2, Target
} from "lucide-react";
import { useState } from "react";

const programs = [
  { icon: Megaphone, title: "Tech Campaigns", desc: "Awareness campaigns on AI, data, and technology across communities." },
  { icon: BookOpen, title: "Workshops & Events", desc: "Hands-on learning events for students, teachers, and professionals." },
  { icon: Lightbulb, title: "Product Awareness", desc: "Training sessions on EdGrow products and modern tools." },
];

const expansionAreas = [
  { region: "Northern Province", status: "Active", color: "bg-primary" },
  { region: "Eastern Province", status: "Active", color: "bg-primary" },
  { region: "Central Province", status: "Expanding", color: "bg-primary/60" },
  { region: "National", status: "Planned", color: "bg-muted-foreground/30" },
];

const EdGrowLK = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", area: "", skills: "", why: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    alert("Thank you for your application! We'll be in touch.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="dark-section section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-primary blur-[80px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-block">edgrow.lk · Community Club</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              Bridge the fear gap of AI —{" "}
              <span className="gradient-text">help people adapt and grow</span>
            </h1>
            <p className="mt-6 text-lg text-dark-foreground/70 max-w-2xl">
              A volunteer-driven national education club empowering students, teachers, athletes, professionals, and everyone in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#volunteer-form">Apply to Volunteer</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Who It's <span className="gradient-text">For</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Students", "Teachers", "Athletes", "Professionals", "Entrepreneurs", "Everyone"].map((who, i) => (
              <AnimatedCard key={who} delay={i * 0.05}>
                <span className="px-5 py-2.5 rounded-full border border-border text-sm font-medium bg-card hover:bg-primary/5 hover:border-primary/30 transition-colors">
                  {who}
                </span>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-secondary">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Our <span className="gradient-text">Programs</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((prog, i) => (
              <AnimatedCard key={prog.title} delay={i * 0.1}>
                <div className="card-hover rounded-xl border border-border p-6 bg-card h-full">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <prog.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{prog.title}</h3>
                  <p className="text-sm text-muted-foreground">{prog.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Expansion <span className="gradient-text">Plan</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {expansionAreas.map((area, i) => (
                <AnimatedCard key={area.region} delay={i * 0.1}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-4 h-4 rounded-full ${area.color} shrink-0`} />
                    <div className="flex-1 flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-sm">{area.region}</span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground px-2.5 py-1 rounded-full bg-muted">
                        {area.status}
                      </span>
                    </div>
                    {i < expansionAreas.length - 1 && (
                      <div className="absolute left-[7px] mt-8 w-0.5 h-4 bg-border" />
                    )}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      {/* <section id="volunteer-form" className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Apply to <span className="gradient-text">Volunteer</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join our growing community and make a difference.
            </p>
            <div className="section-divider mt-4" />
          </AnimatedSection>

          <AnimatedSection>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
              {[
                { label: "Name", key: "name", type: "text", placeholder: "Your full name" },
                { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
                { label: "Phone", key: "phone", type: "tel", placeholder: "+94 XX XXX XXXX" },
                { label: "Area / Region", key: "area", type: "text", placeholder: "e.g., Northern Province" },
                { label: "Skills", key: "skills", type: "text", placeholder: "e.g., Web dev, Marketing, Teaching" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1.5">Why do you want to volunteer?</label>
                <textarea
                  placeholder="Tell us about your motivation..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow min-h-[100px] resize-y"
                  value={formData.why}
                  onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Apply to Volunteer
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section> */}
    </Layout>
  );
};

export default EdGrowLK;

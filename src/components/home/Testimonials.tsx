import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "EdGrow's workshops opened my eyes to AI possibilities I never imagined. Their community is incredibly supportive.",
    author: "Kavitha S.",
    role: "University Student",
  },
  {
    quote: "Working with edgrow.ai was a game-changer for our data pipeline. Their team delivered scalable solutions on time.",
    author: "Mark D.",
    role: "CTO, Tech Startup",
  },
  {
    quote: "The volunteer programs gave me real-world experience and connected me with amazing professionals across Sri Lanka.",
    author: "Arun P.",
    role: "EdGrow Volunteer",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="section-divider mt-4" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedCard key={t.author} delay={i * 0.1}>
              <div className="rounded-xl border border-border p-6 bg-card h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-heading font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

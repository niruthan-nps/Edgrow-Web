import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    name: "Aurora Learn",
    category: "Education",
    problem: "Children with autism lack personalized, sensory-friendly learning tools.",
    solution: "AI-powered adaptive learning platform designed specifically for autistic children with customizable interfaces.",
    status: "Beta",
    featured: true,
  },
  {
    name: "EdGrow Learning Hub",
    category: "Community",
    problem: "Rural communities lack access to quality tech education resources.",
    solution: "Community learning platform for collaborative, self-paced education with mentorship.",
    status: "Live",
    featured: false,
  },
  {
    name: "Workshop Toolkit",
    category: "Education",
    problem: "Educators struggle to organize and manage training content efficiently.",
    solution: "Training & curriculum management system for workshop organizers and educators.",
    status: "Beta",
    featured: false,
  },
  {
    name: "Future Tablet PC",
    category: "Education",
    problem: "Children need safe, dedicated learning devices free from distractions.",
    solution: "Purpose-built education tablet with curated content and parental controls.",
    status: "Coming Soon",
    featured: false,
  },
  {
    name: "AI Analytics Dashboard",
    category: "AI",
    problem: "Businesses need real-time insights but lack data science expertise.",
    solution: "No-code analytics dashboard powered by AI for automated insights.",
    status: "Coming Soon",
    featured: false,
  },
  {
    name: "Smart Curriculum Engine",
    category: "AI",
    problem: "Curriculum design is time-consuming and often outdated.",
    solution: "AI engine that generates and updates curriculum based on industry trends.",
    status: "Coming Soon",
    featured: false,
  },
  {
    name: "Community Connect",
    category: "Community",
    problem: "Volunteers and learners struggle to find each other.",
    solution: "Platform connecting volunteers with learning communities based on skills and location.",
    status: "Coming Soon",
    featured: false,
  },
];

const filters = ["All", "Education", "AI", "Community"];

const statusColors: Record<string, string> = {
  "Live": "bg-green-100 text-green-700",
  "Beta": "bg-primary/10 text-primary",
  "Coming Soon": "bg-muted text-muted-foreground",
};

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="dark-section section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-block">Products</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-3xl">
              Products that <span className="gradient-text">empower</span>
            </h1>
            <p className="mt-4 text-dark-foreground/70 max-w-2xl">
              From AI tools to community platforms — every product is built with purpose.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((product, i) => (
              <AnimatedCard key={product.name} delay={i * 0.08}>
                <div className={`card-hover rounded-xl border p-6 md:p-8 h-full flex flex-col ${
                  product.featured ? "border-primary/30 bg-primary/[0.02]" : "border-border bg-card"
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {product.featured && <Star className="w-4 h-4 text-primary fill-primary" />}
                      <h3 className="font-heading font-bold text-xl">{product.name}</h3>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                      {product.status}
                    </span>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">{product.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground">{product.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    {/* <Button
                      variant={product.status === "Coming Soon" ? "darkOutline" : "default"}
                      size="sm"
                    >
                      {product.status === "Coming Soon" ? "Learn More" : "Request Demo"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button> */}
                    <Button
                        variant={product.status === "Coming Soon" ? "darkOutline" : "default"}
                        size="sm"
>
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>

                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

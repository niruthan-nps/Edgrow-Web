import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Aurora Learn", desc: "AI-powered learning platform for autistic children.", status: "Beta" },
  { name: "EdGrow Learning Hub", desc: "Community learning platform for collaborative education.", status: "Live" },
  { name: "Workshop Toolkit", desc: "Training & curriculum management for educators.", status: "Beta" },
  { name: "Future Tablet PC", desc: "Safe education device designed for children.", status: "Coming Soon" },
  { name: "Product 5", desc: "Stay tuned for our next innovation.", status: "Coming Soon" },
  { name: "Product 6", desc: "More exciting tools on the horizon.", status: "Coming Soon" },
  { name: "Product 7", desc: "Building the future of education technology.", status: "Coming Soon" },
];

const statusColors: Record<string, string> = {
  "Live": "bg-green-100 text-green-700",
  "Beta": "bg-primary/10 text-primary",
  "Coming Soon": "bg-muted text-muted-foreground",
};

export const ProductsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Products We're <span className="gradient-text">Building</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Innovative tools and platforms that empower education and drive growth.
          </p>
          <div className="section-divider mt-4" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <AnimatedCard key={product.name} delay={i * 0.08}>
              <div className="card-hover rounded-xl border border-border p-6 bg-card h-full flex flex-col">
                <span className={`self-start px-2.5 py-0.5 rounded-full text-xs font-medium mb-4 ${statusColors[product.status]}`}>
                  {product.status}
                </span>
                <h3 className="font-heading font-semibold text-base mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{product.desc}</p>
                <Link
                  to="/products"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Button variant="darkOutline" size="lg" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

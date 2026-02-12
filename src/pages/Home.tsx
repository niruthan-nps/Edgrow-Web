import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TwoInitiatives } from "@/components/home/TwoInitiatives";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { PartnersPreview } from "@/components/home/PartnersPreview";
import { Testimonials } from "@/components/home/Testimonials";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <TwoInitiatives />
      <WhatWeDo />
      <ProductsPreview />
      <PartnersPreview />
      <Testimonials />
    </Layout>
  );
};

export default Home;

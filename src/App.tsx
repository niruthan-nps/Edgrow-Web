import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EdGrowLK from "./pages/EdGrowLK";
import EdGrowAI from "./pages/EdGrowAI";
import Products from "./pages/Products";
import Partners from "./pages/Partners";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NetlifyForms from "@/components/NetlifyForms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NetlifyForms />
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<EdGrowLK />} />
          <Route path="/company" element={<EdGrowAI />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

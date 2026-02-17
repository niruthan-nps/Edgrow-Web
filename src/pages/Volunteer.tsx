import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Users, Code2, Heart, Rocket } from "lucide-react";
import { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", area: "", skills: "", why: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("https://script.google.com/macros/s/AKfycbweK2BZZ8S_QJHSXi8S_MPrWzXg3Ghh7Qs75tvHuHokq7-ievmcQDeOIfw8Ma7FPtRavw/exec", {
    method: "POST",
    body: JSON.stringify({
      formType: "Volunteer",
      ...formData
    })
  });

  alert("Thank you for your volunteer application! We'll be in touch.");
};


  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
        { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
        { label: "Phone", key: "phone", type: "tel", placeholder: "+94 XX XXX XXXX" },
        { label: "Area / Region", key: "area", type: "text", placeholder: "e.g., Northern Province" },
        { label: "Skills", key: "skills", type: "text", placeholder: "e.g., Web dev, Design, Teaching" },
      ].map((field) => (
        <div key={field.key}>
          <label className="block text-sm font-medium mb-1.5">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
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
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px] resize-y"
          value={formData.why}
          onChange={(e) => setFormData({ ...formData, why: e.target.value })}
          required
        />
      </div>
      <Button type="submit" variant="default" size="lg" className="w-full">
        Apply to Volunteer
      </Button>
    </form>
  );
};

const CollaborateForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", role: "", portfolio: "", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("https://script.google.com/macros/s/AKfycbweK2BZZ8S_QJHSXi8S_MPrWzXg3Ghh7Qs75tvHuHokq7-ievmcQDeOIfw8Ma7FPtRavw/exec", {
    method: "POST",
    body: JSON.stringify({
      formType: "Collaborate",
      ...formData
    })
  });

  alert("Thank you for your interest! We'll review your application.");
};


  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
        { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
        { label: "Role of Interest", key: "role", type: "text", placeholder: "e.g., Developer, Designer, Data Scientist" },
        { label: "Portfolio / LinkedIn", key: "portfolio", type: "url", placeholder: "https://..." },
      ].map((field) => (
        <div key={field.key}>
          <label className="block text-sm font-medium mb-1.5">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={formData[field.key as keyof typeof formData]}
            onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
            required
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium mb-1.5">Tell us about yourself</label>
        <textarea
          placeholder="Your experience, interests, and what excites you about EdGrow..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px] resize-y"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>
      <Button type="submit" variant="dark" size="lg" className="w-full">
        Submit Application
      </Button>
    </form>
  );
};

const Volunteer = () => {
  const [activeTab, setActiveTab] = useState<"volunteer" | "collaborate">("volunteer");

  return (
    <Layout>
      {/* Hero */}
      <section className="dark-section section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-primary blur-[100px]" />
        </div>
        <div className="container-wide mx-auto relative z-10">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-block">Join Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              Be part of the <span className="gradient-text">movement</span>
            </h1>
            <p className="mt-6 text-lg text-dark-foreground/70 max-w-2xl">
              Whether you want to volunteer for the community or build with us professionally — there's a place for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two Paths */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Choose your <span className="gradient-text">path</span>
            </h2>
            <div className="section-divider mt-4" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <AnimatedCard delay={0.1}>
              <button
                onClick={() => setActiveTab("volunteer")}
                className={`w-full card-hover rounded-xl border p-6 text-left transition-all ${
                  activeTab === "volunteer" ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Volunteer for edgrow.lk</h3>
                    <p className="text-xs text-muted-foreground">Community • Education • Impact</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join our volunteer network and help bring technology education to communities across Sri Lanka.
                </p>
              </button>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <button
                onClick={() => setActiveTab("collaborate")}
                className={`w-full card-hover rounded-xl border p-6 text-left transition-all ${
                  activeTab === "collaborate" ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Build with edgrow.ai</h3>
                    <p className="text-xs text-muted-foreground">Intern • Collaborate • Build</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Work on real AI projects, intern with our team, or collaborate on cutting-edge products.
                </p>
              </button>
            </AnimatedCard>
          </div>

          {/* Form */}
          <AnimatedSection>
            <div className="max-w-xl mx-auto">
              <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
                <h3 className="font-heading font-bold text-xl mb-6">
                  {activeTab === "volunteer" ? "Volunteer Application" : "Collaboration Application"}
                </h3>
                {activeTab === "volunteer" ? <VolunteerForm /> : <CollaborateForm />}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;



// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
// import { Heart, Rocket } from "lucide-react";
// import { useState } from "react";

// const VolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", phone: "", area: "", skills: "", why: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     alert("Thank you for your volunteer application! We'll be in touch.");
//   };

//   return (
//     <form
//       name="volunteer"
//       method="POST"
//       data-netlify="true"
//       onSubmit={handleSubmit}
//       className="space-y-5"
//     >
//       <input type="hidden" name="form-name" value="volunteer" />

//       {[
//         { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
//         { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
//         { label: "Phone", key: "phone", type: "tel", placeholder: "+94 XX XXX XXXX" },
//         { label: "Area / Region", key: "area", type: "text", placeholder: "e.g., Northern Province" },
//         { label: "Skills", key: "skills", type: "text", placeholder: "e.g., Web dev, Design, Teaching" },
//       ].map((field) => (
//         <div key={field.key}>
//           <label className="block text-sm font-medium mb-1.5">{field.label}</label>
//           <input
//             type={field.type}
//             name={field.key}
//             placeholder={field.placeholder}
//             className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
//             value={formData[field.key as keyof typeof formData]}
//             onChange={handleChange}
//             required
//           />
//         </div>
//       ))}

//       <div>
//         <label className="block text-sm font-medium mb-1.5">Why do you want to volunteer?</label>
//         <textarea
//           name="why"
//           placeholder="Tell us about your motivation..."
//           className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px] resize-y"
//           value={formData.why}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <Button type="submit" variant="default" size="lg" className="w-full">
//         Apply to Volunteer
//       </Button>
//     </form>
//   );
// };

// const CollaborateForm = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", role: "", portfolio: "", message: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     alert("Thank you for your interest! We'll review your application.");
//   };

//   return (
//     <form
//       name="collaborate"
//       method="POST"
//       data-netlify="true"
//       onSubmit={handleSubmit}
//       className="space-y-5"
//     >
//       <input type="hidden" name="form-name" value="collaborate" />

//       {[
//         { label: "Full Name", key: "name", type: "text", placeholder: "Your full name" },
//         { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
//         { label: "Role of Interest", key: "role", type: "text", placeholder: "e.g., Developer, Designer, Data Scientist" },
//         { label: "Portfolio / LinkedIn", key: "portfolio", type: "url", placeholder: "https://..." },
//       ].map((field) => (
//         <div key={field.key}>
//           <label className="block text-sm font-medium mb-1.5">{field.label}</label>
//           <input
//             type={field.type}
//             name={field.key}
//             placeholder={field.placeholder}
//             className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
//             value={formData[field.key as keyof typeof formData]}
//             onChange={handleChange}
//             required
//           />
//         </div>
//       ))}

//       <div>
//         <label className="block text-sm font-medium mb-1.5">Tell us about yourself</label>
//         <textarea
//           name="message"
//           placeholder="Your experience, interests, and what excites you about EdGrow..."
//           className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px] resize-y"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <Button type="submit" variant="dark" size="lg" className="w-full">
//         Submit Application
//       </Button>
//     </form>
//   );
// };

// const Volunteer = () => {
//   const [activeTab, setActiveTab] = useState<"volunteer" | "collaborate">("volunteer");

//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="dark-section section-padding relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-primary blur-[100px]" />
//         </div>
//         <div className="container-wide mx-auto relative z-10">
//           <AnimatedSection>
//             <span className="badge-accent mb-6 inline-block">Join Us</span>
//             <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
//               Be part of the <span className="gradient-text">movement</span>
//             </h1>
//             <p className="mt-6 text-lg text-dark-foreground/70 max-w-2xl">
//               Whether you want to volunteer for the community or build with us professionally — there's a place for you.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Two Paths */}
//       <section className="section-padding">
//         <div className="container-wide mx-auto">
//           <AnimatedSection className="text-center mb-12">
//             <h2 className="font-heading text-3xl md:text-4xl font-bold">
//               Choose your <span className="gradient-text">path</span>
//             </h2>
//             <div className="section-divider mt-4" />
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
//             <AnimatedCard delay={0.1}>
//               <button
//                 onClick={() => setActiveTab("volunteer")}
//                 className={`w-full card-hover rounded-xl border p-6 text-left transition-all ${
//                   activeTab === "volunteer" ? "border-primary bg-primary/5" : "border-border bg-card"
//                 }`}
//               >
//                 <div className="flex items-center gap-4 mb-3">
//                   <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
//                     <Heart className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-heading font-bold text-lg">Volunteer for edgrow.lk</h3>
//                     <p className="text-xs text-muted-foreground">Community • Education • Impact</p>
//                   </div>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   Join our volunteer network and help bring technology education to communities across Sri Lanka.
//                 </p>
//               </button>
//             </AnimatedCard>

//             <AnimatedCard delay={0.2}>
//               <button
//                 onClick={() => setActiveTab("collaborate")}
//                 className={`w-full card-hover rounded-xl border p-6 text-left transition-all ${
//                   activeTab === "collaborate" ? "border-primary bg-primary/5" : "border-border bg-card"
//                 }`}
//               >
//                 <div className="flex items-center gap-4 mb-3">
//                   <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
//                     <Rocket className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-heading font-bold text-lg">Build with edgrow.ai</h3>
//                     <p className="text-xs text-muted-foreground">Intern • Collaborate • Build</p>
//                   </div>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   Work on real AI projects, intern with our team, or collaborate on cutting-edge products.
//                 </p>
//               </button>
//             </AnimatedCard>
//           </div>

//           {/* Form */}
//           <AnimatedSection>
//             <div className="max-w-xl mx-auto">
//               <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
//                 <h3 className="font-heading font-bold text-xl mb-6">
//                   {activeTab === "volunteer" ? "Volunteer Application" : "Collaboration Application"}
//                 </h3>
//                 {activeTab === "volunteer" ? <VolunteerForm /> : <CollaborateForm />}
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Volunteer;

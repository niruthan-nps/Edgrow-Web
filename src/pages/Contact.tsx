// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { AnimatedSection } from "@/components/AnimatedSection";
// import { Mail, Phone, MapPin, Globe } from "lucide-react";
// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", subject: "", message: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thank you for your message! We'll get back to you soon.");
//   };

//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="dark-section section-padding">
//         <div className="container-wide mx-auto">
//           <AnimatedSection>
//             <span className="badge-accent mb-6 inline-block">Contact</span>
//             <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-3xl">
//               Let's <span className="gradient-text">connect</span>
//             </h1>
//             <p className="mt-4 text-dark-foreground/70 max-w-2xl">
//               Have a question, idea, or project? We'd love to hear from you.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       <section className="section-padding">
//         <div className="container-wide mx-auto">
//           <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
//             {/* Contact Info */}
//             <div className="lg:col-span-2">
//               <AnimatedSection>
//                 <h2 className="font-heading text-2xl font-bold mb-6">Get in touch</h2>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                       <Mail className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm mb-1">Email</p>
//                       <p className="text-sm text-muted-foreground">info@edgrow.lk</p>
//                       <p className="text-sm text-muted-foreground">hello@edgrow.ai</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                       <Phone className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm mb-1">Phone</p>
//                       <p className="text-sm text-muted-foreground">+94 70 111 1484</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                       <MapPin className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm mb-1">Location</p>
//                       <p className="text-sm text-muted-foreground">Sri Lanka</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                       <Globe className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm mb-1">Domains</p>
//                       <p className="text-sm text-muted-foreground">edgrow.lk</p>
//                       <p className="text-sm text-muted-foreground">edgrow.ai</p>
//                     </div>
//                   </div>
//                 </div>
//               </AnimatedSection>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-3">
//               <AnimatedSection>
//                 <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
//                   <h3 className="font-heading font-bold text-xl mb-6">Send a message</h3>
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="grid sm:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-sm font-medium mb-1.5">Name</label>
//                         <input
//                           type="text"
//                           placeholder="Your name"
//                           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
//                           value={formData.name}
//                           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-1.5">Email</label>
//                         <input
//                           type="email"
//                           placeholder="you@example.com"
//                           className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
//                           value={formData.email}
//                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1.5">Subject</label>
//                       <input
//                         type="text"
//                         placeholder="What's this about?"
//                         className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
//                         value={formData.subject}
//                         onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1.5">Message</label>
//                       <textarea
//                         placeholder="Tell us what you need..."
//                         className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[140px] resize-y"
//                         value={formData.message}
//                         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                         required
//                       />
//                     </div>
//                     <Button type="submit" variant="default" size="lg" className="w-full">
//                       Send Message
//                     </Button>
//                   </form>
//                 </div>
//               </AnimatedSection>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Contact;



import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Optional: prevent default if you want Netlify to handle actual submission
    // e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="dark-section section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-block">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-3xl">
              Let's <span className="gradient-text">connect</span>
            </h1>
            <p className="mt-4 text-dark-foreground/70 max-w-2xl">
              Have a question, idea, or project? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">info@edgrow.lk</p>
                      <p className="text-sm text-muted-foreground">hello@edgrow.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">+94 70 111 1484</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Domains</p>
                      <p className="text-sm text-muted-foreground">edgrow.lk</p>
                      <p className="text-sm text-muted-foreground">edgrow.ai</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
                  <h3 className="font-heading font-bold text-xl mb-6">Send a message</h3>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell us what you need..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[140px] resize-y"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

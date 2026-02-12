import { Link } from "react-router-dom";
import { EdGrowLogo } from "@/components/EdGrowLogo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Community (edgrow.lk)", href: "/community" },
  { label: "Company (edgrow.ai)", href: "/company" },
  { label: "Products", href: "/products" },
  { label: "Partners", href: "/partners" },
  { label: "Volunteer / Join", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="dark-section">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <EdGrowLogo variant="light" />
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Education Growth Through Technology. One umbrella, two missions — empowering communities and building intelligent solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-dark-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-50">Contact</h4>
            <div className="space-y-3 text-sm opacity-70">
              <p>info@edgrow.lk</p>
              <p>hello@edgrow.ai</p>
              <p>+94 70 111 1484</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} EdGrow. All rights reserved.
          </p>
          <p className="text-xs opacity-50">
            edgrow.lk · edgrow.ai
          </p>
        </div>
      </div>
    </footer>
  );
};

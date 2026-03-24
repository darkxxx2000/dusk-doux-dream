import { Link } from "react-router-dom";

const CONTACT_URL = "https://example.com/contact"; // Replace with your own URL

const Footer = () => (
  <footer className="border-t border-border/50 mt-auto">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col items-center gap-3">
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/usage" className="hover:text-primary transition-colors">Usage</Link>
          <span className="text-border">·</span>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms and Conditions</Link>
          <span className="text-border">·</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span className="text-border">·</span>
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Disclaimer */}
        <p className="text-[10px] text-muted-foreground/60 text-center max-w-md leading-relaxed">
          All content on this site is fictional and intended for entertainment purposes only.
          Characters and scenarios depicted are entirely imaginary.
        </p>

        <p className="text-[10px] text-muted-foreground/40">
          © 2026 Magma Hub. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

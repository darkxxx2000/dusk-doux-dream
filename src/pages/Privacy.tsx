import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-40 bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold text-gradient">MAGMA HUB</Link>
      </div>
    </header>
    <main className="container mx-auto px-4 py-8 flex-1 max-w-2xl">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <h1 className="font-display text-3xl font-black text-foreground mb-6">Privacy Policy</h1>
      <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-4">
        <p>Your privacy is important to us. This Privacy Policy explains how Magma Hub collects, uses, and protects your information.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Information We Collect</h2>
        <p>We may collect non-personal information such as browser type, device information, and usage statistics to improve our services. We do not collect personally identifiable information unless voluntarily provided.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Cookies</h2>
        <p>This website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings, though some features may not function properly.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Third-Party Services</h2>
        <p>We may use third-party analytics services that collect anonymous usage data. These services have their own privacy policies governing the use of such information.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Data Security</h2>
        <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;

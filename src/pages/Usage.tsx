import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Usage = () => (
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
      <h1 className="font-display text-3xl font-black text-foreground mb-6">Usage Policy</h1>
      <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-4">
        <p>Welcome to Magma Hub. By accessing and using this website, you agree to comply with the following usage guidelines.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Acceptable Use</h2>
        <p>You may browse, view, and interact with content on this platform for personal, non-commercial entertainment purposes. You agree not to reproduce, distribute, or modify any content without prior written consent.</p>
        <h2 className="text-foreground font-display text-lg font-bold">User Conduct</h2>
        <p>Users are expected to behave respectfully in all interactions, including comments and community features. Harassment, spam, or abusive behavior will result in account suspension.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Content Guidelines</h2>
        <p>All content on this platform is fictional and created for entertainment purposes only. Any resemblance to real persons, living or deceased, is purely coincidental.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Modifications</h2>
        <p>We reserve the right to update these usage guidelines at any time. Continued use of the platform constitutes acceptance of any changes.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Usage;

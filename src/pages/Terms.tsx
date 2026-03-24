import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Terms = () => (
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
      <h1 className="font-display text-3xl font-black text-foreground mb-6">Terms and Conditions</h1>
      <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-4">
        <p>These Terms and Conditions govern your use of Magma Hub. By accessing this website, you accept these terms in full.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Intellectual Property</h2>
        <p>All content, including but not limited to text, graphics, logos, and software, is the property of Magma Hub or its content creators and is protected by applicable intellectual property laws.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Limitation of Liability</h2>
        <p>Magma Hub shall not be liable for any indirect, incidental, or consequential damages arising from the use of this platform. All content is provided "as is" without warranties of any kind.</p>
        <h2 className="text-foreground font-display text-lg font-bold">User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Termination</h2>
        <p>We may terminate or suspend access to our platform immediately, without prior notice, for any reason including breach of these Terms.</p>
        <h2 className="text-foreground font-display text-lg font-bold">Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;

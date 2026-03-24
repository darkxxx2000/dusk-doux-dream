import { useState } from "react";
import { Sparkles, ExternalLink, Pencil, Check } from "lucide-react";

const AISection = () => {
  const [isAdmin] = useState(false); // Toggle to true for admin mode
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("AI-Powered Creations");
  const [description, setDescription] = useState(
    "Explore our latest AI-generated artwork and stories. Cutting-edge technology meets anime aesthetics to create stunning visuals you've never seen before."
  );
  const [buttonUrl, setButtonUrl] = useState("https://example.com/ai-gallery");
  const [buttonLabel, setButtonLabel] = useState("Explore AI Gallery");

  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="anime-card rounded-xl overflow-hidden glow-border">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-80 aspect-square md:aspect-auto bg-muted/40 shrink-0 flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-primary/40" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-start justify-between mb-1">
              <span className="text-xs text-primary font-semibold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI Section
              </span>
              {isAdmin && !editing && (
                <button
                  onClick={() => setEditing(true)}
                  className="p-1.5 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-colors"
                  title="Edit (Admin)"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              )}
              {isAdmin && editing && (
                <button
                  onClick={() => setEditing(false)}
                  className="p-1.5 rounded-md bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {editing ? (
              <div className="space-y-3">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-muted rounded-md px-3 py-2 text-foreground text-lg font-display font-bold outline-none focus:ring-1 focus:ring-primary"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full bg-muted rounded-md px-3 py-2 text-muted-foreground text-sm outline-none resize-none focus:ring-1 focus:ring-primary"
                />
                <div className="flex gap-2">
                  <input
                    value={buttonLabel}
                    onChange={(e) => setButtonLabel(e.target.value)}
                    placeholder="Button text"
                    className="flex-1 bg-muted rounded-md px-3 py-2 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    value={buttonUrl}
                    onChange={(e) => setButtonUrl(e.target.value)}
                    placeholder="URL"
                    className="flex-1 bg-muted rounded-md px-3 py-2 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-black text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg">{description}</p>
                <a
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground font-display font-bold text-sm hover:bg-destructive/90 transition-colors w-fit"
                >
                  {buttonLabel}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;

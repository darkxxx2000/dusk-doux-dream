import { useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { doujinshiItems } from "@/data/content";
import { GENRE_COLORS } from "@/data/content";

const DoujinshiSection = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const openViewer = (idx: number) => {
    setCurrentItem(idx);
    setCurrentPage(0);
    setViewerOpen(true);
  };

  const item = doujinshiItems[currentItem];
  const totalPages = item.pages;

  return (
    <>
      <section className="container mx-auto px-4 pb-12">
        <h3 className="font-display text-xl font-bold mb-6 text-foreground flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" /> Doujinshi Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doujinshiItems.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => openViewer(idx)}
              className="anime-card rounded-lg p-4 text-left hover:glow-border transition-all group"
            >
              <div className="flex gap-3">
                <div className="w-20 h-28 bg-muted/50 rounded-md shrink-0 flex items-center justify-center relative overflow-hidden">
                  <span className={`absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded ${GENRE_COLORS[d.genre]} text-white`}>
                    {d.genre}
                  </span>
                  <Images className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-foreground truncate">{d.title}</h4>
                  <p className="text-xs text-muted-foreground">{d.subtitle}</p>
                  <p className="text-xs text-primary mt-1">{d.pages} pages</p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {d.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] bg-muted/80 text-muted-foreground px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Viewer Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground">Page {currentPage + 1} / {totalPages}</p>
            </div>
            <button onClick={() => setViewerOpen(false)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="absolute left-4 p-2 bg-muted/50 rounded-full text-foreground hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-full max-w-lg aspect-[3/4] bg-muted/30 rounded-lg flex items-center justify-center mx-16">
              <p className="text-muted-foreground text-sm">Page {currentPage + 1}</p>
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="absolute right-4 p-2 bg-muted/50 rounded-full text-foreground hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DoujinshiSection;

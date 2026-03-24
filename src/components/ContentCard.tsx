import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { GENRE_COLORS, type ContentItem } from "@/data/content";

const ContentCard = ({ item }: { item: ContentItem }) => (
  <Link
    to={`/comic/${item.id}`}
    className="anime-card rounded-lg overflow-hidden group cursor-pointer hover:glow-border transition-all block"
  >
    <div className="aspect-[3/4] bg-muted/50 relative">
      {/* Genre label top-left */}
      <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold uppercase px-2 py-0.5 rounded ${GENRE_COLORS[item.genre]} text-white`}>
        {item.genre}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <span className="text-xs text-primary font-semibold">{item.series}</span>
        <h4 className="text-sm font-bold text-foreground truncate">{item.title}</h4>
        <p className="text-[11px] text-muted-foreground truncate">{item.subtitle}</p>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="text-xs text-muted-foreground">{item.rating}</span>
        </div>
        {/* Tags */}
        <div className="flex gap-1 mt-1.5 flex-wrap">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[9px] bg-muted/80 text-muted-foreground px-1.5 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

export default ContentCard;

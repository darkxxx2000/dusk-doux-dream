import { ALL_GENRES, ALL_SERIES, ALL_CHARACTERS, GENRE_COLORS, type Genre, type Series, type Character } from "@/data/content";
import { Filter, X } from "lucide-react";

interface SidebarFiltersProps {
  selectedGenres: Genre[];
  selectedSeries: Series[];
  selectedCharacters: Character[];
  onToggleGenre: (g: Genre) => void;
  onToggleSeries: (s: Series) => void;
  onToggleCharacter: (c: Character) => void;
  onClear: () => void;
}

const SidebarFilters = ({
  selectedGenres, selectedSeries, selectedCharacters,
  onToggleGenre, onToggleSeries, onToggleCharacter, onClear,
}: SidebarFiltersProps) => {
  const hasFilters = selectedGenres.length + selectedSeries.length + selectedCharacters.length > 0;

  return (
    <aside className="w-full lg:w-56 shrink-0">
      <div className="anime-card rounded-xl p-4 sticky top-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary" /> Filters
          </h3>
          {hasFilters && (
            <button onClick={onClear} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Genres */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Genres</h4>
          <div className="flex flex-wrap gap-1.5">
            {ALL_GENRES.map((g) => (
              <button
                key={g}
                onClick={() => onToggleGenre(g)}
                className={`text-xs px-2 py-1 rounded-md font-medium transition-all ${
                  selectedGenres.includes(g)
                    ? `${GENRE_COLORS[g]} text-white`
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Series */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Series</h4>
          <div className="space-y-1">
            {ALL_SERIES.map((s) => (
              <button
                key={s}
                onClick={() => onToggleSeries(s)}
                className={`block w-full text-left text-xs px-2 py-1.5 rounded-md transition-all ${
                  selectedSeries.includes(s)
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Characters */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Characters</h4>
          <div className="flex flex-wrap gap-1.5">
            {ALL_CHARACTERS.map((c) => (
              <button
                key={c}
                onClick={() => onToggleCharacter(c)}
                className={`text-xs px-2 py-1 rounded-md transition-all ${
                  selectedCharacters.includes(c)
                    ? "bg-secondary/20 text-secondary font-semibold border border-secondary/30"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilters;

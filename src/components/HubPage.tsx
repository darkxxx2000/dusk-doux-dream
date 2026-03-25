import { useState, useMemo } from "react";
import { Flame, Star, Clock, TrendingUp, Heart, BookOpen } from "lucide-react";
import { contentItems, type Genre, type Series, type Character } from "@/data/content";
import SidebarFilters from "./SidebarFilters";
import ContentCard from "./ContentCard";
import DoujinshiSection from "./DoujinshiSection";
import AISection from "./AISection";
import Footer from "./Footer";
import ErikaComic from "./ErikaComic";

const categories = [
  { icon: Flame, label: "Trending", count: 128 },
  { icon: BookOpen, label: "Doujinshi", count: 256, link: "#doujinshi" },
  { icon: Clock, label: "Recent", count: 64 },
  { icon: TrendingUp, label: "Top Rated", count: 312 },
  { icon: Heart, label: "Favorites", count: 89 }
];

const HubPage = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<Series[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const toggleGenre = (g: Genre) =>
    setSelectedGenres((p) => (p.includes(g) ? p.filter((x) => x !== g) : [...p, g]));

  const toggleSeries = (s: Series) =>
    setSelectedSeries((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const toggleCharacter = (c: Character) =>
    setSelectedCharacters((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const clearFilters = () => {
    setSelectedGenres([]);
    setSelectedSeries([]);
    setSelectedCharacters([]);
  };

  const filtered = useMemo(() => {
    return contentItems.filter((item) => {
      if (selectedGenres.length && !selectedGenres.includes(item.genre)) return false;
      if (selectedSeries.length && !selectedSeries.includes(item.series)) return false;
      if (selectedCharacters.length && !selectedCharacters.some((c) => item.characters.includes(c)))
        return false;
      return true;
    });
  }, [selectedGenres, selectedSeries, selectedCharacters]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    filtered.forEach((item) => {
      const arr = map.get(item.series) ?? [];
      arr.push(item);
      map.set(item.series, arr);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* HEADER */}
      <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-gradient">Hot Sweet Comics</h1>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-16 md:py-24 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
          Welcome to <span className="text-gradient">Magma Doux</span>
        </h2>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
  <a
    key={cat.label}
    href={cat.link || "#"}
    className="anime-card p-4 text-center block hover:scale-105 transition"
  >
    <cat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
    <span className="block text-sm">{cat.label}</span>
  </a>
))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* SIDEBAR */}
          <SidebarFilters
            selectedGenres={selectedGenres}
            selectedSeries={selectedSeries}
            selectedCharacters={selectedCharacters}
            onToggleGenre={toggleGenre}
            onToggleSeries={toggleSeries}
            onToggleCharacter={toggleCharacter}
            onClear={clearFilters}
          />

          {/* CONTENT */}
          <div className="flex-1 min-w-0">

            {/* GALERÍA */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

  <a href="#doujinshi">
    <img
      src="https://ah-img.luscious.net/KOKOMIEL/556657/5_01JG21X48ATXDNYTZ0J6TAD73N.640x0.jpg"
      alt=""
    />
  </a>

  <img
    src="https://ah-img.luscious.net/KOKOMIEL/556657/5_01JG21X48ATXDNYTZ0J6TAD73N.640x0.jpg"
    alt=""
  />

  <img
    src="https://ah-img.luscious.net/KOKOMIEL/556657/5_01JG21X48ATXDNYTZ0J6TAD73N.640x0.jpg"
    alt=""
  />

</div>

            {/* FEATURED */}
            <div className="mt-12">
              <h3 className="font-bold text-xl mb-6">Featured</h3>

              {Array.from(grouped.entries()).map(([series, items]) => (
                <div key={series} className="mb-8">
                  <h4 className="text-sm font-semibold mb-3">{series}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item) => (
                      <ContentCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="text-sm text-center py-12">No content matches your filters.</p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* DOIJINSHI */}
<div id="doujinshi" className="mt-12 container mx-auto px-4">

  <h2 className="text-2xl font-bold mb-6">Doujinshi</h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    {/* ERIKA CARD */}
    <a href="#erika" className="anime-card p-3 block hover:scale-105 transition">

      <img
        src="https://ah-img.luscious.net/KOKOMIEL/370689/portada_01E5WK4YVKQ2ZZJE6ZR0N6JPEF.1024x0.jpg"
        className="rounded-md mb-2"
        alt="Erika portada"
      />

      <h3 className="font-bold">ERIKA</h3>
      <p className="text-xs text-muted-foreground">
        Comic series
      </p>

    </a>

  </div>

</div>

{/* ERIKA SECTION */}
<div id="erika" className="mt-16">
  <ErikaComic />
</div>

{/* AI */}
<AISection />

{/* FOOTER */}
<Footer />

    </div>
  );
};

export default HubPage;

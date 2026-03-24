import { useState, useMemo } from "react";
import { Flame, Star, Clock, TrendingUp, Heart, BookOpen } from "lucide-react";
import { contentItems, type Genre, type Series, type Character } from "@/data/content";
import SidebarFilters from "./SidebarFilters";
import ContentCard from "./ContentCard";
import DoujinshiSection from "./DoujinshiSection";
import AISection from "./AISection";
import Footer from "./Footer";

const categories = [
{ icon: Flame, label: "Trending", count: 128 },
{ icon: Star, label: "Popular", count: 256 },
{ icon: Clock, label: "Recent", count: 64 },
{ icon: TrendingUp, label: "Top Rated", count: 312 },
{ icon: Heart, label: "Favorites", count: 89 },
{ icon: BookOpen, label: "Collections", count: 45 }];


const HubPage = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<Series[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const toggleGenre = (g: Genre) => setSelectedGenres((p) => p.includes(g) ? p.filter((x) => x !== g) : [...p, g]);
  const toggleSeries = (s: Series) => setSelectedSeries((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);
  const toggleCharacter = (c: Character) => setSelectedCharacters((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c]);
  const clearFilters = () => {setSelectedGenres([]);setSelectedSeries([]);setSelectedCharacters([]);};

  const filtered = useMemo(() => {
    return contentItems.filter((item) => {
      if (selectedGenres.length && !selectedGenres.includes(item.genre)) return false;
      if (selectedSeries.length && !selectedSeries.includes(item.series)) return false;
      if (selectedCharacters.length && !selectedCharacters.some((c) => item.characters.includes(c))) return false;
      return true;
    });
  }, [selectedGenres, selectedSeries, selectedCharacters]);

  // Group by series
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
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-gradient">Hot Sweet Comics</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Explore</a>
            <a href="#" className="hover:text-primary transition-colors">Categories</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4 text-foreground">Welcome to Magma Doux
            <span className="text-gradient">Magma Doux</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore our curated collection of exclusive content.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 pb-12">
        <h3 className="font-display text-xl font-bold mb-6 text-foreground">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) =>
          <button
            key={cat.label}
            className="anime-card rounded-lg p-4 text-center hover:glow-border transition-all group cursor-pointer">
            
              <cat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-foreground block">{cat.label}</span>
              <span className="text-xs text-muted-foreground">{cat.count}</span>
            </button>
          )}
        </div>
      </section>

  <section className="container mx-auto px-4 pb-12">
  <div className="flex flex-col lg:flex-row gap-6">

    {/* Sidebar */}
    <SidebarFilters
      selectedGenres={selectedGenres}
      selectedSeries={selectedSeries}
      selectedCharacters={selectedCharacters}
      onToggleGenre={toggleGenre}
      onToggleSeries={toggleSeries}
      onToggleCharacter={toggleCharacter}
      onClear={clearFilters}
    />

    {/* Contenido principal */}
    <div className="flex-1 min-w-0">

      {/* Galería */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <img src="/images/pagina1.jpg" />
        <img src="/images/pagina2.jpg" />
        <img src="/images/pagina3.jpg" />
        <img src="/images/pagina4.jpg" />
        <img src="/images/pagina5.jpg" />
        <img src="/images/pagina6.jpg" />
        <img src="/images/pagina7.jpg" />
        <img src="/images/pagina8.jpg" />
        <img src="/images/pagina9.jpg" />
        <img src="/images/pagina10.jpg" />
        <img src="/images/pagina11.jpg" />
        <img src="/images/pagina12.jpg" />
      </div>

    </div>

  </div>
</section>
          

          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold mb-6 text-foreground">Featured</h3>
            {Array.from(grouped.entries()).map(([series, items]) =>
            <div key={series} className="mb-8">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{series}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((item) =>
                <ContentCard key={item.id} item={item} />
                )}
                </div>
              </div>
            )}
            {filtered.length === 0 &&
            <p className="text-muted-foreground text-sm text-center py-12">No content matches your filters.</p>
            }
          </div>
        </div>
      </section>

      {/* Doujinshi */}
      <DoujinshiSection />

      {/* AI Section */}
      <AISection />

      {/* Footer */}
      <Footer />
    </div>);

};

export default HubPage;

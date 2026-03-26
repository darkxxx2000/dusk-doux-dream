import { useState, useMemo } from "react";
import { Flame, BookOpen, Image, Pencil, FileText, Globe } from "lucide-react";
import { contentItems, type Genre, type Series, type Character } from "@/data/content";
import SidebarFilters from "./SidebarFilters";
import ContentCard from "./ContentCard";
import AISection from "./AISection";
import Footer from "./Footer";
import { supabase } from "@/supabaseClient";

const categories = [
  { icon: Flame, label: "Home", link: "#" },
  { icon: BookOpen, label: "Doujinshi", link: "#doujinshi" },
  { icon: Image, label: "Gallery", link: "#gallery" },
  { icon: Pencil, label: "Short Comics", link: "#short" },
  { icon: FileText, label: "Post", link: "#post" },
  { icon: Globe, label: "Contact", link: "#contact" }
];

const HubPage = () => {

  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

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
      <header className="border-b border-border/50 sticky top-0 z-40 bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hot Sweet Comics</h1>

          <button
            onClick={loginWithGoogle}
            className="px-4 py-2 border rounded-lg hover:scale-105 transition"
          >
            Login con Google
          </button>
        </div>
      </header>

      {/* CATEGORIES */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.link}
              className="p-4 text-center border rounded-lg hover:scale-105 transition block"
            >
              <cat.icon className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-sm">{cat.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 pb-12 flex gap-6">

        <SidebarFilters
          selectedGenres={selectedGenres}
          selectedSeries={selectedSeries}
          selectedCharacters={selectedCharacters}
          onToggleGenre={toggleGenre}
          onToggleSeries={toggleSeries}
          onToggleCharacter={toggleCharacter}
          onClear={clearFilters}
        />

        <div className="flex-1">
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

          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <div id="doujinshi" className="mt-20 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Doujinshi</h2>
        <p>Contenido en construcción...</p>
      </div>

      <div id="gallery" className="mt-20 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      </div>

      <div id="short" className="mt-20 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Short Comics</h2>
      </div>

      <div id="post" className="mt-20 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Post</h2>
      </div>

      <div id="contact" className="mt-20 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
      </div>

      <AISection />
      <Footer />
    </div>
  );
};

export default HubPage;

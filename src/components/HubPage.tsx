import { Flame, Star, Clock, TrendingUp, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Flame, label: "Tendencias", count: 128 },
  { icon: Star, label: "Populares", count: 256 },
  { icon: Clock, label: "Recientes", count: 64 },
  { icon: TrendingUp, label: "Top Rated", count: 312 },
  { icon: Heart, label: "Favoritos", count: 89 },
  { icon: BookOpen, label: "Colecciones", count: 45 },
];

const featuredItems = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: `Título ${i + 1}`,
  category: categories[i % categories.length].label,
  rating: (4 + Math.random()).toFixed(1),
}));

const HubPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-gradient">
            MAGMA HUB
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#" className="hover:text-primary transition-colors">Explorar</a>
            <a href="#" className="hover:text-primary transition-colors">Categorías</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4 text-foreground">
            Bienvenido al <span className="text-gradient">Hub</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explora nuestra colección curada de contenido exclusivo.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 pb-12">
        <h3 className="font-display text-xl font-bold mb-6 text-foreground">Categorías</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="anime-card rounded-lg p-4 text-center hover:glow-border transition-all group cursor-pointer"
            >
              <cat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-foreground block">{cat.label}</span>
              <span className="text-xs text-muted-foreground">{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h3 className="font-display text-xl font-bold mb-6 text-foreground">Destacados</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredItems.map((item) => (
            <Link
              to={`/comic/${item.id}`}
              key={item.id}
              className="anime-card rounded-lg overflow-hidden group cursor-pointer hover:glow-border transition-all block"
            >
              <div className="aspect-[3/4] bg-muted/50 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-primary font-semibold">{item.category}</span>
                  <h4 className="text-sm font-bold text-foreground truncate">{item.title}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-xs text-muted-foreground">{item.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 Magma Hub. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HubPage;

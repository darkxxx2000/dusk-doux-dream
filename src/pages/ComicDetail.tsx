import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Star, ArrowLeft, Eye, Calendar, Send, User, MessageCircle } from "lucide-react";

const comicsData: Record<string, { title: string; category: string; rating: string; chapters: number; views: string; date: string; description: string }> = {};
for (let i = 0; i < 8; i++) {
  const cats = ["Tendencias", "Populares", "Recientes", "Top Rated", "Favoritos", "Colecciones"];
  comicsData[String(i)] = {
    title: `Título ${i + 1}`,
    category: cats[i % cats.length],
    rating: (4 + Math.random()).toFixed(1),
    chapters: Math.floor(Math.random() * 50) + 5,
    views: `${Math.floor(Math.random() * 90) + 10}K`,
    date: "2026-03-20",
    description: "Una historia épica llena de acción, drama y personajes inolvidables que te mantendrán al borde del asiento capítulo tras capítulo.",
  };
}

const sampleComments = [
  { id: 1, user: "NightOwl", text: "¡Increíble capítulo! No puedo esperar al siguiente.", time: "Hace 2 horas", likes: 14 },
  { id: 2, user: "MangaFan99", text: "El arte es espectacular, los detalles son impresionantes.", time: "Hace 5 horas", likes: 8 },
  { id: 3, user: "OtakuPro", text: "Esta serie solo mejora con cada capítulo. 10/10", time: "Hace 1 día", likes: 23 },
  { id: 4, user: "SakuraX", text: "Los personajes tienen mucha profundidad, me encanta.", time: "Hace 2 días", likes: 5 },
];

const ComicDetail = () => {
  const { id } = useParams();
  const comic = comicsData[id ?? "0"] ?? comicsData["0"];

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(247);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(sampleComments);
  const [commentLikes, setCommentLikes] = useState<Record<number, boolean>>({});

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((prev) => [
      { id: Date.now(), user: "Tú", text: commentText.trim(), time: "Ahora", likes: 0 },
      ...prev,
    ]);
    setCommentText("");
  };

  const toggleCommentLike = (commentId: number) => {
    setCommentLikes((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold text-gradient">
            MAGMA HUB
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <a href="#" className="hover:text-primary transition-colors">Explorar</a>
            <a href="#" className="hover:text-primary transition-colors">Categorías</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        {/* Comic Info */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Cover */}
          <div className="w-full md:w-64 shrink-0">
            <div className="aspect-[3/4] anime-card rounded-xl overflow-hidden bg-muted/40 glow-border" />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">{comic.category}</span>
            <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mt-1 mb-3">
              {comic.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
              {comic.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-primary fill-primary" />{comic.rating}</span>
              <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" />{comic.views} vistas</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{comic.date}</span>
              <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" />{comments.length} comentarios</span>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleLike}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                  liked
                    ? "bg-primary text-primary-foreground glow-border"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <Heart className={`w-4 h-4 transition-transform ${liked ? "fill-current scale-110" : ""}`} />
                {likeCount}
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Leer ahora
              </button>
            </div>

            {/* Chapters preview */}
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Capítulos ({comic.chapters})</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {Array.from({ length: Math.min(comic.chapters, 10) }, (_, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center justify-between anime-card rounded-lg px-4 py-3 hover:glow-border transition-all group text-left"
                  >
                    <span className="text-sm font-medium text-foreground">Capítulo {comic.chapters - i}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Leer →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <section className="max-w-2xl mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Comentarios ({comments.length})
          </h3>

          {/* Comment form */}
          <form onSubmit={handleSubmitComment} className="anime-card rounded-xl p-4 mb-6 glow-border">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Escribe un comentario..."
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none text-sm outline-none min-h-[60px]"
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    disabled={!commentText.trim()}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Comment list */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="anime-card rounded-xl p-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-foreground">{comment.user}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{comment.text}</p>
                    <button
                      onClick={() => toggleCommentLike(comment.id)}
                      className={`mt-2 inline-flex items-center gap-1 text-xs transition-colors ${
                        commentLikes[comment.id] ? "text-primary" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${commentLikes[comment.id] ? "fill-current" : ""}`} />
                      {comment.likes + (commentLikes[comment.id] ? 1 : 0)}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComicDetail;

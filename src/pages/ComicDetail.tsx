import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Star, ArrowLeft, Eye, Calendar, Send, User, MessageCircle, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { contentItems, GENRE_COLORS } from "@/data/content";
import Footer from "@/components/Footer";

const comicsMap = Object.fromEntries(contentItems.map((c) => [String(c.id), c]));

const sampleComments = [
  { id: 1, user: "NightOwl", text: "Incredible chapter! Can't wait for the next one.", time: "2 hours ago", likes: 14 },
  { id: 2, user: "MangaFan99", text: "The art is spectacular, the details are stunning.", time: "5 hours ago", likes: 8 },
  { id: 3, user: "OtakuPro", text: "This series only gets better with each chapter. 10/10", time: "1 day ago", likes: 23 },
  { id: 4, user: "SakuraX", text: "The characters have so much depth, I love it.", time: "2 days ago", likes: 5 },
];

const ComicDetail = () => {
  const { id } = useParams();
  const comic = comicsMap[id ?? "0"] ?? contentItems[0];

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(247);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(sampleComments);
  const [commentLikes, setCommentLikes] = useState<Record<number, boolean>>({});
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryPage, setGalleryPage] = useState(0);

  const galleryImages = comic.images.length > 0 ? comic.images : Array.from({ length: 6 }, (_, i) => `page-${i + 1}`);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((prev) => [
      { id: Date.now(), user: "You", text: commentText.trim(), time: "Just now", likes: 0 },
      ...prev,
    ]);
    setCommentText("");
  };

  const toggleCommentLike = (commentId: number) => {
    setCommentLikes((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/50 backdrop-blur-md sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold text-gradient">MAGMA HUB</Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <a href="#" className="hover:text-primary transition-colors">Explore</a>
            <a href="#" className="hover:text-primary transition-colors">Categories</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex-1">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Cover */}
          <div className="w-full md:w-64 shrink-0">
            <div className="aspect-[3/4] anime-card rounded-xl overflow-hidden bg-muted/40 glow-border relative">
              <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold uppercase px-2 py-0.5 rounded ${GENRE_COLORS[comic.genre]} text-white`}>
                {comic.genre}
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">{comic.series}</span>
            <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mt-1 mb-1">{comic.title}</h1>
            <p className="text-sm text-muted-foreground mb-3">{comic.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">{comic.description}</p>

            {/* Tags */}
            <div className="flex gap-1.5 mb-4 flex-wrap">
              {comic.tags.map((t) => (
                <span key={t} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-primary fill-primary" />{comic.rating}</span>
              <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" />{comic.views} views</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{comic.date}</span>
              <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" />{comments.length} comments</span>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleLike}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                  liked ? "bg-primary text-primary-foreground glow-border" : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <Heart className={`w-4 h-4 transition-transform ${liked ? "fill-current scale-110" : ""}`} />
                {likeCount}
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Read Now
              </button>
              <button
                onClick={() => { setGalleryOpen(true); setGalleryPage(0); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all font-semibold"
              >
                <Images className="w-4 h-4" /> Gallery ({galleryImages.length})
              </button>
            </div>

            {/* Chapters */}
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Chapters ({comic.chapters})</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {Array.from({ length: Math.min(comic.chapters, 10) }, (_, i) => (
                  <button key={i} className="w-full flex items-center justify-between anime-card rounded-lg px-4 py-3 hover:glow-border transition-all group text-left">
                    <span className="text-sm font-medium text-foreground">Chapter {comic.chapters - i}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Read →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <section className="max-w-2xl mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" /> Comments ({comments.length})
          </h3>
          <form onSubmit={handleSubmitComment} className="anime-card rounded-xl p-4 mb-6 glow-border">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none text-sm outline-none min-h-[60px]"
                />
                <div className="flex justify-end mt-2">
                  <button type="submit" disabled={!commentText.trim()} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    <Send className="w-3.5 h-3.5" /> Send
                  </button>
                </div>
              </div>
            </div>
          </form>
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

      <Footer />

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">{comic.title} — Gallery</h3>
              <p className="text-xs text-muted-foreground">Image {galleryPage + 1} / {galleryImages.length}</p>
            </div>
            <button onClick={() => setGalleryOpen(false)} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Close ✕
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <button
              onClick={() => setGalleryPage((p) => Math.max(0, p - 1))}
              disabled={galleryPage === 0}
              className="absolute left-4 p-2 bg-muted/50 rounded-full text-foreground hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-full max-w-lg aspect-[3/4] bg-muted/30 rounded-lg flex items-center justify-center mx-16">
              <p className="text-muted-foreground text-sm">Image {galleryPage + 1}</p>
            </div>
            <button
              onClick={() => setGalleryPage((p) => Math.min(galleryImages.length - 1, p + 1))}
              disabled={galleryPage === galleryImages.length - 1}
              className="absolute right-4 p-2 bg-muted/50 rounded-full text-foreground hover:bg-muted transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComicDetail;

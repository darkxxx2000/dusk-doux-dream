export type Genre = "Action" | "Romance" | "Fantasy" | "Horror" | "Comedy" | "Drama" | "Sci-Fi" | "Ecchi";
export type Series = "Crimson Blade" | "Moonlit Dreams" | "Shadow Realm" | "Neon Genesis" | "Sakura Tales";
export type Character = "Akira" | "Yuki" | "Raven" | "Hana" | "Kaito" | "Luna";

export const ALL_GENRES: Genre[] = ["Action", "Romance", "Fantasy", "Horror", "Comedy", "Drama", "Sci-Fi", "Ecchi"];
export const ALL_SERIES: Series[] = ["Crimson Blade", "Moonlit Dreams", "Shadow Realm", "Neon Genesis", "Sakura Tales"];
export const ALL_CHARACTERS: Character[] = ["Akira", "Yuki", "Raven", "Hana", "Kaito", "Luna"];

export const GENRE_COLORS: Record<Genre, string> = {
  Action: "bg-red-600",
  Romance: "bg-pink-600",
  Fantasy: "bg-purple-600",
  Horror: "bg-emerald-700",
  Comedy: "bg-yellow-600",
  Drama: "bg-blue-600",
  "Sci-Fi": "bg-cyan-600",
  Ecchi: "bg-rose-600",
};

export interface ContentItem {
  id: number;
  title: string;
  subtitle: string;
  genre: Genre;
  series: Series;
  characters: Character[];
  tags: string[];
  rating: string;
  views: string;
  date: string;
  description: string;
  chapters: number;
  images: string[];
}

export const contentItems: ContentItem[] = [
  {
    id: 0, title: "Crimson Dawn", subtitle: "Chapter of the Awakening", genre: "Action", series: "Crimson Blade",
    characters: ["Akira", "Raven"], tags: ["battle", "swords", "epic"], rating: "4.8", views: "42K", date: "2026-03-20",
    description: "An epic tale of warriors clashing in a world consumed by chaos and ancient rivalries.",
    chapters: 24, images: [],
  },
  {
    id: 1, title: "Moonlit Whispers", subtitle: "Secrets Under Starlight", genre: "Romance", series: "Moonlit Dreams",
    characters: ["Yuki", "Hana"], tags: ["love", "drama", "moonlight"], rating: "4.6", views: "38K", date: "2026-03-18",
    description: "Two souls find each other under the pale glow of a crescent moon, their fates intertwined by destiny.",
    chapters: 18, images: [],
  },
  {
    id: 2, title: "Shadow Gate", subtitle: "The Dark Passage", genre: "Horror", series: "Shadow Realm",
    characters: ["Raven", "Kaito"], tags: ["dark", "mystery", "demons"], rating: "4.9", views: "67K", date: "2026-03-15",
    description: "Beyond the gate lies a realm of nightmares where only the brave dare to tread.",
    chapters: 32, images: [],
  },
  {
    id: 3, title: "Neon Hearts", subtitle: "Love in the Machine Age", genre: "Sci-Fi", series: "Neon Genesis",
    characters: ["Luna", "Akira"], tags: ["cyberpunk", "AI", "future"], rating: "4.7", views: "55K", date: "2026-03-12",
    description: "In a neon-lit megacity, a rebel hacker and an android discover what it means to feel.",
    chapters: 15, images: [],
  },
  {
    id: 4, title: "Sakura Storm", subtitle: "Petals of War", genre: "Fantasy", series: "Sakura Tales",
    characters: ["Hana", "Yuki"], tags: ["magic", "nature", "spirits"], rating: "4.5", views: "29K", date: "2026-03-10",
    description: "When cherry blossoms carry the whispers of ancient spirits, a young mage must answer the call.",
    chapters: 22, images: [],
  },
  {
    id: 5, title: "Crimson Tide", subtitle: "Blood and Honor", genre: "Action", series: "Crimson Blade",
    characters: ["Akira", "Kaito"], tags: ["war", "honor", "revenge"], rating: "4.8", views: "51K", date: "2026-03-08",
    description: "The battlefield runs red as two former allies face each other with blades drawn.",
    chapters: 28, images: [],
  },
  {
    id: 6, title: "Dream Weaver", subtitle: "Threads of Fate", genre: "Fantasy", series: "Moonlit Dreams",
    characters: ["Luna", "Hana"], tags: ["dreams", "magic", "fate"], rating: "4.4", views: "21K", date: "2026-03-05",
    description: "A mysterious weaver who can shape reality through dreams discovers her powers have a terrible cost.",
    chapters: 12, images: [],
  },
  {
    id: 7, title: "Shadow Protocol", subtitle: "Code of Darkness", genre: "Sci-Fi", series: "Shadow Realm",
    characters: ["Raven", "Luna"], tags: ["stealth", "hacking", "conspiracy"], rating: "4.6", views: "44K", date: "2026-03-01",
    description: "In the dark web of the Shadow Realm, every line of code could be your last.",
    chapters: 19, images: [],
  },
];

export const doujinshiItems = [
  {
    id: 100, title: "Crimson Blade: Unbound", subtitle: "Fan Collection Vol.1", genre: "Action" as Genre,
    series: "Crimson Blade" as Series, characters: ["Akira", "Raven"] as Character[],
    tags: ["doujinshi", "fan-art", "collection"], pages: 24,
    images: [] as string[],
  },
  {
    id: 101, title: "Moonlit Dreams: Afterglow", subtitle: "Special Edition", genre: "Romance" as Genre,
    series: "Moonlit Dreams" as Series, characters: ["Yuki", "Hana"] as Character[],
    tags: ["doujinshi", "romance", "exclusive"], pages: 32,
    images: [] as string[],
  },
  {
    id: 102, title: "Neon Genesis: Override", subtitle: "Cyberpunk Anthology", genre: "Sci-Fi" as Genre,
    series: "Neon Genesis" as Series, characters: ["Luna", "Akira"] as Character[],
    tags: ["doujinshi", "cyberpunk", "anthology"], pages: 18,
    images: [] as string[],
  },
];

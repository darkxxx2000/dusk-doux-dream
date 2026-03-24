import { useState } from "react";
import ImageViewer from "./components/ImageViewer";

const images = [
  "https://ah-img.luscious.net/KOKOMIEL/370689/portada_01E5WK4YVKQ2ZZJE6ZR0N6JPEF.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-1_01E5WK2S3KNPQVT239DB9J006B.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-2_01E5WK304672NTEH1N4TF2Z1VD.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-3_01E5WK36TW77PS4XTJXCN3PHCN.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-4_01E5WK3AW22MFNJ9DZBN4TCZED.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-5_01E5WK3FBKX4P9PFZ9NNT09B2X.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-6_01E5WK3NG0YVWHQZ6955644EW0.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-7_01E5WK3SQQXF013AQ8Z89CR0M7.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-8_01E5WK40750AGS7YQJ4H68XSJ0.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-9_01E5WK47KA3PX53PNHAK7DQAH0.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-10_01E5WK4E733ENXAMEEK9FWD0W9.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-11_01E5WK4NYHM4EAM8H04M6M6T04.1024x0.jpg",
  "https://ah-img.luscious.net/KOKOMIEL/370689/pagina-12_01E5WK4VZ87FSKN26PGB8HFZ4R.1024x0.jpg",
];

export default function ErikaComic() {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">ERIKA - Comic 1</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setViewerIndex(i)}
            className="cursor-pointer rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>

      {viewerIndex !== null && (
        <ImageViewer
          images={images}
          initialIndex={viewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </section>
  );
}

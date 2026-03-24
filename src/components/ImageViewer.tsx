import { useEffect, useState } from "react";

type Props = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

const ImageViewer = ({ images, initialIndex, onClose }: Props) => {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  const currentImage = images[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setScale(1);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setScale(1);
  };

  // Zoom con rueda
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((prev) => {
      const next = e.deltaY < 0 ? prev + 0.2 : prev - 0.2;
      return Math.min(Math.max(next, 1), 3);
    });
  };

  // Teclado (flechas + ESC)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* CONTROLES */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 text-white text-3xl"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 text-white text-3xl"
      >
        ›
      </button>

      {/* IMAGEN */}
      <img
        src={currentImage}
        alt=""
        onWheel={handleWheel}
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.2s",
          maxHeight: "90vh",
        }}
        className="cursor-zoom-in"
      />
    </div>
  );
};

export default ImageViewer;

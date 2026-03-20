"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/apartment-1.jpg", alt: "סלון הדירה" },
  { src: "/images/apartment-3.jpg", alt: "חדר הקלטות ועבודה" },
  { src: "/images/apartment-4.jpg", alt: "חדר שינה" },
  { src: "/images/apartment-5.jpg", alt: "חדר אמבטיה" },
  { src: "/images/apartment-6.png", alt: "פינת אוכל וגיטרות" },
  { src: "/images/apartment-7.png", alt: "מטבח ופינת אוכל" },
  { src: "/images/apartment-8.jpg", alt: "מבט נוסף" },
  { src: "/images/apartment-9.jpg", alt: "חדר נוסף" },
  { src: "/images/apartment-10.png", alt: "עיצוב פנים" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );

  return (
    <section id="gallery" className="py-20 px-4 bg-dark-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-gradient-text">גלריית תמונות</span>
          </h2>
          <div className="w-20 h-0.5 bg-gold/40 mx-auto mb-6" />
          <p className="text-text-secondary text-lg">
            לחצו על תמונה להגדלה
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer border border-dark-border hover:border-gold/30 transition-all"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 z-10 text-white/70 hover:text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-gold p-2"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-gold p-2"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-secondary text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}

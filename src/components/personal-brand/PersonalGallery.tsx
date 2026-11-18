"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  context: string;
  aspect: string;
  sourceDomain: string;
}

interface PersonalGalleryProps {
  photos: GalleryPhoto[];
}

export function PersonalGallery({ photos }: PersonalGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <div>
      {/* Editorial Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIndex(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(idx);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Deschide imaginea: ${photo.title}`}
            className="glass-panel glass-interactive group relative flex flex-col overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:border-[#4779B8]/60 focus:outline-none focus:ring-2 focus:ring-[#4779B8]"
          >
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#171A20]">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/90 via-[#08090B]/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              
              {/* Top pill badge */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full border border-white/10 bg-[#08090B]/80 px-2.5 py-0.5 text-[10px] font-medium text-[#C7CBD1] backdrop-blur-md">
                  {photo.context}
                </span>
              </div>

              {/* Hover expand icon */}
              <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#08090B]/80 text-white backdrop-blur-md">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-xs font-bold text-[#F5F6F7]">{photo.title}</p>
                <p className="mt-0.5 text-[11px] text-[#9299A3]">{photo.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[selectedIndex].title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#08090B]/92 p-4 backdrop-blur-xl sm:p-8"
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center overflow-hidden rounded-3xl border border-[#22262D] bg-[#101216] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header controls */}
            <div className="flex w-full items-center justify-between border-b border-[#22262D] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#4779B8]">
                  0{selectedIndex + 1} / 0{photos.length}
                </span>
                <span className="text-[#22262D]">•</span>
                <span className="text-xs font-semibold text-[#F5F6F7]">
                  {photos[selectedIndex].title}
                </span>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border border-[#22262D] bg-[#171A20] p-1.5 text-[#C7CBD1] transition hover:bg-[#22262D] hover:text-white"
                aria-label="Închide vizualizarea"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Main Image Display */}
            <div className="relative flex h-[60vh] w-full items-center justify-center bg-[#08090B]/50 p-4 sm:h-[68vh]">
              <div className="relative h-full w-full">
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 850px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev / Next buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[#22262D] bg-[#08090B]/80 p-2.5 text-[#F5F6F7] shadow-lg backdrop-blur-md transition hover:bg-[#171A20] hover:text-white"
                aria-label="Fotografia anterioară"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[#22262D] bg-[#08090B]/80 p-2.5 text-[#F5F6F7] shadow-lg backdrop-blur-md transition hover:bg-[#171A20] hover:text-white"
                aria-label="Fotografia următoare"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Footer details */}
            <div className="flex w-full flex-col justify-between gap-1 border-t border-[#22262D] bg-[#101216] px-6 py-3.5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold text-[#F5F6F7]">
                  {photos[selectedIndex].subtitle}
                </p>
                <p className="text-[11px] text-[#9299A3]">
                  Fotografie autentică de arhivă profesională • Sursă: {photos[selectedIndex].sourceDomain}
                </p>
              </div>
              <span className="text-[11px] font-medium text-[#C7CBD1]">
                {photos[selectedIndex].context}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

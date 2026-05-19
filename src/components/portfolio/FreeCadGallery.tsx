import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import Blocker from "@/assets/freecad/Blocker.png";
import CycleHub from "@/assets/freecad/CycleHub.png";
import Handel05 from "@/assets/freecad/Handel05.png";
import Hub04 from "@/assets/freecad/Hub04.png";
import Joints01 from "@/assets/freecad/Joints01.png";
import Riser07 from "@/assets/freecad/Riser07.png";
import Roller03 from "@/assets/freecad/Roller03.png";
import Hanger06 from "@/assets/freecad/hanger06.png";

const images = [
  { src: Blocker, name: "Blocker" },
  { src: CycleHub, name: "CycleHub" },
  { src: Handel05, name: "Handel 05" },
  { src: Hub04, name: "Hub 04" },
  { src: Joints01, name: "Joints 01" },
  { src: Riser07, name: "Riser 07" },
  { src: Roller03, name: "Roller 03" },
  { src: Hanger06, name: "Hanger 06" },
];

interface FreeCADGalleryProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const FreeCADGallery = ({ isOpen, onOpenChange }: FreeCADGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onOpenChange]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen h-screen max-w-none p-0 border-0 bg-black/90 rounded-0 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4 sm:p-8">
          {/* Image Container */}
          <div className="w-full h-full max-h-[80vh] flex items-center justify-center pointer-events-none">
            <img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].name}
              className="max-w-full max-h-full object-contain animate-in fade-in duration-300"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full glass hover:bg-white/30 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3 rounded-full glass hover:bg-white/30 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full glass text-sm font-medium backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnails Navigation */}
          <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-40 flex justify-center gap-2 px-4 flex-wrap">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all pointer-events-auto ${
                  idx === currentIndex
                    ? "ring-2 ring-white scale-110"
                    : "opacity-50 hover:opacity-75"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 sm:top-8 right-4 sm:right-8 z-40 p-2 rounded-full glass hover:bg-white/20 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FreeCADGallery;

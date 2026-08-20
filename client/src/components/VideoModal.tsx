import React, { useRef, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  youtubeId?: string;
  poster?: string;
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc = "/videos/water-park-home-video-aapno-ghar.mp4",
  youtubeId,
  poster = "/images/water-park-aapno-ghar.jpg",
  title = "AapnoGhar Resort & Water Park Official Video",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current && !youtubeId) {
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen, youtubeId]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#061A33] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#0E295B] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#F68734]" />
            <span className="font-bold text-sm tracking-wide">{title}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X size={18} />
          </button>
        </div>

        {/* 16:9 Cinema Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

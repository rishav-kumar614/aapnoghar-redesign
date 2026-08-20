import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Film,
  Maximize,
  Youtube as YoutubeIcon,
  ArrowRight,
  CheckCircle2,
  Waves,
  Ticket,
  Building2,
  PartyPopper
} from "lucide-react";

export interface VideoTourItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  type: "mp4" | "youtube";
  videoSrc?: string;
  youtubeId?: string;
  thumbnail: string;
  highlights: string[];
  icon: React.ElementType;
}

const TOUR_VIDEOS: VideoTourItem[] = [
  {
    id: "water-park",
    title: "Water Park & Mega Wave Pool",
    category: "Aquatic Thrills",
    duration: "4K Official Video",
    description: "21 turbo water slides, mist rain dance arena, family splash lagoons, and all-inclusive vegetarian feasts.",
    type: "mp4",
    videoSrc: "/videos/water-park-home-video-aapno-ghar.mp4",
    thumbnail: "/images/water-park-aapno-ghar.jpg",
    highlights: ["Interactive Wave Pool", "21 Turbo Slides", "Rain Dance Arena"],
    icon: Waves
  },
  {
    id: "amusement-park",
    title: "Amusement Park & Joyrides",
    category: "Carnival Fun",
    duration: "4K Official Video",
    description: "15+ carnival joyrides including Caterpillar Coaster, Flying Bob, Break Dance, and 24 adventure obstacle games.",
    type: "mp4",
    videoSrc: "/videos/amusement-park-home-video-aapno-ghar.mp4",
    thumbnail: "/images/amusement-park-aapno-ghar.jpg",
    highlights: ["Caterpillar Coaster", "Flying Bob & Swings", "24 Rope Obstacles"],
    icon: Ticket
  },
  {
    id: "chander-wedding",
    title: "Chander Grand Wedding Lawn",
    category: "Royal Weddings",
    duration: "YouTube HD Tour",
    description: "Grand Chander Party Lawn hosting up to 2,500 guests with royal mandap setups and banquet facilities.",
    type: "youtube",
    youtubeId: "eN9S8K-o5KE",
    thumbnail: "/images/chander-party-lawn.jpg",
    highlights: ["2,500 Guest Lawn", "Starlit Mandap Setup", "Grand Buffet Promenade"],
    icon: PartyPopper
  },
  {
    id: "meet-celebrations",
    title: "Banquets & Celebrations",
    category: "Luxury Venues",
    duration: "4K Official Video",
    description: "Lush party lawns paired with climate-controlled Abhinandan and Swagatam banquet halls for royal galas.",
    type: "mp4",
    videoSrc: "/videos/meet-and-celebrations.mp4",
    thumbnail: "/images/bhanwar-party-lawn.jpg",
    highlights: ["Bhanwar Sangeet Lawn", "Abhinandan AC Hall", "Swagatam Private Wing"],
    icon: Building2
  }
];

interface VideoTourSectionProps {
  onBook: (intent: string) => void;
}

export function VideoTourSection({ onBook }: VideoTourSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoTourItem>(TOUR_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeVideo.type === "mp4" && videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [activeVideo]);

  const handleSelect = (video: VideoTourItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (activeVideo.type === "mp4" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-16 bg-[#030B17] text-white relative overflow-hidden border-b border-white/10" id="video-tour">
      {/* Cinematic Ambient Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#01A5E1]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#F68734]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Sleek Minimal Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 mb-8 border-b border-white/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#FFA96B] text-xs font-extrabold uppercase tracking-wider mb-2.5">
              <Film size={13} />
              <span>Cinematic 4K Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
              A visual journey through{" "}
              <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFA96B] via-[#F68734] to-[#01A5E1]">
                AapnoGhar.
              </span>
            </h2>
          </div>

          {/* 4 Sleek Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {TOUR_VIDEOS.map((video) => {
              const Icon = video.icon;
              const isSelected = video.id === activeVideo.id;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => handleSelect(video)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#F68734] text-white shadow-[0_0_20px_rgba(246,135,52,0.6)] scale-102"
                      : "bg-white/5 text-white/70 hover:text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  <Icon size={14} className={isSelected ? "text-white" : "text-[#89D9F8]"} />
                  <span>{video.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Unified Cinema Theater (Exact 1-Screen Height Fit) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Cinema Screen (8 Cols - Max Height ~400px) */}
          <div className="lg:col-span-8 bg-[#061A33] rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative flex flex-col justify-center">
            <div className="relative aspect-video max-h-[400px] w-full bg-black group flex items-center justify-center overflow-hidden">
              {activeVideo.type === "youtube" ? (
                isPlaying ? (
                  <iframe
                    key={activeVideo.youtubeId}
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                    title={activeVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img
                      src={activeVideo.thumbnail}
                      alt={activeVideo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061A33] via-transparent to-black/30" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        type="button"
                        className="w-20 h-20 rounded-full bg-[#F68734] hover:bg-[#D84A22] text-white flex items-center justify-center shadow-[0_0_40px_rgba(246,135,52,0.85)] transform group-hover:scale-110 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <Play size={28} className="fill-white ml-1" />
                      </button>
                    </div>

                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 border border-white/15">
                      <YoutubeIcon size={14} className="text-red-500" /> YouTube HD
                    </span>
                  </div>
                )
              ) : (
                <>
                  <video
                    key={activeVideo.id}
                    ref={videoRef}
                    src={activeVideo.videoSrc}
                    poster={activeVideo.thumbnail}
                    className="w-full h-full object-cover cursor-pointer"
                    loop
                    playsInline
                    muted={isMuted}
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={togglePlay}
                  />

                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all"
                      onClick={togglePlay}
                    >
                      <button
                        type="button"
                        className="w-20 h-20 rounded-full bg-[#F68734] hover:bg-[#D84A22] text-white flex items-center justify-center shadow-[0_0_40px_rgba(246,135,52,0.85)] transform hover:scale-110 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <Play size={28} className="fill-white ml-1" />
                      </button>
                    </div>
                  )}

                  {/* Controls Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#061A33]/90 backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="text-white hover:text-[#F68734] transition-colors p-0.5"
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="text-white hover:text-[#01A5E1] transition-colors p-0.5"
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>

                      <span className="text-xs text-white/70 font-semibold hidden sm:inline">
                        {activeVideo.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleFullscreen}
                      className="text-white hover:text-[#89D9F8] transition-colors p-0.5"
                    >
                      <Maximize size={16} />
                    </button>
                  </div>
                </>
              )}

              <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-white border border-white/15 flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>4K Official Video</span>
              </span>
            </div>
          </div>

          {/* Right Column: Ultra-Luxury Glassmorphic Attraction Card (4 Cols) */}
          <div className="lg:col-span-4 bg-[#061A33]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#FFA96B]">
                  {activeVideo.category}
                </span>
                <span className="text-xs text-[#89D9F8] font-bold">{activeVideo.duration}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-2 leading-tight">
                {activeVideo.title}
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {activeVideo.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-white/15 mb-6">
                {activeVideo.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-white/95">
                    <CheckCircle2 size={15} className="text-[#01A5E1] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onBook(`${activeVideo.title} booking`)}
                className="w-full py-4 rounded-2xl bg-[#F68734] hover:bg-[#D84A22] text-white font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-[0_0_35px_rgba(246,135,52,0.7)] transition-all flex items-center justify-center gap-2 transform active:scale-98"
              >
                <Sparkles size={15} />
                <span>Book This Attraction Now</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

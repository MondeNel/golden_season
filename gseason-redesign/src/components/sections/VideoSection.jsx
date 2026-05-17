import { useState } from 'react';
import { video } from '../../data/video';
import VideoModal from '../common/VideoModal';
import Reveal from '../ui/Reveal';

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-16 md:py-24 px-6 bg-navy-mid overflow-hidden">
      {/* Background image – low opacity */}
      <div className="absolute inset-0">
        <img
          src={video.thumbnail}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-teal text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            Video
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mt-2 mb-2">
            {video.title}
          </h2>
          <p className="text-muted text-xs md:text-lg mb-8 max-w-lg mx-auto font-light">
            {video.subtitle}
          </p>

          {/* Play button */}
          <button
            onClick={() => setModalOpen(true)}
            className="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-teal rounded-full shadow-2xl shadow-teal/40 hover:scale-110 hover:bg-teal/90 transition-all duration-300"
            aria-label="Play video"
          >
            <i className="ti ti-player-play-filled text-white text-3xl md:text-4xl ml-1"></i>
            {/* Ripple ring */}
            <span className="absolute inset-0 rounded-full border-2 border-teal animate-ping opacity-40"></span>
          </button>
          <p className="text-dim text-xs md:text-sm mt-5">
            Click to watch the full video
          </p>
        </Reveal>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        youtubeId={video.youtubeId}
      />
    </section>
  );
}
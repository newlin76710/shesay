'use client';

import { useState } from 'react';

type Props = {
  videoId: string;
  title: string;
  thumbnail?: string;
};

export function YouTubeCard({ videoId, title, thumbnail }: Props) {
  const [playing, setPlaying] = useState(false);
  const thumb = thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black text-left"
    >
      <img
        src={thumb}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" fill="#5b2145" />
          </svg>
        </div>
      </div>
      {/* Title bar */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="line-clamp-2 text-sm font-semibold text-white">{title}</p>
      </div>
    </button>
  );
}

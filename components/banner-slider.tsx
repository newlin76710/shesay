'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/images/banners/banner-girlstalk.png', alt: '女生話題', href: '/' },
  { src: '/images/banners/banner-party.png', alt: '聯誼派對', href: '/party' },
  { src: '/images/banners/banner-consult.png', alt: '戀愛數字密碼諮詢', href: '/consult' },
  { src: '/images/banners/banner-podcast.png', alt: '戀愛會社節目', href: '/podcast' },
  { src: '/images/banners/banner-products.png', alt: '戀愛商品', href: '/advertising' },
];

export function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '425px' }}>
      {slides.map((slide, i) => (
        <a
          key={slide.src}
          href={slide.href}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </a>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="上一張"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow transition hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 15l-5-5 5-5" stroke="#5b2145" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={next}
        aria-label="下一張"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow transition hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="#5b2145" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`第 ${i + 1} 張`}
            className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

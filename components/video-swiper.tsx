'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { YouTubeCard } from './youtube-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Video = { id: string; title: string; thumbnail?: string };

export function VideoSwiper({ videos }: { videos: Video[] }) {
  return (
    <div className="podcast-swiper">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {videos.map((v) => (
          <SwiperSlide key={v.id}>
            <YouTubeCard videoId={v.id} title={v.title} thumbnail={v.thumbnail} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

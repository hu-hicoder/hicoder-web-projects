'use client';

import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = ['/assets/img/image-1.jpg', '/assets/img/image-2.jpg', '/assets/img/image-3.jpg'];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const sw = swiperRef.current;
        if (!sw) return;
        if (entry.isIntersecting) {
          sw.autoplay.start();
        } else {
          sw.autoplay.stop();
        }
      },
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[530px] sm:h-[780px] md:h-[660px] 2xl:h-[750px] pt-16 lg:pt-20 mb-8 md:mb-12 overflow-hidden"
    >
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active' }}
        onSwiper={(sw) => {
          swiperRef.current = sw;
        }}
        className="w-full h-full"
      >
        {slides.map((src) => (
          <SwiperSlide
            key={src}
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </Swiper>
    </div>
  );
}

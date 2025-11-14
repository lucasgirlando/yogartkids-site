"use client";

import React from "react";
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

const HERO_IMAGES = [
  "/images/yogart1.jpg",
  "/images/yogart2.jpg",
  "/images/yogart3.jpg",
  "/images/yogart20.jpeg",
  "/images/yogart21.jpeg",
  "/images/yogart22.jpeg",
  // add more if you want
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-neutral-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        {/* HERO: slideshow (left) + title + blurb (right) */}
        <section className="grid gap-6 md:grid-cols-2 items-start">
          <HeroSlideshow images={HERO_IMAGES} />

          <div className="space-y-4">
            <h1 className="magic-title text-left">YogArtKids</h1>
            <p className="byline mt-2 text-left">
              Where art, yoga, and mindfulness help kids express themselves with joy.
            </p>

            <div className="card">
              <p className="text-[15px] leading-7 text-neutral-800">
                We blend Montessori-rooted <strong>art</strong> and <strong>yoga</strong> so
                kids can explore feelings, move with awareness, and build confidence.
                Each class focuses on curiosity, process over product, and a calm,
                joyful environment where imagination thrives.
              </p>
            </div>
          </div>
        </section>

        {/* Quick highlight cards */}
        <section className="grid gap-5 md:grid-cols-3">
          <div className="mini">
            <p className="miniLabel">Art with Ms. Patty</p>
            <p className="miniValue text-[15px] font-normal text-neutral-700 mt-2">
              Mindful art sessions with rich materials, music, and lots of color.
            </p>
          </div>
          <div className="mini">
            <p className="miniLabel">Yoga with Jackie</p>
            <p className="miniValue text-[15px] font-normal text-neutral-700 mt-2">
              Story-based yoga that supports focus, balance, and emotional awareness.
            </p>
          </div>
          <div className="mini">
            <p className="miniLabel">Special Experiences</p>
            <p className="miniValue text-[15px] font-normal text-neutral-700 mt-2">
              Afterschool programs, Sunny Isles Beach Program, birthdays, and more.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ============== Slideshow ============== */
function HeroSlideshow({ images }) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length, paused]);

  const go = (delta) =>
    setIdx((i) => (i + delta + images.length) % images.length);

  return (
    <div
      className="card relative overflow-hidden p-0 hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${i + 1}`}
          width={1600}
          height={1200}
          priority={i === 0}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Arrows */}
      <button
        type="button"
        className="heroNav left-2"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="heroNav right-2"
        aria-label="Next slide"
        onClick={() => go(+1)}
      >
        ›
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === idx ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

const HERO_IMAGES = [
  "/images/yogart1.jpg",
  "/images/yogart2.jpg",
  "/images/yogart3.jpg",
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-neutral-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        {/* Top: big About title + tagline */}
        <section className="text-center">
          <h1 className="magic-title">YogArtKids</h1>
          <p className="byline mt-2">
            Where art, yoga, and mindfulness help kids express themselves with joy.
          </p>
        </section>

        {/* Short mission blurb in a card */}
        <section className="card max-w-3xl mx-auto">
          <p className="text-[15px] leading-7 text-neutral-800">
            We blend Montessori-rooted <strong>art</strong> and <strong>yoga</strong> so
            kids can explore feelings, move with awareness, and build confidence. Each
            class focuses on curiosity, process over product, and a calm, joyful
            environment where imagination thrives.
          </p>
        </section>

        {/* Row of photos */}
        <section className="grid gap-4 md:grid-cols-3">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src}
              className="card overflow-hidden p-0 subtle-float"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <Image
                src={src}
                alt="YogArtKids art and yoga"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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

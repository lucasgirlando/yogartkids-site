"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

/* reuse the same header look as home */
function SiteHeader() {
  return (
    <header className="siteHeader flex justify-between items-center py-4 px-6">
      <Link href="/" className="flex items-center gap-3" aria-label="YogArtKids home">
        <Image src="/images/logo.png" alt="YogArtKids" width={170} height={100} priority />
      </Link>

      <nav className="flex gap-8 text-[15px] font-medium text-neutral-800">
        <Link href="/"        className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]">After School Program</Link>
        <Link href="/about"   className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]">About Us</Link>
        <Link href="/contact" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]">Contact</Link>
      </nav>
    </header>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen text-neutral-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Title + mission */}
        <section className="text-center mb-8">
          <h1 className="title">About Us</h1>
          <p className="byline mt-2">YogArtKids — Where Art Meets Mindfulness</p>
        </section>

        <section className="card mx-auto max-w-3xl mb-10">
          <p className="text-[15px] leading-7 text-neutral-800">
            We blend Montessori-rooted <strong>art</strong> and <strong>yoga</strong> so kids can
            express feelings, move with awareness, and build confidence. Each class focuses on
            curiosity, process over product, and a calm, joyful environment where imagination thrives.
          </p>
        </section>

        {/* Ms. Patty — Art (image left, text right) */}
        <section className="grid md:grid-cols-2 gap-6 items-center mb-8">
          <div className="card overflow-hidden p-0 float-card">
            <Image
              src="/images/about-art.jpeg"   /* replace with your photo */
              alt="Kids creating with color and movement"
              width={1600}
              height={1200}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          <div className="card">
            <h2 className="section">Art Experiences with Ms. Patty</h2>
            <p className="text-[15px] leading-7 text-neutral-800">
              Patricia invites children to explore freely and create with confidence. Sessions weave
              visual art, movement, and mindfulness—using rich materials from charcoal and large paper
              to mixed media and textures. Kids sometimes paint with silent-disco headphones, noticing
              how rhythm and sound change color and emotion. We emphasize <em>discovery over imitation</em>:
              noticing, interpreting, and expressing ideas in their own way.
            </p>
          </div>
        </section>

        {/* Jackie — Yoga (image right, text left) */}
        <section className="grid md:grid-cols-2 gap-6 items-center mb-8">
          <div className="order-2 md:order-1 card">
            <h2 className="section">Mindful Yoga with Jackie</h2>
            <p className="text-[15px] leading-7 text-neutral-800">
              Jackie blends yoga, movement, and imagination to support focus and emotional wellbeing.
              Through stories, breath, and playful postures, children connect body and mind, develop
              balance and coordination, and learn self-regulation. This grounding prepares them to
              create art with attention and ease.
            </p>
            <ul className="list-disc pl-5 mt-2 text-[15px] text-neutral-700">
              <li>Connects body, breath, and feelings</li>
              <li>Builds balance, strength, and confidence</li>
              <li>Improves concentration and calm</li>
            </ul>
          </div>

          <div className="order-1 md:order-2 card overflow-hidden p-0 float-card">
            <Image
              src="/images/about-yoga.jpeg"   /* replace with your photo */
              alt="Mindful yoga and creative flow"
              width={1600}
              height={1200}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </section>

        {/* Optional closing card */}
        <section className="card">
          <h2 className="section">Why YogArtKids</h2>
          <ul className="list-disc pl-5 leading-7 text-[15px] text-neutral-700">
            <li>Creativity from feeling, not imitation</li>
            <li>Mindful connection of art, body, and emotion</li>
            <li>Focus, confidence, and self-expression</li>
            <li>Sensory exploration of color, sound, and movement</li>
            <li>Curiosity, imagination, and joyful learning</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

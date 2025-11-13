"use client";

import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="siteHeader flex justify-between items-center py-4 px-6">
      <Link href="/" className="flex items-center gap-3" aria-label="YogArtKids home">
        <Image src="/images/logo.png" alt="YogArtKids" width={220} height={100} priority />
      </Link>

      <nav className="flex gap-8 text-[15px] font-medium text-neutral-800">
        <Link
          href="/after-school-program"
          className="relative pb-1 whitespace-nowrap after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]"
        >
          After School Program
        </Link>
        <Link
          href="/about"
          className="relative pb-1 whitespace-nowrap after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="relative pb-1 whitespace-nowrap after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

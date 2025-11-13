// app/contact/page.js
import Link from "next/link";
import Image from "next/image";

const CONTACT = {
  phoneRaw: "3054795142",
  phonePretty: "(305) 479-5142",
  email: "yogartkidsmiami@gmail.com",
  instagram: "yogartkidsmiami",
};

function SiteHeader() {
  return (
    <header className="siteHeader flex justify-between items-center py-4 px-6">
      <Link href="/" className="flex items-center gap-3" aria-label="YogArtKids home">
        <Image src="/images/logo.png" alt="YogArtKids" width={220} height={100} priority />
      </Link>

      <nav className="flex gap-8 text-[15px] font-medium text-neutral-800">
        <Link
          href="/after-school-program"
          className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]"
        >
          After School Program
        </Link>
        <Link
          href="/about"
          className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#f58220]"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export const metadata = {
  title: "Contact • YogArtKids",
  description: "Phone, email, and Instagram for YogArtKids.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-neutral-900">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* Page title */}
        <section className="text-center mb-6">
          <h1 className="title">Contact</h1>
          <p className="byline mt-2">
            We’d love to hear from you about classes, collaborations, or any questions.
          </p>
        </section>

        {/* Intro card */}
        <section className="card mb-6">
          <h2 className="section">Get in touch</h2>
          <p className="text-[15px] leading-7 text-neutral-700">
            Reach out to YogArtKids for after-school programs, workshops, birthday
            celebrations, or special events. We’re happy to help you find the best
            creative experience for your child.
          </p>
        </section>

        {/* Contact methods */}
        <section className="grid gap-5 md:grid-cols-3">
          {/* Phone */}
          <div className="card flex flex-col gap-2">
            <span className="text-2xl">📞</span>
            <p className="miniLabel">Phone</p>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="text-[15px] font-semibold text-neutral-800 hover:underline"
            >
              {CONTACT.phonePretty}
            </a>
            <p className="text-[13px] text-neutral-500">
              Call or text for quick questions about classes and schedule.
            </p>
          </div>

          {/* Email */}
          <div className="card flex flex-col gap-2">
            <span className="text-2xl">✉️</span>
            <p className="miniLabel">Email</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[15px] font-semibold text-neutral-800 break-all hover:underline"
            >
              {CONTACT.email}
            </a>
            <p className="text-[13px] text-neutral-500">
              Best for registration details, invoices, and longer questions.
            </p>
          </div>

          {/* Instagram */}
          <div className="card flex flex-col gap-2">
            <span className="text-2xl">📷</span>
            <p className="miniLabel">Instagram</p>
            <a
              href={`https://instagram.com/${CONTACT.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-semibold text-neutral-800 hover:underline"
            >
              @{CONTACT.instagram}
            </a>
            <p className="text-[13px] text-neutral-500">
              Follow along for class photos, announcements, and special events.
            </p>
          </div>
        </section>

        {/* Small footer note */}
        <p className="mt-8 text-center text-[13px] text-neutral-500">
          YogArtKids · Miami, FL · Where art meets mindfulness for kids.
        </p>
      </main>
    </div>
  );
}

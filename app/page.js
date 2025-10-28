"use client"
import React from "react";
import Head from "next/head";

// === YogArtKids one‑pager — layout per sketch ===
// Row 1:   [ IMAGES ]  [ ABOUT ]
// Row 2:   [ Location ] [ Schedule ] [ Pricing ]
// Row 3:   [ Policies & Notes ] [ How to Register ]

const CONFIG = {
  brand: {
    title: "YogArtKids — Afterschool Program",
    byline: "Ms. Patty",
  },
  images: [
    "/images/yogart1.jpg",
    "/images/yogart2.jpg",
    "/images/yogart3.jpg",
    "/images/yogart4.jpg",
    "/images/yogart5.jpg",
    "/images/yogart6.jpg",
    "/images/yogart7.jpg",
    "/images/yogart8.jpg",
    "/images/yogart9.jpg",
    "/images/yogart10.jpg",
    "/images/yogart11.jpg",
    "/images/yogart12.jpg",
    "/images/yogart13.jpg",
    "/images/yogart14.jpg",
    "/images/yogart15.jpg",
  ], // put files in /public/images (or use full URLs)
  school: {
    name: "Learning Land Montessori School",
  },
  schedule: {
    lines: [
      { day: "Mondays", time: "3:30–5:00 pm", ages: "5–6 yrs" },
      { day: "Thursdays", time: "3:30–5:00 pm", ages: "3.5–4 yrs" },
    ],
    totalClasses: 6,
    classDates: [
      "2025-10-20","2025-10-27","2025-11-03","2025-11-10","2025-11-17","2025-12-01",
    ],
  },
  pricing: {
    dropIn: 45,
    packageLabel: "6‑Class Package",
    packageTotal: 240,
  },
  contact: {
    email: "yogartkidsmiami@gmail.com",
  },
  form: {
  provider: "web3forms",
  accessKey: "fabdbb0e-a20c-4d41-ae7d-1c717f366296", // paste from Web3Forms
  redirect: "/thanks"                // optional thank-you route
},

  about:
    "YogArtKids is a mindful and creative art experience designed to inspire children to express themselves freely, explore their imagination, and connect with their inner creativity. Each session blends art, color, movement, and mindfulness, drawing inspiration from the styles and energy of world‑renowned artists. The program emphasizes the creative process over product — encouraging curiosity, emotional awareness, and confidence in a calm, joyful, and nurturing environment.",
  bullets: [
    "High‑quality materials — paints, canvases, markers, colorful paper, and recycled items",
    "Creative prompts inspired by great artists and their unique styles",
    "Exploration of color, form, and texture to build confidence and focus",
    "Emphasis on emotional expression and each child’s individuality",
    "Guided projects that encourage joy, discovery, and artistic freedom",
    "Small groups for personalized attention and a nurturing environment"
  ],
  policies: [
    "6‑week session, small groups ",
    "Bring a water bottle and wear art‑friendly clothes",
  ],
  themes: [
    { icon: "🎨", title: "Art & Emotion", artists: "Kandinsky & Joan Mitchell", line: "Express feelings through color, shape, and sound" },
    { icon: "💃", title: "Movement & Expression", artists: "Joan Miró & Jackson Pollock", line: "Dancing lines, splashing paint, energy, and freedom" },
    { icon: "🌸", title: "Nature & Feminine Art", artists: "Frida Kahlo & Alma Thomas", line: "Celebrate sensitivity, emotion, and organic beauty" },
    { icon: "🖍", title: "Shapes & Color Play", artists: "Paul Klee & Piet Mondrian", line: "Geometry and color balance — joyful harmony" },
    { icon: "🎨", title: "Imagination & Dreams", artists: "Pablo Picasso & Yayoi Kusama", line: "Fantastic faces and infinite worlds of color and pattern" },
  ],
};

const money = (n) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);

export default function Page() {
  const remaining = remainingClassesText(CONFIG.schedule.classDates);
  return (
    
    
    <div className="min-h-screen text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Header />

        {/* Row 1 */}
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <HeroSlideshow />
          <AboutCard />
        </div>

        {/* Row 2 */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <MiniCard label="Location" value={CONFIG.school.name} />
          <MiniCard
            label="Schedule"
            value={
              <ul className="m-0 p-0 list-none leading-7">
                {CONFIG.schedule.lines.map((l) => (
                  <li key={l.day}><strong>{l.day}</strong> · {l.time} · {l.ages}</li>
                ))}
              </ul>
            }
            foot={`${CONFIG.schedule.totalClasses} total classes `}
          />
          <MiniCard
            label="Pricing"
            value={
              <div>
                <div className="mt-1">{money(CONFIG.pricing.packageTotal)} <span className="muted">{CONFIG.pricing.packageLabel}</span></div>
              </div>
            }
          />
        </div>

{/* Row 3 */}
<div className="mt-6 grid gap-6 lg:grid-cols-3">
  <Policies />
  <ThemesCard />
  <RegisterCard />
</div>

{/* Row 4: Registration form */}
<RegistrationForm />

<Footer />

      </div>
      <style>{css}</style>
    </div>
  );
}

function Header() {
  return (
    <header className="mb-4">
      <h1 className="title">{CONFIG.brand.title}</h1>
      <p className="byline">{CONFIG.brand.byline}</p>
    </header>
  );
}

function HeroSlideshow() {
  const images = CONFIG.images;
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 4800);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <section className="card relative overflow-hidden p-0 hero">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === idx ? "active" : ""}`}></span>
        ))}
      </div>
    </section>
  );
}

function AboutCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section className="card">
      <h2 className="section">About</h2>

      <div className={expanded ? "" : "aboutClamp"}>
        <p className="text-[15px] leading-7 text-neutral-800">
          {CONFIG.about}
        </p>

        <ul className="checklist mt-3">
          {CONFIG.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="linkButton mt-2"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </section>
  );
}



function Policies() {
  return (
    <section className="card">
      <h2 className="section">Policies & Notes</h2>
      <ul className="list-disc pl-5 leading-7 text-[15px] text-neutral-700 m-0">
        {CONFIG.policies.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

function RegisterCard() {
  const email = CONFIG.contact.email;
  return (
    <aside className="card" id="how-to-register">
      <h2 className="section">How to Register</h2>
      <ol className="steps">
        <li><strong>Fill out the form below</strong></li>
        <li>
          Send payment via <strong>Zelle</strong> to <span className="mono">{email}</span>  {money(CONFIG.pricing.packageTotal)} for the{" "}
          {CONFIG.pricing.packageLabel}.
        </li>
        <li>We’ll reply with a confirmation and first-day details.</li>
      </ol>

      <div className="note">No online checkout. Email + Zelle keeps it simple and affordable.</div>

      <a href="#registration-form" className="btn mt-3 inline-block">Fill out form</a>
    </aside>
  );
}

function ThemesCard() {
  return (
    <section className="card">
      <h2 className="section">Artistic Themes</h2>
      <div className="grid gap-2 text-[15px] text-neutral-800">
        {CONFIG.themes.map((t) => (
          <div key={t.title} className="flex items-start gap-2">
            <div className="text-lg leading-6">{t.icon}</div>
            <div>
              <div className="font-semibold">
                {t.title}{" "}
                <span className="font-normal text-neutral-600">— {t.artists}</span>
              </div>
              <div className="text-neutral-700">{t.line}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MiniCard({ label, value, foot }) {
  return (
    <div className="mini">
      <p className="miniLabel">{label}</p>
      <div className="miniValue">{value}</div>
      {foot && <p className="miniFoot">{foot}</p>}
    </div>
  );
}

function RegistrationForm() {
  const action = "https://api.web3forms.com/submit";
  const access = CONFIG.form?.accessKey || "";

  return (
    <section className="card mt-6" id="registration-form">
      <h2 className="section">Registration Form</h2>

      {!access && (
        <p className="text-sm text-neutral-600 mb-3">
          Set <code>CONFIG.form.accessKey</code> to enable submissions.
        </p>
      )}

      <form action={action} method="POST" className="grid gap-3"
            onSubmit={(e)=>{ if(!access){ e.preventDefault(); alert("Add your Web3Forms access key in CONFIG.form.accessKey."); }}}>
        {/* Web3Forms required fields */}
        <input type="hidden" name="access_key" value={access} />
        <input type="hidden" name="subject" value="New YogArtKids Registration" />
        <input type="hidden" name="from_name" value="YogArtKids Website" />
        {CONFIG.form?.redirect && (
          <input type="hidden" name="redirect" value={CONFIG.form.redirect} />
        )}
        <input type="checkbox" name="botcheck" className="hidden" />

        {/* Visible form fields */}
        <div className="grid md:grid-cols-2 gap-3">
          <label className="formRow">Name of the child<input name="child_name" required className="input" /></label>
          <label className="formRow">Parent/Guardian Name<input name="parent_name" required className="input" /></label>
          <label className="formRow">Parent/Guardian Phone<input name="parent_phone" required className="input" /></label>
          <label className="formRow">Parent/Guardian Address<input name="parent_address" className="input" /></label>
          <label className="formRow">Emergency Contact (name & number)<input name="emergency_contact" className="input" /></label>
          <label className="formRow">Authorized Pickup<input name="authorized_pickup" className="input" /></label>
        </div>

        <label className="formRow">Child Medical Info / Allergies<textarea name="medical_info" rows={3} className="textarea" /></label>
        <label className="formRow">Program Dates<input name="program_dates" placeholder="e.g., Mondays & Thursdays — 6 classes" className="input" /></label>

        <div className="mt-1 flex items-center gap-3">
          <button type="submit" className="btn">Submit Registration</button>
          <span className="text-sm text-neutral-500">Submits securely via Web3Forms.</span>
        </div>
      </form>
    </section>
  );
}


function Footer() {
  return (
    <footer className="mt-10 text-center text-[13px] text-neutral-500">
      © {new Date().getFullYear()} · YogArtKids
    </footer>
  );
}

function remainingClassesText(dates) {
  const today = new Date();
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const count = dates.filter((d) => new Date(d) >= startOfDay(today)).length;
  return count + (count === 1 ? " class remaining" : " classes remaining");
}

const css = `
  /* --- Professional aesthetic refresh --- */
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root{
    --bg:#f7f7fb;         /* fallback page background */
    --card:#ffffff;       /* card background */
    --line:#e7e8ee;       /* subtle borders */
    --ink:#111827;        /* primary text */
    --muted:#6b7280;      /* secondary text */
    --accent:#0ea5e9;     /* sky-500 */
    --radius:18px;
    --shadow:0 8px 24px rgba(16,24,40,.06), 0 2px 6px rgba(16,24,40,.04);
  }

  /* --- Full-page background image --- */
  html, body{
    background: var(--bg) url("/images/yogartbg.jpg") center center / cover no-repeat fixed;
    color: var(--ink);
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    min-height: 100%;
  }
  body{ position: relative; }

  /* Soft white overlay to keep content readable on top of photo */
  body::before{
    content:"";
    position: fixed;
    inset: 0;
    background: rgba(255,255,255,0.75); /* tweak 0.65–0.85 to taste */
    z-index: -1; /* sit behind everything */
  }

  .title{font-weight:800;letter-spacing:-.02em;line-height:1.08;font-size:clamp(30px,4.6vw,54px)}
  .byline{color:var(--muted);margin-top:.35rem;font-size:clamp(14px,1.6vw,16px)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow)}
  .section{font-size:18px;font-weight:750;margin-bottom:.6rem;position:relative}
  .section::after{content:"";display:block;width:38px;height:3px;background:linear-gradient(90deg,var(--accent),#60a5fa);border-radius:999px;margin-top:.35rem}
  .mini{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;box-shadow:0 3px 10px rgba(16,24,40,.04)}
  .miniLabel{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
  .miniValue{margin-top:.35rem;font-weight:700}
  .miniFoot{margin-top:.25rem;color:var(--muted);font-size:13px}
  .checklist{display:grid;gap:.5rem;padding-left:1.1rem}
  .steps{display:grid;gap:.7rem;margin:0;padding-left:1.25rem}
  .note{margin-top:12px;padding:12px 14px;border:1px dashed var(--line);border-radius:12px;color:#475569;background:#f8fafc}
  .link{color:var(--ink);text-decoration:underline;text-underline-offset:2px}
  .mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace}

  /* slideshow dots */
  .dots{position:absolute;left:50%;transform:translateX(-50%);bottom:10px;display:flex;gap:6px}
  .dot{width:6px;height:6px;border-radius:999px;background:rgba(255,255,255,.55)}
  .dot.active{background:#fff}

  /* image aspect to feel premium */
  .hero{aspect-ratio:5/3}

  /* Compact About: clamp height with fade + toggle */
  .aboutClamp{
    max-height: 260px;
    overflow: hidden;
    position: relative;
  }
  .aboutClamp::after{
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 55%, var(--card) 100%);
  }
  .linkButton{
    border: none;
    background: transparent;
    color: var(--accent);
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    text-decoration: none;
  }
  .linkButton:hover{ text-decoration: underline; }

  /* buttons & form */
  .btn{display:inline-flex;align-items:center;justify-content:center;padding:.7rem 1.05rem;border-radius:12px;background:linear-gradient(180deg,#111827,#0f172a);color:#fff;font-weight:700;box-shadow:0 2px 6px rgba(16,24,40,.12);border:1px solid #0f172a}
  .btn:hover{opacity:.95}
  .formRow{display:grid;gap:.35rem;font-size:14px;color:#374151}
  .input,.textarea{width:100%;border:1px solid var(--line);border-radius:12px;padding:.6rem .75rem;background:#fff}
  .input:focus,.textarea:focus{outline:none;border-color:#b1b6ff;box-shadow:0 0 0 3px rgba(99,102,241,.15)}
`;


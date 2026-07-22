"use client";

import { useState } from "react";

const PHONE = "918790042094";
const whatsapp = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Plans", "#memberships"],
  ["Trainer", "#trainer"],
  ["Gallery", "#gallery"],
  ["Timings", "#timings"],
  ["Contact", "#contact"],
];

const features = [
  ["fitness_center", "Complete Equipment", "Strength and fitness equipment for beginners, regular members, and serious lifters."],
  ["person_pin", "30 Years Experience", "Train under T. Suresh with practical guidance, safe technique, and steady progress."],
  ["groups", "Friendly Environment", "A supportive local gym atmosphere where members can train consistently and confidently."],
  ["payments", "Affordable Plans", "Simple monthly, 3-month, and 6-month membership options with clear pricing."],
];

const plans = [
  {
    name: "Monthly",
    price: "₹500",
    featured: false,
    benefits: ["One month gym access", "₹300 one-time advance", "Trainer guidance included"],
    note: "First payment: ₹800",
    message: "Hi Metro Flex Gym, I am interested in the Monthly plan of ₹500 with ₹300 advance.",
  },
  {
    name: "3 Months",
    price: "₹1,700",
    featured: true,
    benefits: ["Three months gym access", "Only ₹100 payable at the office", "No separate ₹300 advance"],
    note: "Popular short-term plan",
    message: "Hi Metro Flex Gym, I am interested in the 3-month plan for ₹1,700.",
  },
  {
    name: "6 Months",
    price: "₹3,000",
    featured: false,
    benefits: ["Six months gym access", "No advance payment", "Trainer guidance included"],
    note: "Best long-term value",
    message: "Hi Metro Flex Gym, I am interested in the 6-month plan for ₹3,000 with no advance.",
  },
];

const gallery = Array.from({ length: 8 }, (_, index) => ({
  src: `/images/image${index}.jpeg`,
  alt: `Metro Flex Gym photo ${index + 1}`,
}));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37] bg-[#ff6700] text-sm font-black text-black">MF</span>
            <div>
              <div className="text-sm font-black tracking-[0.12em] sm:text-lg">METRO FLEX GYM</div>
              <div className="hidden text-[10px] uppercase tracking-[0.22em] text-zinc-400 sm:block">Rajajinagar, Bengaluru</div>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-zinc-300 hover:text-[#d4af37]">{label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsapp("Hi Metro Flex Gym, I want to know about membership.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden bg-[#25D366] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:scale-105 sm:inline-flex"
            >
              WhatsApp
            </a>
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center border border-white/15 lg:hidden"
            >
              <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-[0.16em]">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 pb-3 text-zinc-300">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center px-6 pt-28"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,.9), rgba(0,0,0,.58), rgba(0,0,0,.35)), url('/images/image8.jpeg')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#d4af37]/40 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <span className="material-symbols-outlined text-base">workspace_premium</span>
              30 Years of Training Experience
            </div>

            <h1 className="text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Build Strength.
              <br />
              <span className="text-gradient-gold">Build Discipline.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              Affordable memberships, personal guidance, and a friendly training environment near ISKCON Temple, Rajajinagar.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp("Hi Metro Flex Gym, I want to join. Please share membership details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#ff6700] px-8 py-4 font-black uppercase tracking-widest text-black hover:shadow-[0_0_28px_rgba(255,103,0,.45)]"
              >
                <span className="material-symbols-outlined">fitness_center</span>
                Join Metro Flex
              </a>
              <a href="tel:+918790042094" className="glass inline-flex items-center justify-center gap-3 px-8 py-4 font-black uppercase tracking-widest text-[#d4af37]">
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="section-label">Why Metro Flex</p>
            <h2 className="section-title mt-4">A local gym built for real progress</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Metro Flex Gym combines practical training, affordable pricing, and direct guidance from T. Suresh.
              The focus is on consistency, correct technique, and measurable improvement.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(([icon, title, description]) => (
              <article key={title} className="glass p-6 transition hover:-translate-y-1 hover:border-[#ff6700]">
                <span className="material-symbols-outlined text-4xl text-[#d4af37]">{icon}</span>
                <h3 className="mt-5 text-lg font-black uppercase">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="memberships" className="bg-[#0d0d0d] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="section-label">Simple Pricing</p>
            <h2 className="section-title mt-4">Membership Plans</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
              Choose the plan that matches your schedule and budget. Contact us directly to join.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col p-8 lg:p-10 ${
                  plan.featured ? "glass border-[#d4af37] shadow-[0_0_45px_rgba(212,175,55,.12)] md:scale-105" : "glass"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-0 top-0 bg-[#d4af37] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-black">
                    Most Popular
                  </span>
                )}

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">{plan.name}</div>
                <div className="mt-6 text-5xl font-black">{plan.price}</div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-zinc-300">
                      <span className="material-symbols-outlined mt-0.5 text-base text-[#d4af37]">check_circle</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-sm font-bold text-[#d4af37]">{plan.note}</p>

                <a
                  href={whatsapp(plan.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 py-4 text-sm font-black uppercase tracking-widest ${
                    plan.featured ? "bg-[#25D366] text-black" : "border border-white/20 hover:bg-white/5"
                  }`}
                >
                  <span className="material-symbols-outlined">chat</span>
                  Join This Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trainer" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden border border-white/10">
            <img src="/images/image1.jpeg" alt="T. Suresh at Metro Flex Gym" className="h-[520px] w-full object-cover grayscale" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">Head Trainer</p>
              <h3 className="mt-2 text-3xl font-black uppercase">T. Suresh</h3>
            </div>
          </div>

          <div>
            <p className="section-label">Meet Your Trainer</p>
            <h2 className="section-title mt-4">30 years of practical training experience</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              T. Suresh provides hands-on guidance for beginners, regular members, strength training,
              weight management, and general fitness.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["fitness_center", "Strength Training"],
                ["monitor_weight", "Weight Management"],
                ["directions_run", "General Fitness"],
                ["school", "Beginner Guidance"],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-3 border border-white/10 bg-white/5 p-4">
                  <span className="material-symbols-outlined text-[#ff6700]">{icon}</span>
                  <span className="font-bold">{label}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsapp("Hi Metro Flex Gym, I want to speak with T. Suresh about training.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#25D366] px-7 py-4 font-black uppercase tracking-widest text-black"
            >
              <span className="material-symbols-outlined">chat</span>
              Talk to Trainer
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#0d0d0d] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="section-label">Real Gym Photos</p>
            <h2 className="section-title mt-4">Inside Metro Flex</h2>
          </div>

          <div className="mt-12 grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <figure
                key={image.src}
                className={`group overflow-hidden border border-white/10 ${
                  index === 0 || index === 5 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="px-6 py-24 lg:px-10 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="section-label">Gym Walkthrough</p>
      <h2 className="section-title mt-4">
        See Metro Flex in action
      </h2>
    </div>

    <div className="mt-12 overflow-hidden border border-white/10 bg-[#111]">
      <video
        className="w-full"
        controls
        playsInline
        preload="metadata"
        poster="/images/image2.jpeg"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

      <section id="timings" className="bg-[#0d0d0d] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="glass p-8 lg:p-10">
            <p className="section-label">Gym Timings</p>
            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">Train at your convenient time</h2>

            <div className="mt-8 space-y-6">
              <div className="border-b border-white/10 pb-5">
                <div className="font-black uppercase">Monday – Saturday</div>
                <div className="mt-3 grid gap-3 text-zinc-400 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#d4af37]">wb_sunny</span>
                    5:30 AM – 10:00 AM
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#d4af37]">dark_mode</span>
                    4:30 PM – 10:00 PM
                  </div>
                </div>
              </div>

              <div>
                <div className="font-black uppercase">Sunday</div>
                <p className="mt-3 text-zinc-400">Please contact the gym for Sunday timings.</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-[#ff6700]">
              Update these timings if the actual gym schedule is different.
            </p>
          </div>

          <div className="glass p-8 lg:p-10">
            <p className="section-label">Location</p>
            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">Near ISKCON Temple</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Metro Flex Gym, Rajajinagar, Bengaluru, near ISKCON Temple.
            </p>

            <div className="mt-8 flex min-h-64 items-center justify-center bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:22px_22px]">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6700] text-black">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <p className="mt-4 font-bold text-[#d4af37]">Rajajinagar, Bengaluru</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Metro+Flex+Gym+Rajajinagar+near+ISKCON+Temple+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-4 font-black uppercase tracking-widest text-black"
            >
              <span className="material-symbols-outlined">map</span>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="glass p-8 text-center lg:p-14">
            <p className="section-label">Contact Metro Flex Gym</p>
            <h2 className="section-title mt-4">Start your fitness journey</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Contact T. Suresh directly for membership, gym timings, and training details.
            </p>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
              {[
                ["call", "Phone", "8790042094"],
                ["person", "Trainer", "T. Suresh"],
                ["location_on", "Location", "Rajajinagar"],
              ].map(([icon, label, value]) => (
                <div key={label} className="border border-white/10 bg-white/5 p-5">
                  <span className="material-symbols-outlined text-[#d4af37]">{icon}</span>
                  <div className="mt-3 text-xs uppercase tracking-widest text-zinc-500">{label}</div>
                  <div className="mt-1 font-bold">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:+918790042094" className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 font-black uppercase tracking-widest hover:bg-white/5">
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
              <a
                href={whatsapp("Hi Metro Flex Gym, I want to know about membership.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-8 py-4 font-black uppercase tracking-widest text-black"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3">
        <a href="tel:+918790042094" aria-label="Call Metro Flex Gym" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6700] text-black shadow-[0_8px_30px_rgba(255,103,0,.4)] transition hover:scale-110">
          <span className="material-symbols-outlined text-2xl">call</span>
        </a>
        <a
          href={whatsapp("Hi Metro Flex Gym, I want to know about membership.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Metro Flex Gym"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_8px_30px_rgba(37,211,102,.4)] transition hover:scale-110"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
        </a>
      </div>

      <footer className="border-t border-white/10 px-6 py-14 text-center">
        <div className="flex justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37] bg-[#ff6700] font-black text-black">MF</span>
        </div>
        <div className="mt-4 text-2xl font-black uppercase">Metro Flex Gym</div>
        <p className="mt-3 text-sm text-zinc-500">Rajajinagar, Bengaluru — near ISKCON Temple</p>
        <p className="mt-10 text-xs uppercase tracking-widest text-zinc-600">© 2026 Metro Flex Gym. All rights reserved.</p>
      </footer>
    </main>
  );
}

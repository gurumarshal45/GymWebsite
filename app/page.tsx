"use client";

import { FormEvent, useState } from "react";

const features = [
  {
    icon: "fitness_center",
    title: "Precision Gear",
    description:
      "Premium equipment designed for performance, durability, and biomechanical accuracy.",
  },
  {
    icon: "person_pin",
    title: "Elite Coaches",
    description:
      "Train with experienced coaches focused on strength, conditioning, and longevity.",
  },
  {
    icon: "spa",
    title: "Luxury Recovery",
    description:
      "Recovery services designed to help members train consistently and safely.",
  },
  {
    icon: "restaurant",
    title: "Bespoke Fuel",
    description:
      "Personalized nutrition guidance to support performance and body-composition goals.",
  },
];

const services = [
  {
    title: "Personal Training",
    description:
      "One-on-one sessions built around your goals, fitness level, and progress data.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Group Classes",
    description:
      "High-energy classes combining expert instruction, community, and measurable progress.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Science-informed nutrition plans for performance, recovery, and sustainable results.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
];

const plans = [
  {
    name: "Basic",
    price: "$149",
    featured: false,
    benefits: [
      "Global club access",
      "Performance locker",
      "Apex digital app",
    ],
  },
  {
    name: "Elite",
    price: "$349",
    featured: true,
    benefits: [
      "Unlimited recovery access",
      "Priority class booking",
      "4 guest passes monthly",
      "Biometric assessment",
    ],
  },
  {
    name: "Pro",
    price: "$249",
    featured: false,
    benefits: [
      "Group class access",
      "Sauna and steam suite",
      "Apparel cleaning",
    ],
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            APEX FITNESS
          </a>

          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#training" className="text-[#d4af37]">
              Training
            </a>
            <a href="#services" className="text-zinc-400 hover:text-white">
              Classes
            </a>
            <a href="#memberships" className="text-zinc-400 hover:text-white">
              Memberships
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#memberships"
            className="bg-[#ff6700] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105"
          >
            Join Elite
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.78)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="relative z-10 mx-auto max-w-4xl pt-24">
          <h1 className="text-5xl font-extrabold uppercase leading-none tracking-[0.04em] sm:text-7xl lg:text-8xl">
            <span className="text-gradient-gold">Forge Your</span>
            <br />
            Legacy
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Experience the pinnacle of performance in a space designed for the
            disciplined. Luxury meets grit at Apex Fitness.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="bg-[#ff6700] px-8 py-4 font-bold uppercase tracking-widest text-black hover:shadow-[0_0_24px_rgba(255,103,0,.45)]"
            >
              Start Your Transformation
            </a>

            <a
              href="#training"
              className="glass px-8 py-4 font-bold uppercase tracking-widest text-[#d4af37] hover:border-[#d4af37]"
            >
              Explore Elite Perks
            </a>
          </div>
        </div>
      </section>

      <section
        id="training"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
            The Apex Edge
          </h2>
          <div className="mt-4 h-1 w-24 bg-[#d4af37]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass p-8 transition hover:border-[#ff6700]"
            >
              <span className="material-symbols-outlined mb-5 block text-4xl text-[#d4af37]">
                {feature.icon}
              </span>

              <h3 className="text-xl font-bold uppercase">{feature.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="bg-[#0e0e0e] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
            Tailored Performance
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Exclusive programs curated for your physiology, schedule, and
            goals.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative h-[520px] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold uppercase">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-300">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#d4af37]"
                  >
                    Discover details
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 text-center md:grid-cols-3">
          <div>
            <div className="text-6xl font-extrabold text-[#ff6700]">
              1,200+
            </div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Elite Members
            </div>
          </div>

          <div>
            <div className="text-6xl font-extrabold text-[#ff6700]">45</div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Master Coaches
            </div>
          </div>

          <div>
            <div className="text-6xl font-extrabold text-[#ff6700]">12</div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Global Hubs
            </div>
          </div>
        </div>
      </section>

      <section
        id="memberships"
        className="px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
              Choose Your Tier
            </h2>

            <p className="mt-4 text-lg text-zinc-400">
              Uncompromising access to the world of Apex Fitness.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col p-8 lg:p-10 ${
                  plan.featured
                    ? "glass border-[#d4af37] md:scale-105"
                    : "glass"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-0 top-0 bg-[#d4af37] px-3 py-1 text-[10px] font-bold uppercase text-black">
                    Most Popular
                  </span>
                )}

                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  {plan.name}
                </div>

                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-zinc-400">/mo</span>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="material-symbols-outlined text-base text-[#d4af37]">
                        check
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 block py-4 text-center text-sm font-bold uppercase tracking-widest ${
                    plan.featured
                      ? "bg-[#ff6700] text-black"
                      : "border border-white/20 hover:bg-white/5"
                  }`}
                >
                  Select Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#131313] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
              alt="Apex Fitness member"
              className="h-full w-full object-cover grayscale"
            />
          </div>

          <div>
            <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
              Voices of the Elite
            </h2>

            <blockquote className="mt-10 border-l-2 border-[#d4af37] pl-7 text-xl leading-8">
              “Unmatched atmosphere. Every detail from the lighting to the
              equipment supports high performance.”
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Sasha Volkov — Professional Swimmer
              </footer>
            </blockquote>

            <blockquote className="mt-10 border-l-2 border-white/10 pl-7 text-xl leading-8 text-zinc-300">
              “The recovery suite helps me maintain training volume and recover
              with confidence.”
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                David Chen — Ultra Runner
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="glass p-8 lg:p-12">
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
              Inquire for Intake
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  required
                  className="form-field"
                  placeholder="Full name"
                />

                <input
                  required
                  type="email"
                  className="form-field"
                  placeholder="Email address"
                />
              </div>

              <select className="form-field">
                <option>Hypertrophy and strength</option>
                <option>Athletic conditioning</option>
                <option>Bio-hack and longevity</option>
                <option>Weight management</option>
              </select>

              <textarea
                className="form-field min-h-32 resize-none"
                placeholder="Tell us about your goals..."
              />

              <button
                type="submit"
                className="w-full bg-[#ff6700] py-4 font-bold uppercase tracking-widest text-black"
              >
                {submitted ? "Application Sent" : "Request Application"}
              </button>
            </form>
          </div>

          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden border border-white/10 bg-[#131313]">
            <div className="map-grid absolute inset-0 opacity-30" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#ff6700] text-black shadow-[0_0_24px_rgba(255,103,0,.55)]">
                <span className="material-symbols-outlined">location_on</span>
              </div>

              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Global HQ
              </div>

              <div className="mt-2 text-sm text-zinc-400">
                450 Elite Drive, Beverly Hills, CA
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-16 text-center">
        <div className="text-3xl font-extrabold">APEX FITNESS</div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-zinc-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-zinc-600">
          © 2026 Apex Fitness. The Elite Standard.
        </p>
      </footer>
    </main>
  );
}
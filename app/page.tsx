"use client";



const features = [
  {
    icon: "fitness_center",
    title: "Complete Equipment",
    description:
      "Strength and fitness equipment for beginners, regular members, and serious lifters.",
  },
  {
    icon: "person_pin",
    title: "Experienced Trainer",
    description:
      "Train under T. Suresh, who has 30 years of hands-on fitness and coaching experience.",
  },
  {
    icon: "groups",
    title: "Friendly Environment",
    description:
      "A supportive local gym atmosphere where members can train consistently and confidently.",
  },
  {
    icon: "payments",
    title: "Affordable Plans",
    description:
      "Simple monthly, 3-month, and 6-month membership options with clear pricing.",
  },
];

type Service = {
  title: string;
  description: string;
  image?: string;
  video?: string;
};

const services: Service[] = [
  {
    title: "Personal Training",
    description:
      "One-on-one sessions built around your goals, fitness level, and progress data.",
    image: "/images/image0.jpeg",
  },
  {
    title: "Gym Tour",
    description:
      "Take a look inside our gym, training areas, equipment, and member experience.",
    video: "/images/video.mov",
  },
  {
    title: "Personal Coaching",
    description:
      "One-on-one coaching designed around your fitness level, body goals, and performance progress.",
    image: "/images/image1.jpeg",
  },
  {
    title: "Elite Training",
    description:
      "Access premium equipment, expert coaches, exclusive classes, and a complete fitness experience.",
    image: "/images/image2.jpeg",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Science-informed nutrition plans for performance, recovery, and sustainable results.",
    image: "/images/image3.jpeg",
  },
  {
    title: "Recovery Zone",
    description:
      "Premium recovery services designed to reduce fatigue, improve mobility, and support consistent training.",
    image: "/images/image4.jpeg",
  },
  {
    title: "Strength Training",
    description:
      "Structured strength programs focused on muscle development, technique, and long-term progression.",
    image: "/images/image5.jpeg",
  },
  {
    title: "Years of Experiencehip Card",
    description:
      "Access premium equipment, expert coaches, exclusive classes, and a complete fitness experience.",
    image: "/images/image6.jpeg",
  },
  {
    title: "Years of Experiencehip",
    description:
      "Access premium equipment, expert coaches, exclusive classes, and a complete fitness experience.",
    image: "/images/image7.jpeg",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "₹500",
    featured: false,
    benefits: [
      "Monthly gym access",
      "₹300 one-time advance",
      "Trainer guidance included",
    ],
    note: "Total first payment: ₹800",
  },
  {
    name: "3 Months",
    price: "₹1,700",
    featured: true,
    benefits: [
      "Three months gym access",
      "Only ₹100 payable at the office",
      "No separate ₹300 advance",
    ],
    note: "Best short-term value",
  },
  {
    name: "6 Months",
    price: "₹3,000",
    featured: false,
    benefits: [
      "Six months gym access",
      "No advance payment",
      "Trainer guidance included",
    ],
    note: "Best long-term value",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            METRO FLEX GYM
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
            Join Now
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
            <span className="text-gradient-gold">Build Your</span>
            <br />
            Strength
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Experience the pinnacle of performance in a space designed for the
            disciplined. Luxury meets grit at Metro Flex Gym.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="bg-[#ff6700] px-8 py-4 font-bold uppercase tracking-widest text-black hover:shadow-[0_0_24px_rgba(255,103,0,.3)]"
            >
              Join Metro Flex
            </a>

            <a
              href="#training"
              className="glass px-8 py-4 font-bold uppercase tracking-widest text-[#d4af37] hover:border-[#d4af37]"
            >
              View Membership Plans
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
            Why Metro Flex
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
            Training at Metro Flex
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Exclusive programs curated for your physiology, schedule, and
            goals.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative h-[520px] overflow-hidden bg-black"
              >
                {service.video ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src={service.video}
                      type={
                        service.video.endsWith(".mov")
                          ? "video/quicktime"
                          : "video/mp4"
                      }
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold uppercase">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-300">
                    {service.description}
                  </p>

                  {!service.video && (
                    <a
                      href="#contact"
                      className="pointer-events-auto mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#d4af37]"
                    >
                      Discover details
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-1 text-center md:grid-cols-3">
          <div>
            <div className="text-6xl font-extrabold text-[#ff6700]">
              30+
            </div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Years of Experience
            </div>
          </div>

          <div>
            <div className="text-6xl font-extrabold text-[#ff6700]">3</div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Membership Plans
            </div>
          </div>

          <div>
            <div className="text-6xl font-extrabold text-[#ff6700]">1</div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Rajajinagar Location
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
              Membership Plans
            </h2>

            <p className="mt-4 text-lg text-zinc-400">
              Uncompromising access to the world of Metro Flex Gym.
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
                    Popular
                  </span>
                )}

                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  {plan.name}
                </div>

                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-zinc-400"></span>
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

                <p className="mt-6 text-sm font-semibold text-[#d4af37]">
                  {plan.note}
                </p>

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
    alt="Metro Flex Gym member"
    className="h-full w-full object-cover grayscale"
  />
</div>

          <div>
            <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">
              Meet Your Trainer
            </h2>

            <blockquote className="mt-10 border-l-2 border-[#d4af37] pl-7 text-xl leading-8">
              “Unmatched atmosphere. Every detail from the lighting to the
              equipment supports high performance.”
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                T. Suresh — Head Trainer
              </footer>
            </blockquote>

            <blockquote className="mt-10 border-l-2 border-white/10 pl-7 text-xl leading-8 text-zinc-300">
              “The recovery suite helps me maintain training volume and recover
              with confidence.”
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Metro Flex Gym — Rajajinagar
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="glass p-8 text-center lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Contact Metro Flex Gym
            </p>

            <h2 className="mt-4 text-3xl font-extrabold uppercase sm:text-5xl">
              Start Your Fitness Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Speak directly with T. Suresh about membership, timings, and training.
            </p>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="font-semibold text-white">Metro Flex Gym</p>
              <p className="mt-2 text-zinc-400">
                Bengaluru, Rajajinagar, near ISKCON Temple
              </p>
              <p className="mt-2 text-zinc-400">
                Trainer: T. Suresh — 30 years of experience
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+918790042094"
                className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/5"
              >
                <span className="material-symbols-outlined">call</span>
                Call 8790042094
              </a>

              <a
                href="https://wa.me/918790042094?text=Hi%20Metro%20Flex%20Gym%2C%20I%20want%20to%20know%20about%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-8 py-4 font-bold uppercase tracking-widest text-black"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3">
        <a
          href="tel:+918790042094"
          aria-label="Call Metro Flex Gym"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6700] text-black shadow-[0_8px_30px_rgba(255,103,0,.4)] transition hover:scale-110"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
        </a>

        <a
          href="https://wa.me/918790042094?text=Hi%20Metro%20Flex%20Gym%2C%20I%20want%20to%20know%20about%20membership."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Metro Flex Gym"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_8px_30px_rgba(37,211,102,.4)] transition hover:scale-110"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
        </a>
      </div>

      <footer className="border-t border-white/10 px-6 py-16 text-center">
        <div className="text-3xl font-extrabold">METRO FLEX GYM</div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-zinc-400">
          <a href="#">Memberships</a>
          <a href="#">Trainer</a>
          <a href="#">Location</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-widest text-zinc-600">
          © 2026 Metro Flex Gym. Rajajinagar, Bengaluru.
        </p>
      </footer>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Brand Strategy",
      description:
        "Clarity that moves markets. A brand people instantly understand.",
      bullets: [
        "Positioning",
        "Messaging architecture",
        "Audience frameworks",
        "Competitor & category insight",
        "Brand archetypes",
        "Narrative & POV development",
        "Signature frameworks",
      ],
    },
    {
      id: "02",
      title: "Experience Design",
      description:
        "Digital experiences that feel crafted, intentional, and premium.",
      bullets: [
        "Website design (premium, immersive)",
        "Animations & interactions",
        "UX architecture",
        "Conversion design",
        "Responsive builds",
        "Motion language systems",
      ],
    },
    {
      id: "03",
      title: "Growth & Performance",
      description: "Predictable, compounding growth.",
      bullets: [
        "Paid media (Meta, Google, YouTube)",
        "Funnel systems",
        "CRO (conversion optimisation)",
        "Analytics setup",
        "Retention + lifecycle marketing",
      ],
    },
    {
      id: "04",
      title: "Creative Systems",
      description: "Content that scales without losing quality.",
      bullets: [
        "Content frameworks",
        "Video & motion creatives",
        "Brand asset libraries",
        "Social system design",
        "Storytelling & POV content",
        "AI-assisted creation systems",
      ],
    },
    {
      id: "05",
      title: "Digital Infrastructure",
      description:
        "A digital foundation that runs efficiently and grows with you.",
      bullets: [
        "Automation & AI integrations",
        "CRM setup",
        "Email marketing systems",
        "Digital workflows",
        "Custom dashboards",
        "Technical SEO foundations",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] text-white">
      {/* HERO */}
      <section className="px-6 md:px-12 pt-28 pb-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build systems.
          <br />
          Create clarity.
          <br />
          Drive momentum.
        </h1>

        <p className="text-slate-300 mt-6 max-w-2xl text-lg">
          We turn brands into high-performance digital machines—with strategy,
          design, and growth systems engineered for results.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-24 space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l border-slate-700 pl-6 md:pl-10"
          >
            <p className="text-cyan-400 font-semibold text-xl">{service.id}</p>

            <h2 className="text-2xl md:text-4xl mt-1 font-bold">
              {service.title}
            </h2>

            <p className="text-slate-300 mt-2 max-w-xl">{service.description}</p>

            <ul className="mt-4 space-y-2">
              {service.bullets.map((item, i) => (
                <li
                  key={i}
                  className="text-slate-300 flex items-start gap-2 text-base"
                >
                  <span className="mt-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#0f1626] to-[#0a0f1c] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Build Your Digital Ecosystem
          </h2>

          <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">
            Strategy, design, systems and growth—engineered for long-term
            advantage.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-xl transition"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-slate-500 hover:border-white rounded-xl transition"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

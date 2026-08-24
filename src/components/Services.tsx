"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    name: "Cut & Style",
    description:
      "Precision cuts finished to actually work with how you get ready in the morning.",
  },
  {
    name: "Color & Highlights",
    description:
      "Full color, balayage, and highlights, matched to what grows in — not just what's on the swatch.",
  },
  {
    name: "Blowout & Styling",
    description: "Wash, dry, done right — for a night out, an event, or just a Tuesday.",
  },
  {
    name: "Treatments",
    description:
      "Deep conditioning and scalp treatments for hair that's been through a lot this year.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[76px] bg-parchment px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-[640px]"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
            Services
          </p>
          <h2 className="mb-3 font-display text-4xl">What we do in the chair.</h2>
          <p className="text-taupe">
            A short list, kept short on purpose — ask your stylist about
            anything that isn&apos;t here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.name}
              className={`grid gap-2 border-t border-ink/10 py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-12 ${
                index === SERVICES.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="font-display text-xl">{service.name}</h3>
              <p className="max-w-[52ch] text-taupe">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
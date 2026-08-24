"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "Years in South Jersey" },
  { value: "4", label: "Stylists on staff" },
  { value: "1", label: "Locations" }
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-[76px] bg-parchment px-6 py-28 sm:px-12">
      <div className="mx-auto grid max-w-[1080px] gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
            About
          </p>
          <h2 className="mb-5 font-display text-4xl">
            A neighborhood salon, still growing.
          </h2>
          <p className="max-w-[55ch] text-ink">
            Salon Evolve opened decades ago and has stayed a true neighborhood
            shop ever since. Small enough to remember how you take your
            coffee, skilled enough to keep up with whatever you bring in from
            a magazine or a screen. Our stylists build relationships with
            clients, not just haircuts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-9 md:self-end"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <b className="block font-display text-3xl">{stat.value}</b>
              <span className="text-sm text-taupe">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
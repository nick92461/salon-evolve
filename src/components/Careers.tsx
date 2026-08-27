"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CareersSection() {
  return (
    <section id="careers" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
      <div className="mx-auto grid max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-[640px]"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
            Join the Team
          </p>
          <h2 className="mb-3 font-display text-4xl">Interested in joining the team? Click below to fill out an application</h2>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[1080px] mt-30 mb-14 flex justify-center"
        >
            <Link
                href="/careers"
                className="border border-ink/20 bg-brass px-8 py-3 font-semibold text-ink transition-colors hover:bg-brass-light"
            >
                Fill out an application
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
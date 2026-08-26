"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const STYLISTS = [
  { name: "Stephanie", specialty: "[specialty]", quote: "[a short quote from Stephanie]", image: "/stylists/stephanie_headshot.jpg" },
  { name: "Trish", specialty: "[specialty]", quote: "[a short quote from Trish]", image: "/stylists/trish_headshot.jpg" },
  { name: "Kim", specialty: "[specialty]", quote: "[a short quote from Kim]", image: "/stylists/kim_headshot.jpg" },
  { name: "Milissa", specialty: "[specialty]", quote: "[a short quote from Melissa]", image: "/stylists/melissa_headshot.jpg" },
];

export default function Stylists() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="stylists" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-[640px]"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
            The Team
          </p>
          <h2 className="mb-3 font-display text-4xl">Meet the stylists.</h2>
          <p className="text-taupe">
            A small team, a lot of experience. Call and ask for anyone below, or click to start booking an appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STYLISTS.map((stylist, index) => (
            <motion.div
            key={stylist.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            onClick={() => router.push(`/booking?stylist=${encodeURIComponent(stylist.name)}`)}
            className="border border-ink/10 bg-parchment p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
              {stylist.image ? (
                <div className="relative mb-5 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    priority
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-full bg-ink font-display text-3xl text-brass-light">
                  {stylist.name.charAt(0)}
                </div>
              )}

              <h3 className="font-display text-xl">{stylist.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.04em] text-brass">
                {stylist.specialty}
              </p>
              <p className="text-sm italic text-taupe">
                &ldquo;{stylist.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
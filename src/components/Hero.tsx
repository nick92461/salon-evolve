"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroPhoto from "../../public/hero/group_hero.jpg";

const PHONE_HREF = "tel:+16093909220";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center bg-ink pt-[76px] text-parchment"
    >

		<Image
			src={heroPhoto}
			alt=""
			priority
			className="absolute hidden md:block"
			style={{
			top: "50%",
			right: "10%",
			transform: "translateY(-50%)",
			maskImage:
				"linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
			WebkitMaskImage:
				"linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
			}}
		/>
	  =
      
      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-6 sm:px-12">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-light"
        >
          South Jersey &middot; Full-Service Salon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="mt-4 max-w-[14ch] font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Styled for who you&apos;re becoming.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.46 }}
          className="mt-6 max-w-[46ch] text-lg text-parchment/80"
        >
          Salon Evolve has been South Jersey&apos;s neighborhood salon for
          over two decades — a small team working closely with every client
          who sits in the chair.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.64 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={PHONE_HREF}
            className="rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brass-light"
          >
            Call to Book →
          </a>
          <a
            href="#stylists"
            className="rounded-sm border border-parchment/50 px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:border-parchment"
          >
            Meet the Stylists
          </a>
        </motion.div>
      </div>
    </header>
  );
}
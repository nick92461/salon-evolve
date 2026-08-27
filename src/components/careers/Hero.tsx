"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <header
            id="top"
            className="relative flex min-h-screen items-center bg-ink text-parchment"
        >
            <div className="relative z-10 mx-auto w-full max-w-[1080px] px-6 sm:px-12">
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.28 }}
                    className="mt-4 max-w-[14ch] font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
                >
                    Looking for a new job?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.46 }}
                    className="mt-6 max-w-[46ch] text-lg text-parchment/80"
                >
                    Salon Evolve is actively hiring stylist and salon support roles. Apply today to join our team!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="mt-6 flex flex-wrap gap-4"
                >
                    <a
                        href="#form"
                        className="rounded-sm border border-parchment/50 px-6 py-3 text-sm font-semibold bg-brass text-ink transition-colors hover:border-parchment"
                    >
                        Get started
                    </a>
                </motion.p>
            </div>
        </header>
    )
}
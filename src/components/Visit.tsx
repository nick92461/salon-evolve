"use client";

import { motion } from "framer-motion";


export default function Visit() {
    const ADDRESS = "96 NJ-50, Ocean View, NJ 08230";
    const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
    return (
    <section id="visit" className="scroll-mt-[76px] bg-ink px-6 py-28 sm:px-12">
        
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[640] text-center"
        >
            <p className="text-parchment">
                <span className="font-bold">Address: </span><a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">{ADDRESS}</a>
            </p>

            <p className="text-parchment">
                <span className="font-bold">Phone: </span><a href="tel:+16093909220">609-390-9220</a>
            </p>
        </motion.div>
        
    </section>
    );
}
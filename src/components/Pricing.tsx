"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PRICES = [
    { name: "Men's Cut", price: "$35", image: "/pricing/mens_cut.jpg" },
    { name: "Women's Cut and Blowout", price: "$45", image: "/pricing/womens_cut.jpg" },
    { name: "Child's Cut", price: "$20", image: "/pricing/childs_cut.jpg" },
    { name: "Balayage", price: "$200", image: "/pricing/balayage.jpg" },
    { name: "Blowout/Styling", price: "$50", image: "/pricing/blowout.jpg" },
    { name: "Special Occasion Updo", price: "$75", image: "/pricing/updo.jpg" },
    { name: "Partial Foil Highlights", price: "$150", image: "/pricing/partial_foil.jpg" },
    { name: "Full Foil Highlights", price: "$200", image: "/pricing/full_foil.jpg" },
    { name: "All Over Color", price: "$125", image: "/pricing/color.jpg" }
];

export default function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
            <div className="mx-auto max-w-[1080px]">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 max-w-[640px]"
                >
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                        Pricing
                    </p>

                    <h2 className="mb-3 font-display text-4xl">
                        Explore our competitive prices.
                    </h2>

                    <p className="text-taupe font-display">
                        Get the best value in South Jersey.
                    </p>
                </motion.div>
                    
                
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
                {PRICES.map((service, index) => (
                    <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        className="aspect-square bg-linen"
                    >
                        
                        {service.image ? (
                        <div className="relative h-[60%] w-[100%] overflow-hidden">
                            <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            className="object-cover"
                            />
                        </div>
                        
                        ) : (
                        <div className="mb-5 flex h-16 w-16 items-center justify-center bg-ink font-display text-3xl text-brass-light">
                            {service.name.charAt(0)}
                        </div>
                        )}
        
                        <h3 className="font-body text-lg">{service.name}</h3>
                        <p className="mb-3 text-xs font-body uppercase tracking-[0.04em] text-brass">
                            {service.price}
                        </p>
                        
                    </motion.div>
                    ))}
            </div>
        </section>
    );
}
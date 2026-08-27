"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
    { name: "Men's Cut", price: "$35", image: "/pricing/mens_cut.jpg" },
    { name: "Women's Cut and Blowout", price: "$45", image: "/pricing/womens_cut.jpg" },
    { name: "Child's Cut", price: "$20", image: "/pricing/childs_cut.jpg" },
    { name: "Balayage", price: "$200", image: "/pricing/balayage.jpg" },
    { name: "Blowout/Styling", price: "$50", image: "/pricing/blowout.jpg" },
    { name: "Special Occasion Updo", price: "$75", image: "/pricing/updo.jpg" },
    { name: "Partial Foil Highlights", price: "$150", image: "/pricing/partial_foil.jpg" },
    { name: "Full Foil Highlights", price: "$200", image: "/pricing/full_foil.jpg" },
    //{ name: "All Over Color", price: "$125", image: "/pricing/color.jpg" }
]

type ServicesProps = {
  selectedService: string | null;
  setSelectedService: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Services({ selectedService, setSelectedService }: ServicesProps) {
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
                    <h2 className="mb-3 font-display text-4xl">Which service would you like to book?</h2>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <input type="hidden" name="service" value={selectedService ?? ""} />
                    {SERVICES.map((service, index) => {
                        return (
                            <motion.div
                            key={service.name}
                            onClick={() => setSelectedService(service.name)}
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ y: -4 }}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className={`cursor-pointer border p-6 transition-shadow duration-300 hover:shadow-lg ${
                                service.name === selectedService
                                ? "-translate-y-1 border-brass shadow-lg"
                                : "border-ink/10"
                            }`}
                            animate={service.name === selectedService ? { y: -4} : { y: 0 }}
                            >
                                {service.image && (
                                    <div className="relative mb-5 h-32 w-32 overflow-hidden rounded-full">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            sizes="128px"
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                
                                <h3 className="font-display text-xl">{service.name}</h3>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.04em] text-brass">
                                    {service.price}
                                </p>
                            </motion.div>
                        );
                    })}
                        </div>
            </div>
        </section>
    )
}
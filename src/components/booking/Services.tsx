"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
    { name: "Single-Process Color", description: "All-Over Color, Root Color Touch-Up, Root Color Touch-Up + Foils" },
    { name: "Color Enhancement", description: "Gloss/Toner" },
    { name: "Highlights & Dimensional Color", description: "Partial Highlights, Full Highlights, Balayage" },
    { name: "Haircutting & Styling", description: "Haircut, Haircut w/ Blow Dry, Blow Dry w/ Style, Updo Styling" },
    { name: "Conditioning & Hair Treatments", description: "Deep Conditioning, Olaplex, Malibu, KeraTherapy" },
    { name: "Texturizing", description: "Permanent Wave" },
    { name: "Facial Waxing", description: "Eyebrow, Chin, Lip" },
    { name: "Consultation", description: "" },
    
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
                            className={`cursor-pointer bg-linen border p-6 transition-shadow duration-300 hover:shadow-lg ${
                                service.name === selectedService
                                ? "-translate-y-1 border-brass shadow-lg"
                                : "border-ink/10"
                            }`}
                            animate={service.name === selectedService ? { y: -4} : { y: 0 }}
                            >
                                <h3 className="font-display text-xl">{service.name}</h3>
                                <p className="mb-3 text-xs tracking-[0.04em] text-brass">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                        </div>
            </div>
        </section>
    )
}
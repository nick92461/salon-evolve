"use client";



import Image from "next/image";
import { motion } from "framer-motion";

type InfoProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
}


export default function Info({ name, setName, email, setEmail, phone, setPhone }: InfoProps) {

    return (
    <section id="info" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
        <div className="mx-auto max-w-[1080px]">
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-[640px]"
        >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                Request an appointment
            </p>
            <h2 className="mb-3 font-display text-4xl">Provide your contact info so we can reach you</h2>

        </motion.div>
        </div>
        <div className="mx-auto max-w-[1080px]">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="mb-14 max-w-[640px]"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="w-24 text-sm text-ink pr-2">
                        Name:
                    </label>
                    <input
                        id="name"
                        className="bg-parchment w-[400px]"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />

                    <label htmlFor="phone" className="w-24 text-sm text-ink pr-2">
                        Phone:
                    </label>
                    <input
                        id="phone"
                        className="bg-parchment w-[400px]"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                    />

                    <label htmlFor="email" className="w-24 text-sm text-ink pr-2">
                        Email:
                    </label>
                    <input
                        id="email"
                        className="bg-parchment w-[400px]"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
            </motion.div>
        </div>
    </section>
    );
}
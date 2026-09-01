"use client";

import { motion } from "framer-motion";



export default function Info() {

    return (
    <section id="info" className="scroll-mt-[76px] bg-ink px-6 py-28 sm:px-12">
        <div className="mx-auto max-w-[1080px]">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="mb-14 max-w-[640px] text-linen"
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
                    <label htmlFor="name" className="w-24 text-sm text-linen pr-2">
                        Name:
                    </label>
                    <input
                        id="name"
                        name="name"
                        className="bg-parchment w-full max-w-[400px]"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="phone" className="w-24 text-sm text-linen pr-2">
                        Phone:
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        className="bg-parchment w-full max-w-[400px]"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                    />

                    <label htmlFor="email" className="w-24 text-sm text-linen pr-2">
                        Email:
                    </label>
                    <input
                        id="email"
                        name="email"
                        className="bg-parchment w-full max-w-[400px]"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        required
                    />
                    <p className="mt-6 max-w-[46ch] text-md text-parchment/80">After your request is submitted, a team member will reach out to you to confirm appointment details.</p>
                </div>
                
            </motion.div>
        </div>
    </section>
    );
}
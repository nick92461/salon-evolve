"use client";

import { motion } from "framer-motion";

export default function Time() {
    return (
    <section id="time" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
        <div className="mx-auto max-w-[1080px]">
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-[640px]"
        >
            
            <h2 className="mb-3 font-display text-4xl">Select a date and time to request.</h2>

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
                    <label htmlFor="date" className="text-sm text-ink">
                        Date:
                    </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className="bg-parchment max-w-[200px]"
                        required
                    />

                    <label htmlFor="time" className="text-sm text-ink">
                        Time:
                    </label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        step="1800"
                        className="bg-parchment w-full max-w-[200px]"
                        required
                    />
                </div>
                
            </motion.div>    
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="mt-30 mb-14 flex justify-center"
            >
                <button
                    type="submit"
                    className="border border-ink/20 bg-brass px-8 py-3 font-semibold text-ink transition-colors hover:bg-brass-light"
                >
                    Submit Request
                </button>
            </motion.div>
        </div>
    </section>
    );
}
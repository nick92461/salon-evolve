"use client";

import { motion } from "framer-motion";

type TimeProps = {
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
}

export default function Time({ time, setTime, date, setDate }: TimeProps) {
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
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-parchment w-[200px]"
                    />

                    <label htmlFor="time" className="text-sm text-ink">
                        Time:
                    </label>
                    <input
                        id="time"
                        type="time"
                        step="1800"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="bg-parchment w-[200px]"
                    />
                </div>
            </motion.div>
        </div>
    </section>
    );
}
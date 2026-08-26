"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type TimeProps = {
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    email: string;
    phone: string;
    selectedStylist: string | null;
}



export default function Time({ time, setTime, date, setDate, name, email, phone, selectedStylist, }: TimeProps) {
    function handleSubmit() {
        window.alert(`${name} is requesting an appointment with ${selectedStylist} on ${date} at ${time}.\nEmail: ${email}\nPhone: ${phone}`)
    }

    const rosyUrl = "https://online.rosysalonsoftware.com/onlineBooking?id=38537";

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
            <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-[1080px] mt-30 mb-14 flex justify-center"
                >
                    <button
                        onClick={handleSubmit}
                        className="border border-ink/20 bg-brass px-8 py-3 font-semibold text-ink transition-colors hover:bg-brass-light"
                    >
                        Submit Request
                    </button>
                </motion.div>
                
        </div>
    </section>
    );
}
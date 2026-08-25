"use client";

import { motion } from "framer-motion";

type SubmitProps = {
    name: string;
    email: string;
    phone: string;
    stylist: string | null;
    date: string;
    time: string;
}

export default function Submit({ name, email, phone, stylist, date, time }: SubmitProps) {
    function handleSubmit() {
        window.alert(`${name} is requesting an appointment with ${stylist} on ${date} at ${time}.\nEmail: ${email}\nPhone: ${phone}`)
    }    
    return (
        <section id="submit" className="scroll-mt-[76px] bg-parchment px-6 py-28 sm:px-12">
            <div className="mx-auto max-w-[1080px]">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 max-w-[640px]"
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
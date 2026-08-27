"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <section id="form" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
            <div className="mx-auto max-w-[1080px]">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 max-w-[640px] text-linen"
                >
                    
                    <h2 className="mb-3 font-display text-4xl text-ink">Provide your contact info and resume</h2>

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
                    <div className="flex flex-col gap-2 text-ink">
                        <label htmlFor="name" className="w-24 text-sm pr-2">
                            Name:
                        </label>
                        <input
                            id="name"
                            className="bg-parchment w-full max-w-[400px]"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />

                        <label htmlFor="phone" className="w-24 text-sm pr-2">
                            Phone:
                        </label>
                        <input
                            id="phone"
                            className="bg-parchment w-full max-w-[400px]"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                        />

                        <label htmlFor="email" className="w-24 text-sm pr-2">
                            Email:
                        </label>
                        <input
                            id="email"
                            className="bg-parchment w-full max-w-[400px]"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        <label htmlFor="resume" className="w-24 text-sm pr-2">
                            Resume:
                        </label>
                        <input
                            id="resume"
                            type="file"
                            name="resume"
                            accept=".pdf"
                            className="bg-parchment w-full max-w-[400px]"
                        />
                    </div>
                </motion.div>
        </div>
        </section>
    )
}
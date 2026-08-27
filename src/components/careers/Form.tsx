"use client";

import { motion } from "framer-motion";

export default function Form() {
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await fetch("/api/careers", {
            method: "POST",
            body: formData
        })
    }

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
                <motion.form
                    onSubmit={handleSubmit}
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
                            name="name"
                            className="bg-parchment w-full max-w-[400px]"
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your name"
                            required
                        />

                        <label htmlFor="phone" className="w-24 text-sm pr-2">
                            Phone:
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            className="bg-parchment w-full max-w-[400px]"
                            type="tel"
                            autoComplete="tel"
                            placeholder="Enter your phone number"
                            required
                        />

                        <label htmlFor="email" className="w-24 text-sm pr-2">
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
                        <label htmlFor="resume" className="w-24 text-sm pr-2">
                            Resume:
                        </label>
                        <input
                            id="resume"
                            name="resume"
                            type="file"
                            accept=".pdf"
                            className="bg-parchment w-full max-w-[400px]"
                            required
                        />
                        <button
                            type="submit"
                            className="mt-10 border border-ink/20 bg-brass px-8 py-3 font-semibold text-ink transition-colors hover:bg-brass-light"
                        >
                            Submit Application
                        </button>
                    </div>
                </motion.form>
        </div>
        </section>
    )
}
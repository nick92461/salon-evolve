"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
    const [resumeFileName, setResumeFileName] = useState<string | null>(null);

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/careers", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            window.alert("Your application has been submitted!");
            form.reset();
            setResumeFileName(null);
        }
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
                    
                >
                    <div className="flex flex-col gap-2 text-ink mb-14 max-w-[640px]">
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
                        <label 
                            htmlFor="resume" 
                            className="block w-full max-w-[400px] cursor-pointer border border-dashed border-ink/30 bg-parchment px-4 py-6 text-center text-sm text-ink trainsition-colors hover:border-brass hover:bg-brass-light"
                        >
                            {resumeFileName ?? "Click to upload your resume (PDF)"}
                        </label>
                        <input
                            id="resume"
                            name="resume"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => setResumeFileName(e.target.files?.[0]?.name ?? null)}
                            className="sr-only"
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            tabIndex={-1}
                            autoComplete="off"
                            className="absolute left-[-9999px]"
                            aria-hidden="true"
                        />
                        
                        
                    </div>
                    <input
                        type="checkbox"
                        id="privacyPolicy"
                        name="privacyPolicy"
                        required
                        className="mt-1"
                    />
                    <label htmlFor="privacyPolicy" className="text-sm text-ink">
                        I consent to Salon Evolve team members using the information I provided to contact me about my application.
                    </label>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="mx-auto max-w-[1080px] mt-30 mb-14 flex justify-center"
                    >
                        <button
                            type="submit"
                            className="border border-ink/20 bg-brass px-8 py-3 font-semibold text-ink transition-colors hover:bg-brass-light"
                        >
                            Submit Application
                        </button>
                    </motion.div>
                </motion.form>
                
            </div>
        </section>
    )
}
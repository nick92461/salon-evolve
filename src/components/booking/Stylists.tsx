"use client";


import Image from "next/image";
import { motion } from "framer-motion";

const STYLISTS = [
  { name: "Stephanie", specialty: "[specialty]", quote: "[a short quote from Stephanie]", image: "/stylists/stephanie_headshot.jpg" },
  { name: "Trish", specialty: "[specialty]", quote: "[a short quote from Trish]", image: "/stylists/trish_headshot.jpg" },
  { name: "Kim", specialty: "[specialty]", quote: "[a short quote from Kim]", image: "/stylists/kim_headshot.jpg" },
  { name: "Milissa", specialty: "[specialty]", quote: "[a short quote from Melissa]", image: "/stylists/melissa_headshot.jpg" },
];

type StylistsProps = {
  selectedStylist: string | null;
  setSelectedStylist: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Stylists({ selectedStylist, setSelectedStylist }: StylistsProps) {


  return (
    <section id="stylists" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-[640px]"
        >
          <h2 className="mb-3 font-display text-4xl">Pick a stylist</h2>

        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <input type="hidden" name="stylist" value={selectedStylist ?? ""} />

          {STYLISTS.map((stylist, index) => {
            return (
              <motion.div
                key={stylist.name}
                onClick={() => setSelectedStylist(stylist.name)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`cursor-pointer border p-6 duration-300 hover:shadow-lg ${
                  stylist.name === selectedStylist
                    ? "border-brass shadow-lg"
                    : "border-ink/10"
                }`}
                animate={stylist.name === selectedStylist ? { y: -4} : { y: 0 }}
              >
                {stylist.image && (
                  <div className="relative mb-5 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                )}

                <h3 className="font-display text-xl">{stylist.name}</h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.04em] text-brass">
                  {stylist.specialty}
                </p>
                <p className="text-sm italic text-taupe">
                  {stylist.quote}
                </p>
              </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
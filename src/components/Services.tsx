"use client";

import { motion } from "framer-motion";
import { useState, useRef, useLayoutEffect } from "react";

type Service = {
	name: string;
	price: string;
	description?: string;
	footnote?: string;
};

type Category = {
	name: string;
	note?: string;
	services: Service[];
};

const CATEGORIES: Category[] = [
	{
		name: "Single-Process Color",
		services: [
			{ name: "All-Over Color", price: "Starting at $120", description: "A deposit-only color service that adds richness, beautiful tone, and shine to natural, brown, or highlighted hair." },
			{ name: "Root Color Touch-Up", price: "Starting at $70", description: "Covers new growth at the roots to maintain your existing hair color and provide seamless coverage." },
			{ name: "Root Color Touch-Up + Foils", price: "Starting at $125", description: "Includes a root color touch-up with up to 15 strategically placed foils to add brightness and dimension." },
		],
	},
	{
		name: "Color Enhancements",
		services: [
			{ name: "Gloss/Toner", price: "Starting at $20", description: "Refreshes faded color, enhances tone, and adds richness and beautiful shine to your hair.", footnote: "Consider adding a gloss to your root color touch-up to refresh and revive your ends." },
		],
	},
	{
		name: "Highlighting & Dimensional Color",
		services: [
			{ name: "Partial Highlights", price: "Starting at $120", description: "Highlights or lowlights placed throughout selected areas of the top, sides, and crown for brightness and dimension." },
			{ name: "Full Highlights", price: "Starting at $140", description: "Highlights or lowlights placed throughout the entire head for brightness and dimension." },
			{ name: "Balayage", price: "Starting at $180", description: "A hand-painted highlighting technique that creates natural-looking brightness and dimension." },
		],
	},
	{
		name: "Haircutting & Styling",
		services: [
			{ name: "Haircut Only", price: "Starting at $45", description: "Begins with a shampoo and conditioning service, followed by a personalized haircut." },
			{ name: "Haircut & Blow Dry", price: "Starting at $50", description: "Begins with a shampoo and conditioning service, followed by a personalized haircut, blow dry, and finished style." },
			{ name: "Blow Dry & Style", price: "Starting at $40", description: "Begins with a shampoo and conditioning service, followed by a professional blow dry and finished style." },
			{ name: "Updo Styling", price: "Starting at $85", description: "An elegant, customized style for special occasions and events.", footnote: "Please arrive with clean, dry hair." },
		],
	},
	{
		name: "Conditioning & Hair Treatments",
		note: "Treatments may be added to a chemical service or booked with a haircut.",
		services: [
			{ name: "Deep Conditioning Treatment", price: "Starting at $20", description: "A nourishing treatment that helps restore moisture and softness to the hair." },
			{ name: "Olaplex Treatment", price: "Starting at $25", description: "A bond-building treatment designed to help strengthen and protect the hair." },
			{ name: "Malibu Treatment", price: "Starting at $20", description: "A customized treatment designed to help remove mineral and product buildup and restore the hair's natural beauty." },
			{ name: "KeraTherapy Treatment", price: "Starting at $65", description: "A smoothing treatment designed to reduce frizz, improve manageability, and leave the hair smoother and healthier-looking. Results can last up to one month." },
		],
	},
	{
		name: "Texturizing Services",
		services: [
			{ name: "Permanent Wave", price: "Starting at $100", description: "A customized chemical service that creates lasting curls, waves, or added texture." },
		],
	},
	{
		name: "Facial Waxing",
		services: [
			{ name: "Eyebrow Wax", price: "$14" },
			{ name: "Chin Wax", price: "$12" },
			{ name: "Lip Wax", price: "$12" },
		],
	},
];

export default function Services() {
	const [expanded, setExpanded] = useState(false);
	const [isCollapsing, setIsCollapsing] = useState(false);
	const [frozenRect, setFrozenRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
	const contentRef = useRef<HTMLDivElement>(null);
	const prevIsCollapsing = useRef(false);

	useLayoutEffect(() => {
		if (prevIsCollapsing.current && !isCollapsing) {
			window.scrollBy({ top: -(frozenRect.height - 900), behavior: "instant" });
		}
		prevIsCollapsing.current = isCollapsing;
	}, [isCollapsing, frozenRect.height]);

	function handleCollapse() {
		if (!contentRef.current) return;
		const rect = contentRef.current.getBoundingClientRect();
		setFrozenRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
		setIsCollapsing(true);
	}

	const categoryList = CATEGORIES.map((category, categoryIndex) => (
		<motion.div
			key={category.name}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
			className="mb-12"
		>
			<h3 className="mb-2 font-display text-2xl">{category.name}</h3>
			<div className="mb-6 h-px bg-ink/10" />

			{category.note && (
				<p className="mb-4 -mt-2 text-sm italic text-taupe">{category.note}</p>
			)}

			{category.services.map((service, serviceIndex) => (
				<div
					key={service.name}
					className={`py-5 ${
						serviceIndex === category.services.length - 1 ? "" : "border-b border-ink/10"
					}`}
				>
					<div className="flex items-baseline justify-between gap-4">
						<h4 className="font-semibold">{service.name}</h4>
						<span className="whitespace-nowrap font-display text-brass">{service.price}</span>
					</div>

					{service.description && (
						<p className="mt-1 max-w-[58ch] text-sm text-taupe">{service.description}</p>
					)}
					{service.footnote && (
						<p className="mt-2 text-xs italic text-taupe">{service.footnote}</p>
					)}
				</div>
			))}
		</motion.div>
	));

	return (
		<section id="services" className="scroll-mt-[76px] bg-parchment px-6 py-28 sm:px-12">
			<div className="mx-auto max-w-[1080px]">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
					className="mb-14 max-w-[640px]"
				>
					<p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
						Service menu
					</p>
					<h2 className="mb-3 font-display text-4xl">Services & pricing</h2>
				</motion.div>

				<div className="mb-14 max-w-[640px] border-l-2 border-brass bg-white p-5 text-sm text-taupe">
					When requesting a chemical service, please also schedule a finishing service, such as a Blow Dry &amp; Style or Haircut &amp; Blow Dry.
				</div>

				{isCollapsing ? (
					<>
						<div style={{ height: frozenRect.height }} />
						<motion.div
							style={{
								position: "fixed",
								top: frozenRect.top,
								left: frozenRect.left,
								width: frozenRect.width,
								overflow: "hidden",
							}}
							initial={{ height: frozenRect.height }}
							animate={{ height: 900 }}
							transition={{ duration: 0.7, ease: "easeInOut" }}
							onAnimationComplete={() => {
								setIsCollapsing(false);
								setExpanded(false);
							}}
							className="bg-parchment"
						>
							{categoryList}
						</motion.div>
					</>
				) : (
					<div
						ref={contentRef}
						className={`relative overflow-hidden ${expanded ? "" : "max-h-[900px]"}`}
					>
						{categoryList}

						{!expanded && (
							<div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center bg-gradient-to-t from-parchment via-parchment/90 to-transparent pb-6">
								<button
									onClick={() => setExpanded(true)}
									aria-label="Show full menu"
									className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 bg-parchment text-xl text-ink shadow-md transition-colors hover:bg-brass-light"
								>
									↓
								</button>
							</div>
						)}

						{expanded && (
							<div className="flex justify-center pt-4">
								<button
									onClick={handleCollapse}
									aria-label="Collapse menu"
									className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 bg-parchment text-xl text-ink shadow-md transition-colors hover:bg-brass-light"
								>
									↑
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
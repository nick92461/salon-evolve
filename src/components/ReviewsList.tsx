"use client";

import { motion } from "framer-motion";

type GoogleReview = {
	author_name: string;
	rating: number;
	text: string;
};

export default function ReviewsList({ reviews }: { reviews: GoogleReview[] }) {
	return (
		<section id="reviews" className="scroll-mt-[76px] bg-linen px-6 py-28 sm:px-12">
			<div className="mx-auto max-w-[1080px]">
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7 }}
					className="mb-14 max-w-[640px]"
				>
					<p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brass">Reviews</p>
					<h2 className="mb-3 font-display text-4xl">See what our customers think</h2>
				</motion.div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{reviews.map((review, index) => (
						<motion.div
							key={review.author_name + index}
							initial={{ opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6, delay: index * 0.08 }}
							className="border border-ink/10 p-6"
						>
							<p className="mb-3 text-brass">{"★".repeat(review.rating)}</p>
							<p className="mb-3 text-sm text-taupe">{review.text}</p>
							<p className="text-xs font-semibold uppercase tracking-[0.04em] text-ink">{review.author_name}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
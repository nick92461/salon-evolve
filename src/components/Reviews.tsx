import ReviewsList from "@/components/ReviewsList";

type GoogleReview = {
	author_name: string;
	rating: number;
	text: string;
};

async function getReviews(): Promise<GoogleReview[]> {
	const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_PLACES_API_KEY}`;
	const response = await fetch(url, { next: { revalidate: 86400 } });
	const data = await response.json();
    const reviews: GoogleReview[] = data.result?.reviews ?? [];
	console.log("Places API response:", JSON.stringify(data));
	return reviews.filter((review) => review.author_name !== "Kalli Lamb");
}

export default async function Reviews() {
	const reviews = await getReviews();
	return <ReviewsList reviews={reviews} />;
}
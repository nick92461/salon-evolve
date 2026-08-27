import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MAX_FIELD_LENGTH = 200;

function formatTime(time24: string) {
	const [hours, minutes] = time24.split(":");
	const date = new Date();
	date.setHours(Number(hours), Number(minutes));
	return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });
}

export async function POST(request: Request) {
	const formData = await request.formData();

	const name = formData.get("name") as string;
	const phone = formData.get("phone") as string;
	const email = formData.get("email") as string;
	const date = formData.get("date") as string;
	const time = formData.get("time") as string;
	const stylist = formData.get("stylist") as string;
	const service = formData.get("service") as string;

	if (!name || !phone || !email || !date || !time) {
		return Response.json({ error: "Missing required fields" }, { status: 400 });
	}

	if (name.length > MAX_FIELD_LENGTH || phone.length > MAX_FIELD_LENGTH || email.length > MAX_FIELD_LENGTH) {
		return Response.json({ error: "Field too long" }, { status: 400 });
	}

	const stylistDisplay = stylist || "no preference";
	const serviceDisplay = service || "not specified";
	const timeDisplay = formatTime(time);

	console.log("Appointment request:", { name, phone, email, date, timeDisplay, stylistDisplay, serviceDisplay });

	await resend.emails.send({
		from: "Salon Evolve Booking <onboarding@resend.dev>",
		to: "nickbottorf1@gmail.com",
		subject: `New appointment request from ${name}`,
		text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nTime: ${timeDisplay}\nStylist: ${stylistDisplay}\nService: ${serviceDisplay}`,
	});

	return Response.json({ ok: true });
}
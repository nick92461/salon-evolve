import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FIELD_LENGTH = 200;


export async function POST(request: Request) {
    const formData = await request.formData();

    if (formData.get("company")) {
        return Response.json({ ok: true });
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const resume = formData.get("resume") as File;

    if (!name || !phone || !email || !resume) {
        return Response.json({ error: "Missing required fields" }, { status: 400 };)
    }

    if (name.length > MAX_FIELD_LENGTH || phone.length > MAX_FIELD_LENGTH || email.length > MAX_FIELD_LENGTH) {
		return Response.json({ error: "Field too long" }, { status: 400 });
	}

	if (resume.type !== "application/pdf") {
		return Response.json({ error: "File must be a PDF" }, { status: 400 });
	}

	if (resume.size > MAX_FILE_SIZE) {
		return Response.json({ error: "File too large (max 5MB)" }, { status: 400 });
	}

    console.log("Careers submission:", { name, phone, email, resumeName: resume.name, resumeSize: resume.size });

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await resend.emails.send({
        from: "Salon Evolve Careers <onboarding@resend.dev>",
        to: "nickbottorf1@gmail.com",
        subject: `New job application from ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`,
        attachments: [
            {
                filename: resume.name,
                content: resumeBuffer,
            },
        ],
    });

    return Response.json({ ok: true });
}
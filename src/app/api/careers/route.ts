import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const resume = formData.get("resume") as File;

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
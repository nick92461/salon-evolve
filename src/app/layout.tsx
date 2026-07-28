import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
    title: "Salon Evolve | South Jersey Hair Salon",
    description: "Salon Evolve is a full-service hair salon in South Jersey. We offer cuts, color, and styling from a small team that's been in the community for decades.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="antialiased">
            <body className="min-h-full flex flex-col">
                <Nav />
                {children}
            </body>
        </html>
    );
}



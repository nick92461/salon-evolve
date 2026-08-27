"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Stylists from "@/components/booking/Stylists";
import Info from "@/components/booking/Info";
import Time from "@/components/booking/Time";
import Services from "@/components/booking/Services";

function BookingContent() {
    const searchParams = useSearchParams();
    const stylistFromUrl = searchParams.get("stylist");

    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedStylist, setSelectedStylist] = useState<string | null>(stylistFromUrl);


    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/booking", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            window.alert("Your appointment request has been submitted!");
            form.reset();
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Info />
            <Stylists selectedStylist={selectedStylist} setSelectedStylist={setSelectedStylist} />
            <Services selectedService={selectedService} setSelectedService={setSelectedService} />
            <Time />
            
        </form>
        
    );
}

export default function Booking() {
    return (
        <Suspense fallback={null}>
            <BookingContent />
        </Suspense>
    )
}
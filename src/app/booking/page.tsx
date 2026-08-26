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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedStylist, setSelectedStylist] = useState<string | null>(stylistFromUrl);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    return (
        <>
            <Info name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
            <Stylists selectedStylist={selectedStylist} setSelectedStylist={setSelectedStylist} />
            <Services selectedService={selectedService} setSelectedService={setSelectedService} />
            <Time date={date} setDate={setDate} time={time} setTime={setTime} name={name} email={email} phone={phone} selectedStylist={selectedStylist} selectedService={selectedService} />
        </>
        
    );
}

export default function Booking() {
    return (
        <Suspense fallback={null}>
            <BookingContent />
        </Suspense>
    )
}
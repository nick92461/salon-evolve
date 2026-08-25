"use client";

import { useState } from "react";

import Stylists from "@/components/booking/Stylists";
import Info from "@/components/booking/Info";
import Time from "@/components/booking/Time";
import Submit from "@/components/booking/Submit";

export default function Booking() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedStylist, setSelectedStylist] = useState<string | null>(null);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    return (
        <>
            <Info name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
            <Stylists selectedStylist={selectedStylist} setSelectedStylist={setSelectedStylist} />
            <Time date={date} setDate={setDate} time={time} setTime={setTime} />
            <Submit name={name} email={email} phone={phone} stylist={selectedStylist} date={date} time={time} />
        </>
        
    );
}
'use client';
import { useViewport } from "@/contexts/ViewportContext";
import Image from "next/image";

export default function OptionalSection() {
    const { width } = useViewport();
    console.log("OptionalSection width:", width);
    return (
        <section className="w-full h-auto">
            <Image
                src="/optionalSection/bannerdv.png"
                alt="Optional Section Banner"
                width={width}
                height={width / 4.8}
                className="w-full h-full object-cover"
            />
        </section>
    );
}
'use client';
import PageImageSlider from "@/components/PageImageSlider";
import { useViewport } from "@/contexts/ViewportContext";

export default function HomeSection() {


    return (
        <section className={`w-full snap-start h-screen relative overflow-hidden `}>

            <PageImageSlider />
        </section>
    );
}


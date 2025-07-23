'use client';
import PageImageSlider from "@/components/PageImageSlider";
import { useViewport } from "@/contexts/ViewportContext";

export default function HomeSection() {

    const { isMobile } = useViewport();

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden ${isMobile ? 'bg-[url("/banner-home.png")] bg-cover bg-center' : ''}`}>
            <PageImageSlider />
        </section>
    );
}


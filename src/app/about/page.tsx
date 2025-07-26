import Image from "next/image";
import FifthSection from "./components/FifthSection";
import FirstSection from "./components/FirstSection";
import FourthSection from "./components/FourthSection";
import InforSection from "./components/InforSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function AboutPage() {
    return (
        <>
            <FirstSection />
            <InforSection />
            <div className="w-full min-h-screen bg-cover bg-center relative">
                <Image
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
                    src="/introduce/trongdongcomap.png"
                    alt="Background Image"
                    fill
                    priority
                />
                <SecondSection />
                <ThirdSection />
            </div>
            <FourthSection />
            <FifthSection />
        </>
    );
}
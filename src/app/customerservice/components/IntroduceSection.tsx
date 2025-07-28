'use client';
import Image from "next/image";


const services = [
    { icon: "/customerservice/icon/vstheogio.png", target: "#section1" },
    { icon: "/customerservice/icon/tongvs.png", target: "#section2" },
    { icon: "/customerservice/icon/vsmaygiat.png", target: "#section3" },
    { icon: "/customerservice/icon/vsmaylanh.png", target: "#section4" },
    { icon: "/customerservice/icon/vsmaynonglanh.png", target: "#section5" },
    { icon: "/customerservice/icon/dichvukhac.png", target: "#section6" },
];

export default function IntroduceSection() {
    return (
        <section className="w-full h-screen flex items-center justify-center relative bg-gray-50 px-2 py-8 md:px-8 md:py-12">
            <Image className="absolute inset-0 w-full h-full object-cover"
                src="/customerservice/bannerdvcn.png"
                alt="Background Image"
                fill priority
            />
            <div className="relative z-10 flex flex-col w-full h-[600px] max-w-4xl mx-auto">
                {/* Top row - 70% height */}
                <div className="flex-1 basis-[70%] flex items-center justify-center"></div>
                {/* Bottom row - 30% height */}
                <div className="flex-1 basis-[30%] flex items-center justify-center">
                    <div className="flex w-full  justify-between items-center">
                        {services.map(({ icon, target }) => (
                            <button
                                key={target}
                                onClick={() => {
                                    const el = document.querySelector(target);
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="flex flex-col items-center focus:outline-none transition-transform duration-200 hover:scale-110 cursor-pointer"
                                type="button"
                            >
                                <Image src={icon} alt={target} width={120} height={100} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';
import Image from "next/image";
import { useViewport } from "@/contexts/ViewportContext";

export default function FourthSection() {
    const { isMobile } = useViewport();

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden bg-[#FFF3CC]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row relative">
                {/* Left: Heading and speech bubble */}
                <div className="flex-1 flex flex-col justify-center h-full pt-10 md:pt-0">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-8 leading-tight text-left">
                        Tại sao nên chọn<br />SkyHome?
                    </h2>
                    <div className="hidden md:block relative mb-8">
                        <div className="bg-[#FADB2F] rounded-xl px-8 py-8 min-w-[320px] min-h-[90px] max-w-[400px] text-lg font-semibold text-sky-900 relative" style={{ marginLeft: '120px' }}>
                            <span className="">Lý do nổi bật dành cho bạn!</span>
                            <span className="absolute left-[-32px] top-10 w-0 h-0 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent border-r-[32px] border-r-[#FADB2F]"></span>
                        </div>
                    </div>
                </div>

                {/* Center: Staff image */}
                <div className="flex-1 flex items-center justify-center relative h-full min-h-[400px]">
                    <Image
                        src="/about/talk.png"
                        alt="SkyHome Staff"
                        width={260}
                        height={480}
                        className="object-contain z-10 drop-shadow-xl"
                        priority
                    />
                    {/* Speech bubble for mobile */}
                    <div className="block md:hidden absolute right-0 top-0">
                        <div className="bg-[#FADB2F] rounded-xl px-6 py-4 min-w-[180px] min-h-[60px] max-w-[220px] text-base font-semibold text-sky-900 relative">
                            <span>Lý do nổi bật dành cho bạn!</span>
                            <span className="absolute left-[-20px] top-6 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[20px] border-r-[#FADB2F]"></span>
                        </div>
                    </div>
                </div>

                {/* Right: Info boxes */}
                <div className="flex-1 flex flex-col justify-center items-end h-full gap-8 pr-2 md:pr-8">
                    <div className="flex gap-8 mb-4">
                        <div className="w-[140px] h-[90px] bg-gray-100 rounded-lg border border-gray-300"></div>
                        <div className="w-[140px] h-[90px] bg-gray-100 rounded-lg border border-gray-300"></div>
                    </div>
                    <div className="flex gap-8">
                        <div className="w-[140px] h-[90px] bg-gray-100 rounded-lg border border-gray-300"></div>
                        <div className="w-[140px] h-[90px] bg-gray-100 rounded-lg border border-gray-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
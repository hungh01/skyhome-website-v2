'use client';
import Image from "next/image";
import { useViewport } from "@/contexts/ViewportContext";
import { useState } from "react";

const statusDisplay = [
    'Text1',
    'Text2',
    'Text3',
    'Text4'
]

export default function FourthSection() {

    const [status, setStatus] = useState(0);
    const { isMobile } = useViewport();

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden bg-[#FFF3CC]`}>
            <div className="min-h-screen bg-[#fff3d5] pt-20 flex flex-col items-center relative cursor-pointer">
                <h1 className="text-4xl md:text-5xl font-bold text-[#243c5a] text-left w-full max-w-6xl">
                    Tại sao nên chọn <br /> <span className="text-[#243c5a]">SkyHome?</span>
                </h1>

                {/* Ô lời thoại */}
                <div className="absolute top-10 right-90 bg-[#fddb00] rounded-lg px-6 py-4 w-[350px] min-h-[150px] text-white shadow-md flex items-center justify-center">
                    <p className="text-sky-900 text-lg font-semibold">{statusDisplay[status]}</p>
                    <div
                        className="absolute"
                        style={{
                            left: 40,
                            bottom: -22,
                            width: 0,
                            height: 0,
                            borderLeft: '24px solid transparent',
                            borderRight: '24px solid transparent',
                            borderTop: '24px solid #fddb00',
                            borderRadius: '0 0 18px 18px'
                        }}
                    />
                </div>

                {/* Hình ảnh */}
                <div className="relative z-10 my-12 pt-12 cursor-pointer">
                    <Image
                        src="/about/talk.png"
                        alt="SkyHome staff"
                        width={250}
                        height={500}
                        priority
                    />
                </div>

                {/* 4 ô thông tin xung quanh */}
                <div
                    className="absolute left-50 top-[30%] w-[240px] h-[120px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(0)}
                >
                    <p className="font-bold text-sky-900">Tầm nhìn</p>
                </div>
                <div
                    className="absolute left-70 bottom-[25%] w-[240px] h-[120px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(1)}
                >
                    <p className="font-bold text-sky-900">Sứ mệnh </p>
                </div>
                <div
                    className="absolute right-50 top-[30%] w-[240px] h-[120px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(2)}
                >
                    <p className="font-bold text-sky-900">Mục tiêu ngắn hạn </p>
                </div>
                <div
                    className="absolute right-70 bottom-[25%] w-[240px] h-[120px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(3)}
                >
                    <p className="font-bold text-sky-900">Mục tiêu dài hạn </p>
                </div>
            </div>

        </section>
    );
}
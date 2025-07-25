'use client';
import Image from "next/image";
import { useViewport } from "@/contexts/ViewportContext";
import { useState } from "react";
import { useRef, useEffect } from "react";

const statusDisplay = [

    'Chỉ với vài thao tác trên điện thoại, bạn có thể chọn thời gian, địa điểm và loại dịch vụ phù hợp. Dù là cuối tuần hay ngày thường, SkyHome luôn sẵn sàng phục vụ.',
    'Nhân viên được tuyển chọn kỹ lưỡng, đào tạo bài bản và luôn phục vụ với thái độ thân thiện, nghiêm túc. Đảm bảo không gian nhà bạn luôn sạch sẽ, gọn gàng như ý.',
    'Từ dọn nhà theo giờ, vệ sinh máy lạnh, giặt nệm, dọn sau tiệc đến vệ sinh khu vực thú cưng... SkyHome đều có giải pháp phù hợp cho từng gia đình.',
    'Giá cả hiển thị trước khi đặt dịch vụ, không phát sinh phụ phí bất ngờ. Bạn hoàn toàn an tâm về chất lượng và độ tin cậy khi chọn SkyHome.',
    'Ứng dụng tiện ích SkyHome'
]

export default function FourthSection() {

    const [status, setStatus] = useState(4);
    const { width } = useViewport();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [centerPosition, setCenterPosition] = useState({ top: 0, Left: 0 });
    let percentItemSize = 1;

    if (width < 600) {
        percentItemSize = 0.5;
    } else if (width < 1024) {
        percentItemSize = 0.75;
    }

    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current.closest('section');
            if (section) {
                const height = section.getBoundingClientRect().height;
                setCenterPosition({
                    top: height / 2,
                    Left: width / 2
                });
            }
        }
    }, [width]);

    return (
        <section ref={sectionRef} className={`w-full 'h-auto' relative overflow-hidden bg-[url('/about/whychoose/background.png')] bg-cover bg-center pt-10`}>
            <div className="min-h-screen flex flex-col items-center relative cursor-pointer">
                <div className="absolute  w-full"
                    style={{
                        top: `${centerPosition.top / 10}px`,
                        left: `${centerPosition.Left / 4}px`,
                    }}
                >
                    <Image
                        src="/about/whychoose/text.png"
                        alt="SkyHome staff"
                        width={310 * percentItemSize}
                        height={200 * percentItemSize}
                        priority
                    />
                </div>

                {/* Ô lời thoại */}
                <div
                    className={`absolute rounded-lg px-1 py-4 text-white flex items-center justify-center`}
                    style={{
                        width: `${percentItemSize * 350}px`,
                        height: `${percentItemSize * 220}px`,
                        top: `${centerPosition.top / 20}px`,
                        left: `${centerPosition.Left * (1.2)}px`,
                    }}
                >
                    <p className={`text-sky-900 ${status === 4 ? 'font-bold' : ''} z-10 ${percentItemSize === 1 ? 'pb-4 pr-4 pl-4' : 'pb-4 pr-2 pl-2'} text-center`}
                        style={{
                            fontSize: `${status === 4 ? percentItemSize * 30 : percentItemSize * 19}px`
                        }}
                    >
                        {statusDisplay[status]}
                    </p>
                    <div className="absolute inset-0 w-full h-full z-0">
                        <Image
                            src="/about/whychoose/talk.png"
                            alt="SkyHome staff"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>

                {/* Hình ảnh */}
                <div className="relative z-10 my-0 mx-auto pt-30">
                    <Image
                        src="/about/whychoose/cat.png"
                        alt="SkyHome staff"
                        width={450 * percentItemSize}
                        height={700 * percentItemSize}
                        priority
                    />
                </div>

                {/* 4 ô thông tin xung quanh */}
                <div
                    className={`absolute bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center`}
                    style={{
                        width: `${250 * percentItemSize}px`,
                        height: `${90 * percentItemSize}px`,
                        top: `${centerPosition.top / 1.5}px`,
                        left: `${centerPosition.Left - 450 * percentItemSize}px`
                    }}
                    onClick={() => setStatus(0)}
                >
                    <p className={`font-bold text-sky-900 text-xl`}
                        style={{
                            fontSize: `${percentItemSize * 20}px`
                        }}>
                        Đặt lịch dễ dàng
                    </p>
                </div>
                <div
                    className={`absolute bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center`}
                    onClick={() => setStatus(1)}
                    style={{
                        width: `${250 * percentItemSize}px`,
                        height: `${90 * percentItemSize}px`,
                        top: `${centerPosition.top / 1.5}px`,
                        left: `${centerPosition.Left + 200 * percentItemSize}px`
                    }}
                >
                    <p className={`font-bold text-sky-900 text-xl`}
                        style={{
                            fontSize: `${percentItemSize * 20}px`
                        }}>
                        Đội ngũ chuyên nghiệp
                    </p>
                </div>
                <div
                    className={`absolute bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center`}
                    onClick={() => setStatus(2)}
                    style={{
                        width: `${250 * percentItemSize}px`,
                        height: `${90 * percentItemSize}px`,
                        top: `${centerPosition.top * 1.05}px`,
                        left: `${centerPosition.Left - 400 * percentItemSize}px`
                    }}
                >
                    <p className={`font-bold text-sky-900 text-xl`}
                        style={{
                            fontSize: `${percentItemSize * 20}px`
                        }}>
                        Dịch vụ đa dạng
                    </p>
                </div>
                <div
                    className={`absolute bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center`}
                    onClick={() => setStatus(3)}
                    style={{
                        width: `${250 * percentItemSize}px`,
                        height: `${90 * percentItemSize}px`,
                        top: `${centerPosition.top * 1.05}px`,
                        left: `${centerPosition.Left + 150 * percentItemSize}px`
                    }}
                >
                    <p className={`font-bold text-sky-900 text-xl`}
                        style={{
                            fontSize: `${percentItemSize * 20}px`
                        }}
                    >
                        Minh bạch & an toàn
                    </p>
                </div>
            </div>
        </section >
    );
}
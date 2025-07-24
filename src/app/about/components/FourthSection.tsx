'use client';
import Image from "next/image";
import { useViewport } from "@/contexts/ViewportContext";
import { useState } from "react";

const statusDisplay = [

    'Chỉ với vài thao tác trên điện thoại, bạn có thể chọn thời gian, địa điểm và loại dịch vụ phù hợp. Dù là cuối tuần hay ngày thường, SkyHome luôn sẵn sàng phục vụ.',
    'Nhân viên được tuyển chọn kỹ lưỡng, đào tạo bài bản và luôn phục vụ với thái độ thân thiện, nghiêm túc. Đảm bảo không gian nhà bạn luôn sạch sẽ, gọn gàng như ý.',
    'Từ dọn nhà theo giờ, vệ sinh máy lạnh, giặt nệm, dọn sau tiệc đến vệ sinh khu vực thú cưng... SkyHome đều có giải pháp phù hợp cho từng gia đình.',
    'Giá cả hiển thị trước khi đặt dịch vụ, không phát sinh phụ phí bất ngờ. Bạn hoàn toàn an tâm về chất lượng và độ tin cậy khi chọn SkyHome.',
    'Ứng dụng tiện ích SkyHome'
]

export default function FourthSection() {

    const [status, setStatus] = useState(4);
    const { isMobile } = useViewport();

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden bg-[url('/about/whychoose/background.png')] bg-cover bg-center`}>
            <div className="min-h-screen pt-20 flex flex-col items-center relative cursor-pointer">

                <div className="absolute  w-full  top-40 left-25 ">
                    <Image
                        src="/about/whychoose/text.png"
                        alt="SkyHome staff"
                        width={430}
                        height={700}
                        priority
                    />
                </div>

                {/* Ô lời thoại */}
                <div className="absolute w-98 h-70 top-20 right-35 rounded-lg px-6 py-4 text-white flex items-center justify-center">
                    <p className={`text-sky-900 ${status === 4 ? 'text-3xl font-bold' : 'text-lg'} z-10 pb-8 pr-4 pl-4 text-center`}>{statusDisplay[status]}</p>
                    <Image
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        src="/about/whychoose/talk.png"
                        alt="SkyHome staff"
                        fill
                        priority
                    />
                </div>

                {/* Hình ảnh */}
                <div className="relative z-10 my-0 mx-auto pt-30">
                    <Image
                        src="/about/whychoose/cat.png"
                        alt="SkyHome staff"
                        width={450}
                        height={700}
                        priority
                    />
                </div>

                {/* 4 ô thông tin xung quanh */}
                <div
                    className="absolute left-40 top-[47%] w-[250px] h-[90px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(0)}
                >
                    <p className="font-bold text-sky-900 text-xl">Đặt lịch dễ dàng </p>
                </div>
                <div
                    className="absolute left-70 bottom-[20%] w-[250px] h-[90px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(1)}
                >
                    <p className="font-bold text-sky-900 text-xl">Đội ngũ chuyên nghiệp</p>
                </div>
                <div
                    className="absolute right-40 top-[47%] w-[250px] h-[90px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(2)}
                >
                    <p className="font-bold text-sky-900 text-xl">Dịch vụ đa dạng</p>
                </div>
                <div
                    className="absolute right-70 bottom-[20%] w-[250px] h-[90px] bg-gray-100 rounded-md shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    onClick={() => setStatus(3)}
                >
                    <p className="font-bold text-sky-900 text-xl">Minh bạch & an toàn</p>
                </div>
            </div>

        </section>
    );
}
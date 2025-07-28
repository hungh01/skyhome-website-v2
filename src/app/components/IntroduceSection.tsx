"use client";

import ImageSlider from "@/components/ImageSlider";
import { useViewport } from "@/contexts/ViewportContext";
import Image from "next/image";

const coreValues = [
    { title: "Sự tin cậy", text: "Đội ngũ nhân viên được tuyển chọn kỹ lưỡng, đào tạo bài bản, có lý lịch rõ ràng và cam kết về sự trung thực, chuyên nghiệp." },
    { title: "Chất lượng vượt trội", text: "Đảm bảo hiệu quả làm sạch tối ưu, chú ý đến từng chi tiết, mang lại không gian thực sự sạch sẽ và thơm mát." },
    { title: "An toàn cho sức khỏe", text: "Ưu tiên sử dụng các sản phẩm vệ sinh thân thiện với môi trường, không độc hại, an toàn cho trẻ em, vật nuôi và người nhạy cảm." },
    { title: "Tiện lợi và linh hoạt", text: "Dễ dàng đặt lịch qua ứng dụng/nền tảng, có nhiều gói dịch vụ và khung giờ linh hoạt để khách hàng lựa chọn." },
    { title: "Chăm sóc khách hàng tận tâm", text: "Luôn lắng nghe phản hồi, giải quyết vấn đề nhanh chóng và chuyên nghiệp để đảm bảo sự hài lòng tối đa" },
];

export default function IntroduceSection() {
    const { isMobile } = useViewport();
    return (
        <section className="w-full snap-start h-screen flex items-center justify-center relative bg-white px-2 py-8 md:px-8 md:py-12">
            {/* Background image with opacity */}
            {/* <div className="absolute inset-0 w-full h-full bg-[url('/introduce/trongdong.png')] bg-cover bg-center opacity-20 rounded-xl"></div> */}
            {/* Content on top */}
            <div className="relative max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center md:text-left z-10">
                <div className="flex items-center justify-center">
                    <div className="w-[420px] h-[420px] sm:w-[450px] sm:h-[450px] md:w-[620px] md:h-[620px] relative flex items-center justify-start">
                        {/* Main background image */}
                        <div className={`absolute inset-0 ${!isMobile ? "w-[80%]" : "w-full"} h-full`}>
                            <Image
                                src="/introduce/others-phone-bg.png"
                                alt="SkyHome Logo"
                                fill
                                className="object-contain rounded-xl z-0"
                                priority
                                style={{ position: "absolute", inset: 0 }}
                            />
                            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center z-10">
                                <ImageSlider />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-black sm:pr-18 sm:pl-18 pr-8 pl-8 md:pr-0 md:pl-0 ">
                    <h2 className="font-sarabun text-lg sm:text-xl md:text-2xl font-extrabold text-secondary uppercase mb-3 sm:mb-4 md:mb-6">
                        Giá trị cốt lõi
                    </h2>
                    <div className="flex flex-col gap-2 text-justify items-left">
                        {coreValues.map(({ title, text }) => (
                            <span
                                key={title}
                                className="text-xs sm:text-sm md:text-base lg:text-base text-secondary"
                            >
                                <span className="font-bold">{title}:&nbsp;</span>
                                {text}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-6 mb-3 mt-5">
                        {/* iOS Download Link */}
                        <div className="flex items-center justify-center relative group">
                            <Image
                                className="cursor-pointer h-auto w-[14vw] max-w-[200px] min-w-[80px]"
                                src="/introduce/download/others-download-android.png"
                                alt="ios-download-image"
                                width={200} height={100}
                            />
                            <div className="p-2 absolute hidden group-hover:block top-[75px] w-[200px] h-[200px] bg-white shadow-xl rounded-xl animate-fadeSlideIn">
                                <Image src="/introduce/download/others-qr-code-example.png" alt="qr-code" width={200} height={200} />
                            </div>
                        </div>
                        {/* Android Download Link */}
                        <div className="flex items-center justify-center relative group">
                            <Image
                                className="cursor-pointer h-auto w-[14vw] max-w-[200px] min-w-[80px]"
                                src="/introduce/download/others-download-ios.png"
                                alt="android-download-image"
                                width={200} height={100}
                            />
                            <div className="p-2 absolute hidden group-hover:block top-[75px] w-[200px] h-[200px] bg-white shadow-xl rounded-xl animate-fadeSlideIn">
                                <Image src="/introduce/download/others-qr-code-example.png" alt="qr-code" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                    @keyframes fadeSlideIn {
                      from {
                        opacity: 0;
                        transform: translateY(-10px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                    .animate-fadeSlideIn {
                      animation: fadeSlideIn 0.5s ease forwards;
                    }
                    `}</style>
                    <div className="flex flex-col items-center justify-center gap-2 text-[#fddb00]">
                        <div className="flex gap-1 sm:gap-2 md:gap-4">
                            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl">★</span>
                            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl">★</span>
                            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl">★</span>
                            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl">★</span>
                            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl">★</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

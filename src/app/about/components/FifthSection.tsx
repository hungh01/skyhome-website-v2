'use client';
import { useViewport } from "@/contexts/ViewportContext";
import Image from "next/image";

export default function FifthSection() {
    const { isMobile } = useViewport();

    const testimonials = [
        {
            quote: "Dịch vụ dọn nhà chuyên nghiệp, nhân viên đến đúng giờ và làm việc rất nhanh chóng.",
            name: "Phạm Minh Tuấn",
            role: "Khách hàng",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            stars: 5,
        },
        {
            quote: "Nhà cửa sạch sẽ, thơm tho sau khi sử dụng dịch vụ. Tôi sẽ giới thiệu cho bạn bè.",
            name: "Nguyễn Thị Hạnh",
            role: "Khách hàng",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            stars: 5,
        },
        {
            quote: "Giá cả hợp lý, nhân viên thân thiện. Sẽ tiếp tục sử dụng dịch vụ trong tương lai.",
            name: "Lê Văn Khánh",
            role: "Khách hàng",
            avatar: "https://randomuser.me/api/portraits/men/65.jpg",
            stars: 4,
        },
    ];

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-10/12'} relative overflow-hidden pt-3 bg-white flex items-center justify-center`}>
            <Image
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
                src="/introduce/trongdong.png"
                alt="Background Image"
                fill
                priority
            />
            <div className="relative z-10 max-w-7xl mx-auto h-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#243c5a] text-left w-full mb-10">
                    Phản hồi từ phía
                    <br />
                    &ensp;khách hàng.
                </h2>
                <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="flex-1 bg-white rounded-xl shadow-lg px-8 py-8 flex flex-col justify-between min-w-[260px] max-w-[340px]">
                            <div className="mb-6">
                                <span className="text-blue-500 text-2xl font-bold">“</span>
                                <p className="text-gray-700 text-base font-medium mt-2 mb-4">{t.quote}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full border border-gray-200"
                                />
                                <div>
                                    <p className="font-bold text-[#243c5a] text-sm">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(t.stars)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                        <span className="text-gray-300 text-lg">★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
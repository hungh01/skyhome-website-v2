import Image from "next/image";

export default function ValuePage() {
    return (
        <main className="min-h-screen">
            <section className="w-full h-auto relative overflow-hidden  py-16 pt-20">
                <Image
                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-10"
                    src="/introduce/trongdong.png"
                    alt="Background Image"
                    fill
                    priority
                />
                <div className="flex flex-col items-center justify-center h-full text-[#243c5a] text-center px-4 sm:px-8 md:px-16">
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10 text-base sm:text-lg md:text-[18px] text-justify space-y-6 mt-4">
                        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight ">SkyHome – Khi con người là cốt lõi của chất lượng dịch vụ</h1>
                        <p>
                            Trong một thị trường đầy cạnh tranh, <b>SkyHome</b> chọn một hướng đi rõ ràng và bền vững: lấy con người làm trung tâm. Tại đây, mỗi cộng tác viên không chỉ là người lao động, mà là người bạn đồng hành thật sự – được đào tạo bài bản, lắng nghe ý kiến và luôn được tôn trọng trong mọi hoàn cảnh.
                        </p>
                        <p>
                            Với triết lý <b>&quot;làm việc bằng sự tử tế – phục vụ bằng tâm huyết&quot;</b>, SkyHome xây dựng một đội ngũ không chỉ giỏi chuyên môn mà còn giàu lòng tận tâm. Từ đó, dịch vụ không đơn thuần là làm sạch, mà là mang đến cảm giác yên tâm và dễ chịu cho từng khách hàng.
                        </p>
                        <Image
                            className="w-full h-auto rounded-lg my-6"
                            src="/about/culture/image1.jpg"
                            alt="SkyHome Team"
                            width={600}
                            height={100}
                        />
                        <p>
                            Môi trường làm việc tại SkyHome cũng là điểm tựa để cộng tác viên phát triển lâu dài: văn minh, minh bạch, có định hướng và có cơ hội tiến xa. Chính vì thế, sự gắn bó giữa con người và thương hiệu không phải là sự ràng buộc, mà là sự lựa chọn từ hai phía.
                        </p>
                        <Image
                            className="w-full h-auto rounded-lg my-6"
                            src="/about/culture/image2.jpg"
                            alt="SkyHome Team"
                            width={600}
                            height={100}
                        />
                        <p>
                            <b>SkyHome khẳng định:</b> khi con người được trân trọng, dịch vụ sẽ thật sự chạm đến trái tim. Đó không chỉ là khẩu hiệu, mà là cam kết cốt lõi để SkyHome phát triển bằng niềm tin, chất lượng và giá trị nhân văn lâu dài.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
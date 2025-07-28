import Image from "next/image";


const listBenefits = [
    {
        id: "1",
        name: "Chu Đáo",
        sub: ["Tổng đài hỗ trợ", "nhanh chóng và tận tâm"],
        image: '/customerservice/icon/benefits/icon-services-chu-dao.png',
    },
    {
        id: "2",
        name: "Tin cậy",
        sub: ["An toàn và chất lượng", "trong từ phút giây"],
        image: '/customerservice/icon/benefits/icon-services-tin-cay.png',
    },
    {
        id: "3",
        name: "Đa dạng",
        sub: ["Dịch vụ phong phú", "đáp ứng mọi nhu cầu"],
        image: '/customerservice/icon/benefits/icon-services-da-dang.png',
    },
    {
        id: "4",
        name: "Chuyên nghiệp",
        sub: ["Luôn cam kết vì", "sự hài lòng"],
        image: '/customerservice/icon/benefits/icon-services-chuyen-nghiep.png',
    },
];

export default function BenefitSection() {
    return (
        <section className="w-full h-screen flex items-center justify-center relative bg-gray-50 px-2 py-8 md:px-8 md:py-12">
            <div className="absolute inset-0 w-full h-full bg-[url('/customerservice/benefitsection.png')] bg-cover bg-center"></div>
            <div className="relative z-10 flex flex-col w-full h-full mx-auto">
                {/* Top row - 90% height */}
                <div className="flex-2 h-[90%] flex items-center justify-center"></div>
                {/* Bottom row - 10% height */}
                <div className="flex-1 h-[10%] flex items-center justify-center">
                    <div className="flex gap-8 h-12 w-[80%] flex-col md:flex-row justify-between items-center pt-20">
                        {listBenefits.map((benefit) => (
                            <div key={benefit.id} className="flex gap-8">
                                {/* Item image */}
                                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#FDDB00] shadow-md p-2">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.name}
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                {/* Item title & subtitle */}
                                <div className="flex flex-col justify-end">
                                    <h2 className="text-base font-extrabold text-black tracking-wider">
                                        {benefit.name}
                                    </h2>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-black leading-normal">
                                            {benefit.sub[0]}
                                        </p>
                                        <p className="text-sm text-black leading-normal">
                                            {benefit.sub[1]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
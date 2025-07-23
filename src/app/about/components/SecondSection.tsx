import FlipCard from "@/components/FlipCard";

export default function SecondSection() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center space-between relative bg-lime-50 px-2 py-8 md:px-8 md:py-12">
            <div className="flex items-center justify-center w-full">
                <div className="w-[400px] h-[500px] flex items-center justify-center">
                    <FlipCard
                        image="/about/flipcard/vision.jpg"
                        title="Tầm nhìn"
                        description="SkyHome cung cấp dịch vụ vệ sinh hiện đại, minh bạch và tiện lợi, ứng dụng công nghệ để tối ưu trải nghiệm và nâng cao chất lượng sống đô thị."
                        subtitle="Tầm nhìn"
                    />
                </div>
                <div className="w-[400px] h-[500px] flex items-center justify-center">
                    <FlipCard
                        image="/about/flipcard/mission.jpg"
                        title="Sứ mệnh"
                        description="SkyHome chú trọng đào tạo nhân viên, mở rộng dịch vụ và chia sẻ kiến thức sống sạch. Chúng tôi cam kết nâng cao chất lượng, mang đến trải nghiệm trọn vẹn cho khách hàng."
                        subtitle="Sứ mệnh"
                    />
                </div>
                <div className="w-[400px] h-[500px] flex items-center justify-center">
                    <FlipCard
                        image="/about/flipcard/value.jpg"
                        title="Giá trị"
                        description="SkyHome mang đến “Không gian sống sạch và an tâm” nhờ công nghệ, sản phẩm an toàn và đội ngũ chuyên nghiệp, đặt sức khỏe khách hàng làm ưu tiên hàng đầu."
                        subtitle="Giá trị"
                    />
                </div>
            </div>
        </div>
    );
}
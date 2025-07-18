import NavigationButton from "@/components/button/NavigationButton";

export default function HomeSection() {
    return (
        <section className="w-full h-screen relative overflow-hidden pt-3">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-11"
            >
                <source src="/banner-home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 py-8 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-1">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight mb-6">
                            Ứng dụng
                            <br />
                            <span>Tiện ích</span>
                            <br />
                            <span>Cho người Việt</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Luôn lắng nghe phản hồi, giải quyết vấn đề nhanh chóng và chuyên nghiệp để đảm bảo sự hài lòng tối đa
                        </p>

                        <NavigationButton text="Liên hệ với chúng tôi" href="/contact" />
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className=" h-screen flex-1 flex justify-center items-center lg:justify-center order-1 lg:order-2 mb-8 lg:mb-0 pt-12 lg:pt-0">
                        <div className="relative self-end">

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
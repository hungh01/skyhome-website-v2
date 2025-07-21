export default function InforSection() {
    return (
        <section className="w-full py-8 bg-[#fddb00]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 space-between text-sky-900">
                    {/* Statistic 1 */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-end">
                            {/* Left side */}
                            <div className="text-5xl lg:text-7xl font-bold mr-2 ">10</div>
                            {/* Right side */}
                            <div className="text-xs lg:text-sm opacity-90 pb-2 ">
                                <div>Năm</div>
                                <div>kinh nghiệm</div>
                            </div>

                        </div>
                    </div>

                    {/* Statistic 2 */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-end">
                            {/* Left side */}
                            <div className="text-5xl lg:text-7xl font-bold mr-2 ">1K+</div>
                            {/* Right side */}
                            <div className="text-xs lg:text-sm opacity-90 pb-2 ">
                                <div>Cộng tác viên</div>
                                <div>& đối tác</div>
                            </div>
                        </div>
                    </div>

                    {/* Statistic 3 */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-end">
                            {/* Left side */}
                            <div className="text-5xl lg:text-7xl font-bold mr-2 ">8K</div>
                            {/* Right side */}
                            <div className="text-xs lg:text-sm opacity-90 pb-2 ">
                                <div>Khách hàng</div>
                                <div>tin dùng</div>
                            </div>
                        </div>
                    </div>

                    {/* Statistic 4 */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-end">
                            {/* Left side */}
                            <div className="text-5xl lg:text-7xl font-bold mr-2 ">4.9</div>
                            {/* Right side */}
                            <div className="text-xs lg:text-sm opacity-90 pb-2 ">
                                <div>Đánh giá</div>
                                <div>trung bình</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
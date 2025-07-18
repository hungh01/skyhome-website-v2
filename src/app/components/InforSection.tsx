export default function InforSection() {
    return (
        <section className="w-full py-8 bg-[#fddb00]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-sky-900">
                    {/* Statistic 1 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl lg:text-6xl font-bold mb-2">10</div>
                        <div className="text-sm lg:text-base opacity-90">
                            <div>Năm kinh</div>
                            <div>nghiệm</div>
                        </div>
                    </div>

                    {/* Statistic 2 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl lg:text-6xl font-bold mb-2">1K+</div>
                        <div className="text-sm lg:text-base opacity-90">
                            <div>Cộng tác</div>
                            <div>viên</div>
                        </div>
                    </div>

                    {/* Statistic 3 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl lg:text-6xl font-bold mb-2">8K</div>
                        <div className="text-sm lg:text-base opacity-90">
                            <div>Khách hàng</div>
                            <div>tin dùng</div>
                        </div>
                    </div>

                    {/* Statistic 4 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl lg:text-6xl font-bold mb-2">4.2</div>
                        <div className="text-sm lg:text-base opacity-90">
                            <div>Đánh giá</div>
                            <div>trung bình</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import Image from "next/image";
import DownloadButton from "../button/DowloadButton";

export function Footer() {
    return (
        <footer className="bg-white">
            {/* Yellow CTA Section */}
            <div className="bg-[#fddb00] py-12">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Đăng ký ngay hôm nay
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Để trải nghiệm những dịch vụ tốt nhất của SkyHome
                        </p>
                        <DownloadButton text="Trải nghiệm dịch vụ" href="/" />
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Hỗ trợ */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Hỗ trợ</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Hotline: 096 292 7273</li>
                            <li>Email: cskh@skyhome.net.vn</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Điều khoản sử dụng</li>
                        </ul>
                    </div>

                    {/* Công ty */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Công ty</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Về chúng tôi</li>
                            <li>Tin tức</li>
                            <li>Tuyển dụng</li>
                        </ul>
                    </div>

                    {/* KH cá nhân */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">KH cá nhân</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Vệ sinh theo giờ</li>
                            <li>Tổng vệ sinh</li>
                            <li>Vệ sinh máy lạnh</li>
                            <li>Vệ sinh điều hoà</li>
                            <li>Vệ sinh máy nóng lạnh</li>
                            <li>Vệ sinh máy năng lượng mặt trời</li>
                        </ul>

                    </div>

                    {/* KH doanh nghiệp */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">KH doanh nghiệp</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Vệ sinh công nghiệp</li>
                            <li>Vệ sinh văn phòng</li>
                            <li>Vệ sinh homestay</li>
                            <li>Vệ sinh khách sạn</li>
                        </ul>
                    </div>

                    {/* Cộng tác viên */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Cộng tác viên</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Hướng dẫn đăng ký</li>
                            <li>Chương trình đào tạo</li>
                            <li>Cộng đồng SkyHome</li>
                        </ul>
                    </div>
                </div>

                {/* Logo and Social Media */}
                <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-8 lg:mb-0">
                        <Image src="/logo-company.svg" alt="SkyHome Logo" width={120} height={40} />
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">Theo dõi các nền tảng</p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-8 rounded-full flex items-center justify-center text-white ">
                                <Image src="/icon/fb-icon.png" alt="Facebook" width={40} height={40} />
                            </a>
                            <a href="#" className="w-10 h-8 rounded-full flex items-center justify-center text-white ">
                                <Image src="/icon/yt-icon.png" alt="YouTube" width={40} height={40} />
                            </a>
                            <a href="#" className="w-10 h-8 rounded-full flex items-center justify-center text-white ">
                                <Image src="/icon/tiktok-icon.png" alt="TikTok" width={40} height={40} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Company Information */}
                <div className="mt-12 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                        <p className="font-semibold mb-2">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ SKYHOME VIỆT NAM</p>
                        <p>Địa chỉ: 46 Cửu Long, phường Tân Sơn Hoà, TP Hồ Chí Minh</p>
                        <p>MST: 0318963348</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
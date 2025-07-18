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
                            <li>Câu hỏi thường gặp</li>
                            <li>Nguyên tắc cộng đồng</li>
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
                            <li>Dịch vụ</li>
                            <li>Thông tin mới nhất</li>
                        </ul>
                    </div>

                    {/* KH doanh nghiệp */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">KH doanh nghiệp</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Ưu đãi</li>
                        </ul>
                    </div>

                    {/* Cộng tác viên */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Cộng tác viên</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Hướng dẫn đăng ký</li>
                            <li>Chương trình đào tạo</li>
                            <li>Cộng đồng</li>
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
                            <a href="#" className="w-10 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.119.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.283-.744 2.845-.282 1.080-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Company Information */}
                <div className="mt-12 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                        <p className="font-semibold mb-2">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ SKYHOME</p>
                        <p>Địa chỉ: 46 Cửu Long, phường 2, Tân Bình</p>
                        <p>Mã số doanh nghiệp: 0318963348</p>
                        <p>SĐT: 096 292 7273</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
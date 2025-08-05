export default function Feedback() {
    return (
        <section className="snap-start min-h-screen py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl rounded-lg shadow-lg">
                {/* Header */}
                <div className="text-center mb-12 mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Liên lạc với chúng tôi</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side - Contact Form */}
                    <div className="bg-white rounded-lg p-8 relative">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gửi tin nhắn</h2>
                        <p className="text-gray-600 mb-6">
                            A dương kêu để trống để suy nghĩ sau.
                        </p>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Tên của bạn
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-orange-500 outline-none bg-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Địa chỉ Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-orange-500 outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="interested" className="block text-sm font-medium text-gray-700 mb-1">
                                        Bạn quan tâm đến
                                    </label>
                                    <select
                                        id="interested"
                                        className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-orange-500 outline-none bg-transparent"
                                    >
                                        <option value="">Chọn dịch vụ</option>
                                        <option value="cleaning">Dịch vụ dọn dẹp</option>
                                        <option value="maintenance">Bảo trì</option>
                                        <option value="other">Khác</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-orange-500 outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Tin nhắn
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-orange-500 outline-none bg-transparent resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
                            >
                                Gửi
                            </button>
                        </form>

                        {/* Divider for large screens, positioned at the far right */}
                        <div className="hidden lg:block absolute top-0 right-0 h-[80%]">
                            <div className="w-px bg-black h-full"></div>
                        </div>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="space-y-6">
                        {/* Call Us */}
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h3>
                            <p className="text-gray-600 mb-4">
                                Pellentesque in ipsum id orci porta dapibus. Quisque vel nisi pretium ut lacinia in,
                                elementum ut ipsum. Donec rutrum congue leo eget malesuada.
                            </p>
                            <div className="flex items-center text-orange-500">
                                <span className="mr-2">📞</span>
                                <span className="font-medium">(+84) 96 292 7273</span>
                            </div>
                        </div>

                        {/* Visit Us */}
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Visit Us</h3>
                            <p className="text-gray-600 mb-4">
                                Pellentesque in ipsum id orci porta dapibus. Quisque vel nisi pretium ut lacinia in,
                                elementum ut ipsum. Donec rutrum congue leo eget malesuada.
                            </p>
                            <div className="flex items-center text-orange-500">
                                <span className="mr-2">📍</span>
                                <span className="font-medium">123 Street St, State San Francisco, CA</span>
                            </div>
                        </div>

                        {/* Live Chat */}
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Live Chat</h3>
                            <p className="text-gray-600 mb-4">
                                Pellentesque in ipsum id orci porta dapibus. Quisque vel nisi pretium ut lacinia in,
                                elementum ut ipsum. Donec rutrum congue leo eget malesuada.
                            </p>
                            <div className="flex items-center text-orange-500">
                                <span className="mr-2">💬</span>
                                <span className="font-medium">Start Chat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
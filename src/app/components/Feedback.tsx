'use client';
import { useState } from "react";

export default function Feedback() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    service,
                    content,
                }),
            });

            if (!res.ok) throw new Error("Gửi thất bại. Vui lòng thử lại!");

            setSuccess(true);
            setName("");
            setEmail("");
            setPhone("");
            setService("");
            setContent("");
        } catch (err: any) {
            setError(err.message || "Có lỗi xảy ra.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="snap-start min-h-screen py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl rounded-lg shadow-lg">
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
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Tên của bạn
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
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
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
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
                                        value={service}
                                        onChange={e => setService(e.target.value)}
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
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
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
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-orange-500 outline-none bg-transparent resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
                                disabled={loading}
                            >
                                {loading ? "Đang gửi..." : "Gửi"}
                            </button>
                            {success && <div className="text-green-600 mt-2">Gửi thành công, cảm ơn bạn vì đã phản hồi!</div>}
                            {error && <div className="text-red-600 mt-2">{error}</div>}
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
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Liên hệ qua điện thoại</h3>
                            <p className="text-gray-600 mb-4">
                                Chúng tôi luôn sẵn sàng hỗ trợ bạn!
                                Đội ngũ chăm sóc khách hàng của chúng tôi hoạt động từ 8:00 đến 22:00 mỗi ngày.
                            </p>
                            <div className="flex items-center text-orange-500">
                                <span className="mr-2">📞</span>
                                <span className="font-medium">(+84) 96 292 7273</span>
                            </div>
                        </div>

                        {/* Visit Us */}
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Đến văn phòng của chúng tôi</h3>
                            <p className="text-gray-600 mb-4">
                                Bạn muốn gặp trực tiếp để trao đổi?
                                Chúng tôi rất hân hạnh được chào đón bạn tại văn phòng:
                            </p>
                            <div className="flex items-center text-orange-500">
                                <span className="mr-2">📍</span>
                                <span className="font-medium">46 Cửu Long, phường Tân Sơn Hoà, TP Hồ Chí Minh</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
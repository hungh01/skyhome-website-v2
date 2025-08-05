
// components/EmailTemplate.tsx
interface EmailTemplateProps {
    value: {
        name: string;
        email: string;
        phone: string;
        service: string;
        content: string;
    };
}

const services = [
    { icon: "/customerservice/icon/vstheogio.png", target: "#section1" },
    { icon: "/customerservice/icon/tongvs.png", target: "#section2" },
    { icon: "/customerservice/icon/vsmaygiat.png", target: "#section3" },
    { icon: "/customerservice/icon/vsmaylanh.png", target: "#section4" },
    { icon: "/customerservice/icon/vsmaynonglanh.png", target: "#section5" },
    { icon: "/customerservice/icon/dichvukhac.png", target: "#section6" },
];

export function EmailTemplate({ value }: EmailTemplateProps) {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa',
            padding: '40px 20px'
        }}>

            {/* Welcome Section */}
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '30px'
            }}>
                {/* Welcome Graphic */}
                <div style={{
                    backgroundColor: '#87CEEB',
                    borderRadius: '50%',
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <img src="/logo-company.svg" alt="Welcome" style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%'
                    }} />
                </div>

                <h2 style={{
                    color: '#333',
                    fontSize: '18px',
                    marginBottom: '15px',
                    fontWeight: 'normal'
                }}>
                    Chào {value.name}!
                </h2>

                <p style={{
                    color: '#666',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                }}>
                    Chúng tôi rất vui mừng khi nhận được thông tin liên hệ từ bạn! 🏠✨
                </p>

                <p style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '25px'
                }}>
                    Hãy là người đầu tiên nhận được thông tin về các dịch vụ mới, ưu đãi đặc biệt và thông tin hữu ích mà chúng tôi gửi đến bạn.
                </p>

                {/* Contact Information */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '25px',
                    textAlign: 'left'
                }}>
                    {services.map(({ icon, target }) => (
                        <button
                            key={target}
                            onClick={() => {
                                const el = document.querySelector(target);
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex flex-col items-center focus:outline-none transition-transform duration-200 hover:scale-110 cursor-pointer"
                            type="button"
                        >
                            <img src={icon} alt={target} width={40} height={20} />
                        </button>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div style={{ marginBottom: '20px' }}>
                    <a href={process.env.API_URL} style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '12px 30px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        display: 'inline-block'
                    }}>
                        Khám Phá Dịch Vụ
                    </a>
                </div>

                <p style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.6'
                }}>
                    Tận hưởng những khoảnh khắc tuyệt vời với SkyHome và đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào!
                </p>
            </div>

            {/* Footer */}
            <div style={{
                textAlign: 'center',
                color: '#999',
                fontSize: '12px'
            }}>
                <p>Trân trọng,<br />Đội ngũ SkyHome</p>
            </div>
        </div>
    );
}

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



export function EmailTemplateAdmin({ value }: EmailTemplateProps) {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa',
            padding: '40px 20px'
        }}>

            {/* Admin Notification Section */}
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                marginBottom: '30px'
            }}>
                {/* Logo */}
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
                    <img src="/logo-company.svg" alt="SkyHome Logo" style={{
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
                    Thông báo: Có khách hàng mới liên hệ!
                </h2>

                <p style={{
                    color: '#666',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                }}>
                    Một khách hàng vừa gửi thông tin liên hệ qua website SkyHome. Vui lòng kiểm tra chi tiết bên dưới để phản hồi kịp thời.
                </p>

                {/* Contact Information */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '25px',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#333',
                        fontSize: '16px',
                        marginBottom: '15px',
                        borderBottom: '2px solid #87CEEB',
                        paddingBottom: '5px'
                    }}>
                        Thông tin khách hàng:
                    </h3>
                    <p style={{ margin: '8px 0', color: '#555' }}>
                        <strong>👤 Họ tên:</strong> {value.name}
                    </p>
                    <p style={{ margin: '8px 0', color: '#555' }}>
                        <strong>📧 Email:</strong> {value.email}
                    </p>
                    <p style={{ margin: '8px 0', color: '#555' }}>
                        <strong>📞 Số điện thoại:</strong> {value.phone}
                    </p>
                    <p style={{ margin: '8px 0', color: '#555' }}>
                        <strong>🏠 Dịch vụ quan tâm:</strong> {value.service}
                    </p>
                    <p style={{ margin: '8px 0', color: '#555' }}>
                        <strong>💬 Nội dung:</strong> {value.content}
                    </p>
                </div>

                <p style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.6'
                }}>
                    Vui lòng liên hệ lại với khách hàng trong thời gian sớm nhất để đảm bảo trải nghiệm tốt nhất.
                </p>
            </div>

            {/* Footer */}
            <div style={{
                textAlign: 'center',
                color: '#999',
                fontSize: '12px'
            }}>
                <p>Thông báo tự động từ hệ thống SkyHome</p>
            </div>
        </div>
    );
}

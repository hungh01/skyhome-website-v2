


import Image from "next/image";

export function Footer() {
    return (
        <>
            <footer
                className="bg-gradient-to-t from-[#FDDB00] to-white"
                style={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "32px 0",
                    width: "100%",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", maxWidth: 900, width: "100%", justifyContent: "space-between" }}>
                    <div style={{ flex: "0 0 auto" }}>
                        <Image
                            src="/customerservice/icon/cleaning-bucket.png"
                            alt="Cleaning bucket"
                            width={140}
                            height={140}
                            className=""
                        />
                    </div>
                    <div style={{ flex: "1 1 auto", marginLeft: 32 }}>
                        <div style={{ color: "#222", fontWeight: 500, fontSize: 18, marginBottom: 8 }}>
                            Dọn nhà để SkyHome lo<br />
                            Bạn chỉ việc thở<br />
                            Tải app ngay!
                        </div>
                        <div style={{ display: "flex", gap: 12 }}>
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/google-play-badge.png"
                                    alt="Get it on Google Play"
                                    width={140}
                                    height={42}
                                />
                            </a>
                            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/app-store-badge.png"
                                    alt="Download on the App Store"
                                    width={140}
                                    height={42}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

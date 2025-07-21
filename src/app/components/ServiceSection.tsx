'use client';
import FlowerMenu from "@/components/FlowerMenu";

const MayGiatIcon = () => (
    <img src="/service/maygiat.png" alt="May giat" style={{ width: 150, height: 150 }} />
);

const MayLanhIcon = () => (
    <img src="/service/maylanh.png" alt="May lanh" style={{ width: 150, height: 150 }} />
);
const MayNongLanhIcon = () => (
    <img src="/service/maynonglanh.png" alt="May nong lanh" style={{ width: 180, height: 180 }} />
);

const TongVeSinhIcon = () => (
    <img src="/service/tongvesinh.png" alt="Tong ve sinh" style={{ width: 150, height: 150 }} />
);
const VeSinhTheoGioIcon = () => (
    <img src="/service/vesinhtheogio.png" alt="Ve sinh theo gio" style={{ width: 150, height: 150 }} />
);

export default function ServiceSection() {
    return (
        <section className="w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/service/mapmapmo.png')]">
            <div className="flex justify-center items-center h-full">
                <FlowerMenu
                    animationDuration={5000}
                    backgroundColor="transparent"
                    iconColor=""
                    menuItems={[
                        {
                            href: 'https://github.com/',
                            icon: MayGiatIcon,
                            name: 'Vệ sinh điều hoà'
                        },
                        {
                            href: 'https://twitter.com/',
                            icon: MayLanhIcon,
                            name: 'Vệ sinh máy lạnh'
                        },
                        {
                            href: 'https://instagram.com/',
                            icon: MayNongLanhIcon,
                            name: 'Vệ sinh máy nóng lạnh'
                        },
                        {
                            href: 'https://www.linkedin.com/',
                            icon: TongVeSinhIcon,
                            name: 'Vệ sinh máy giặt'
                        },
                        {
                            href: 'https://www.youtube.com/',
                            icon: VeSinhTheoGioIcon,
                            name: 'Vệ sinh theo giờ'
                        },
                        {
                            href: 'https://www.youtube.com/',
                            icon: VeSinhTheoGioIcon,
                            name: 'Tổng vệ sinh'
                        },

                    ]}
                    togglerSize={100}
                />
            </div>
        </section>
    );
}
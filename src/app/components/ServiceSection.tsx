'use client';
import FlowerMenu from "@/components/FlowerMenu";

const DichVuKhacIcon = () => (
    <img src="/service/dichvukhac.png" alt="Dich vu khac" />
);
const MayGiatIcon = () => (
    <img src="/service/vsmaygiat.png" alt="May giat" />
);

const MayLanhIcon = () => (
    <img src="/service/vsmaylanh.png" alt="May lanh" />
);
const MayNongLanhIcon = () => (
    <img src="/service/vsmaynonglanh.png" alt="May nong lanh" />
);

const TongVeSinhIcon = () => (
    <img src="/service/tongvs.png" alt="Tong ve sinh" />
);
const VeSinhTheoGioIcon = () => (
    <img src="/service/vstheogio.png" alt="Ve sinh theo gio" />
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
                            icon: DichVuKhacIcon,
                        },
                        {
                            href: 'https://github.com/',
                            icon: MayGiatIcon,
                        },
                        {
                            href: 'https://twitter.com/',
                            icon: MayLanhIcon,
                        },
                        {
                            href: 'https://instagram.com/',
                            icon: MayNongLanhIcon,
                        },
                        {
                            href: 'https://www.linkedin.com/',
                            icon: TongVeSinhIcon,
                        },
                        {
                            href: 'https://www.youtube.com/',
                            icon: VeSinhTheoGioIcon,
                        },

                    ]}
                    togglerSize={100}
                />
            </div>
        </section>
    );
}
'use client';
import FlowerMenu from "@/components/FlowerMenu";
import Image from "next/image";

const DichVuKhacIcon = () => (
    <Image src="/service/dichvukhac.png" alt="Dich vu khac" width={500} height={500} />
);
const MayGiatIcon = () => (
    <Image src="/service/vsmaygiat.png" alt="May giat" width={500} height={500} />
);

const MayLanhIcon = () => (
    <Image src="/service/vsmaylanh.png" alt="May lanh" width={500} height={500} />
);
const MayNongLanhIcon = () => (
    <Image src="/service/vsmaynonglanh.png" alt="May nong lanh" width={500} height={500} />
);

const TongVeSinhIcon = () => (
    <Image src="/service/tongvs.png" alt="Tong ve sinh" width={500} height={500} />
);
const VeSinhTheoGioIcon = () => (
    <Image src="/service/vstheogio.png" alt="Ve sinh theo gio" width={500} height={500} />
);

export default function ServiceSection() {
    return (
        <section className=" mt-5 mb-5 w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/service/mapmapmo.png')]">
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
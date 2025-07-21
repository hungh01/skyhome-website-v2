import FlowerMenu from "@/components/FlowerMenu";
import {
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
} from "@/components/svgIcon";

export default function ServiceSection() {
    return (
        <section className="w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/service/mapmapmo.png')]">
            <div className="flex justify-center items-center h-full">
                <FlowerMenu
                    animationDuration={700}
                    backgroundColor="rgba(0, 0, 0)"
                    iconColor="#ffffff"
                    menuItems={[
                        {
                            href: 'https://github.com/',
                            icon: GithubIcon
                        },
                        {
                            href: 'https://twitter.com/',
                            icon: TwitterIcon
                        },
                        {
                            href: 'https://instagram.com/',
                            icon: InstagramIcon
                        },
                        {
                            href: 'https://www.linkedin.com/',
                            icon: LinkedinIcon
                        },
                        {
                            href: 'https://www.youtube.com/',
                            icon: YoutubeIcon
                        },

                    ]}
                    togglerSize={40}
                />
            </div>
        </section>
    );
}
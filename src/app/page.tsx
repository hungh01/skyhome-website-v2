
import FlowerMenu from "@/components/FlowerMenu";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../components/svgIcon";

import InforSection from "./components/InforSection";
import HomeSection from "./components/HomeSection";


export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <HomeSection />
      <InforSection />

      {/* Flower Menu Section */}
      <section className="w-full h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-r from-amber-50 via-slate-200 to-gray-50">
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

    </main>
  );
}

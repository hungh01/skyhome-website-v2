import FlowerMenu from "@/components/FlowerMenu";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../components/svgIcon";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <section className="w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/banner-home.png')] pt-3" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 py-8 lg:py-0">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Ứng dụng
                <br />
                <span className="text-gray-700">Tiện ích</span>
                <br />
                <span className="text-gray-600">Cho người Việt</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Luôn lắng nghe phản hồi, giải quyết vấn đề nhanh chóng và chuyên nghiệp để đảm bảo sự hài lòng tối đa
              </p>

              <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-900 rounded-3xl group-hover:bg-transparent group-hover:dark:bg-transparent font-bold">
                  Liên hệ với chúng tôi
                </span>
              </button>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className=" h-screen flex-1 flex justify-center items-center lg:justify-center order-1 lg:order-2 mb-8 lg:mb-0 pt-12 lg:pt-0">
              <div className="relative self-end">
                <Image
                  src="/hand.png"
                  alt="hand holding phone"
                  width={256}
                  height={512}
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
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

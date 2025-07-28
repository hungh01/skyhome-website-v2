

import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";
import IntroduceSection from "./components/IntroduceSection";
import OptionalSection from "./components/OptionalSection";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
  return (
    <main className="justify-between snap-y snap-mandatory scroll-smooth overflow-y-scroll h-screen">
      <HomeSection />
      <ServiceSection />
      {/* <OptionalSection /> */}
      <IntroduceSection />
      <Footer />
    </main>
  );
}


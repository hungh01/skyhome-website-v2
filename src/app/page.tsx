

import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";
import IntroduceSection from "./components/IntroduceSection";
// import OptionalSection from "./components/OptionalSection";
import { Footer } from "@/components/layout/Footer";
import Feedback from "./components/Feedback";


export default function Home() {
  return (
    <main className="justify-between snap-y snap-mandatory scroll-smooth overflow-y-scroll h-screen">
      <HomeSection />
      <ServiceSection />
      {/* <OptionalSection /> */}
      <IntroduceSection />
      <Feedback />
      <Footer />
    </main>
  );
}


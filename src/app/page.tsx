

import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";
import IntroduceSection from "./components/IntroduceSection";
import OptionalSection from "./components/OptionalSection";


export default function Home() {
  return (
    <main className="min-h-screen justify-between  pt-20">
      <HomeSection />
      <ServiceSection />
      <OptionalSection />
      <IntroduceSection />
    </main>
  );
}


import InforSection from "./components/InforSection";
import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";
import IntroduceSection from "./components/IntroduceSection";
import OptionalSection from "./components/OptionalSection";


export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <HomeSection />
      <InforSection />
      <ServiceSection />
      <OptionalSection />
      <IntroduceSection />

    </main>
  );
}

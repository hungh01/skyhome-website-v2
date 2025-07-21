
import InforSection from "./components/InforSection";
import HomeSection from "./components/HomeSection";
import ServiceSection from "./components/ServiceSection";


export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <HomeSection />
      <InforSection />
      <ServiceSection />

    </main>
  );
}


import BenefitSection from "./components/BenefitSection";
import IntroduceSection from "./components/IntroduceSection";


export default function CustomerServicePage() {
    return (
        <main className="min-h-screen pt-20 ">
            <IntroduceSection />
            <BenefitSection />
        </main>
    );
}
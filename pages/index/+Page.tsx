import KeyProjects from "./components/KeyProjects";
import HeroSection from "./components/HeroSection";
import PainPoint from "./components/PainPoint";
import Title from "./components/Title";
import ValueProposition from "./components/ValueProposition";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";
import Scroller from "../../components/Scroller";
import PriceSection from "./components/PriceSection";
import FAQSection from "./components/FAQSection/FAQSection";

export default function Page() {
  return (
    <div className="">
      <div className="h-dvh snap-start">
        <Title />
        <HeroSection />
      </div>
      <PainPoint className="h-dvh snap-start" />
      <ValueProposition className="h-dvh snap-start" />
      <KeyProjects className="h-dvh snap-start" />
      <ProcessSection className="h-dvh snap-start" />
      <PriceSection className="h-dvh snap-start" />
      <Testimonials className="h-dvh snap-start" />
      <FinalCTA className="h-dvh snap-start" />
      <FAQSection className="snap-start" />
      <Scroller />
    </div>
  );
}

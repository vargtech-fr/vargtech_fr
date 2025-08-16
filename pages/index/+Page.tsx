import KeyProjects from "./components/KeyProjects";
import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import Title from "./components/Title";
import ValueProposition from "./components/ValueProposition";
import ProcessSection from "./components/ProcessSection";
import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";
import Scroller from "../../components/Scroller";

export default function Page() {
  return (
    <div className="">
      <div className="h-dvh snap-start">
        <Title />
        <HeroSection />
      </div>
      <ProblemSolution className="h-dvh snap-start" />
      <ValueProposition className="h-dvh snap-start" />
      <KeyProjects className="h-dvh snap-start" />
      <ProcessSection className="h-dvh snap-start" />
      <Testimonials className="h-dvh snap-start" />
      <FinalCTA className="h-dvh snap-start" />
      <Scroller />
    </div>
  );
}

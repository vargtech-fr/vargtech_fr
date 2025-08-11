import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import Title from "./components/Title";

export default function Page() {
  return (
    <div className="">
      <div className="h-dvh snap-start">
        <Title />
        <HeroSection />
      </div>
      <ProblemSolution className="h-dvh snap-start" />
    </div>
  );
}

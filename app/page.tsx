import InteractiveAdvertisementSection from "@/components/InteractiveAdvertisementSection";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import StepsSection from "@/components/StepsSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <div className="px-4 md:px-0">
        <StepsSection/>
        <PlansSection/>
        <InteractiveAdvertisementSection/>
      </div>
    </div>
  );
}

import InteractiveAdvertisementSection from "@/components/InteractiveAdvertisementSection";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import StepsSection from "@/components/StepsSection";

export default function Home() {
  return (
    <div className="px-4 md:px-0">
      <Navbar/>

      <Jumbotron/>

      <StepsSection/>

      <PlansSection/>

      <InteractiveAdvertisementSection/>
    </div>
  );
}

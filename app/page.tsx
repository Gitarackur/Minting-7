import HomeCard from "@/components/HomeCard";
import InteractiveAdvertisementSection from "@/components/InteractiveAdvertisementSection";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import StepsSection from "@/components/StepsSection";
import { DefaultBullet } from "@/components/design-system/Bullets";
import PrimaryButton from "@/components/design-system/Button/Button";
import { ArrowLinks } from "@/components/design-system/CustomLinks/Links";
import Link from "next/link";

export default function Home() {

  
  

  return (
    <div>
      <Navbar/>

      <Jumbotron/>

      <StepsSection/>

      <PlansSection/>

      <InteractiveAdvertisementSection/>
    </div>
  );
}

import Card from "../[locale]/sections/SubscribeNow/page";
import CustomerReviews from "../[locale]/sections/Stories/page";
import CoachFeatures from "../[locale]/about/page";
import CoachProfile from "../[locale]/sections/home/page";
import HomePage from "../[locale]/sections/home2/page";
import { ThreeDScrollTriggerRow } from "../[locale]/sections/pro/page";
import ParticlesBackground from "../[locale]/sections/cap/page";
import CompleteThreeDCarousel from "../[locale]/sections/imge/page"
export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32 w-full pt-10">
      <HomePage/>
      <CoachProfile/>
      <ThreeDScrollTriggerRow/>
      <CoachFeatures/>
      <CustomerReviews/>
      <CompleteThreeDCarousel/>
      <Card/>
    </div>
  );
}

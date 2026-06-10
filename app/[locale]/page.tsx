import Card from "../Subscribe Now/page";
import CustomerReviews from "../Stories/page";
import CoachFeatures from "../about/page";
import CoachProfile from "../home/page";
import HomePage from "../home2/page";
import { ThreeDScrollTriggerRow } from "../pro/page";
import ParticlesBackground from "../cap/page";
import CompleteThreeDCarousel from "../imge/page"
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

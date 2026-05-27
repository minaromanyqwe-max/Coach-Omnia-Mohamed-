import Card from "./chick/page";
import CustomerReviews from "./img/page";
import CoachFeatures from "./about/page";
import CoachProfile from "./home/page";
import HomePage from "./home2/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32 w-full pt-10">
      <HomePage/>
      <CoachProfile/>
      <CoachFeatures/>
      <CustomerReviews/>
      <Card/>
    </div>
  );
}

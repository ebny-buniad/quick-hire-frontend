import ExploreCategories from "../layouts/Category/Category";
import CTASections from "../layouts/CTASections/CTASections";
import Featuredjobs from "../layouts/Featuredjobs/Featuredjobs";
import LatestJobs from "../layouts/LatestJobs/LatestJobs";
import Partners from "../layouts/Partners/Partners";

export default async function Home() {
  return (
    <div className="px-2">
      {/* <HeroSection></HeroSection> */}
      <Partners></Partners>
      <ExploreCategories></ExploreCategories>
      <CTASections></CTASections>
      <Featuredjobs></Featuredjobs>

      <LatestJobs></LatestJobs>
    </div>
  );
}
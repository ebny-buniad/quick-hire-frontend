import ExploreCategories from "../layouts/Category/Category";
import Partners from "../layouts/Partners/Partners";

export default async function Home() {
  return (
    <div className="px-2">
      <Partners></Partners>
      <ExploreCategories></ExploreCategories>
    </div>
  );
}

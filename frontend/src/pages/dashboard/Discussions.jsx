import CategoryPage from "./CategoryPage";
import { discussions } from "../../data/mockData";

export default function Discussions() {
  return (
    <CategoryPage
      title="Discussions"
      subtitle="Threads the community is talking about right now."
      items={discussions}
      kind="discussion"
    />
  );
}

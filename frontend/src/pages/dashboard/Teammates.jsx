import CategoryPage from "./CategoryPage";
import { teammates } from "../../data/mockData";

export default function Teammates() {
  return (
    <CategoryPage
      title="Teammates"
      subtitle="Developers and designers looking to team up for their next build."
      items={teammates}
      kind="teammate"
    />
  );
}

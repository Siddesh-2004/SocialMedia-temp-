import CategoryPage from "./CategoryPage";
import { buddies } from "../../data/mockData";

export default function Buddies() {
  return (
    <CategoryPage
      title="Coding Buddies"
      subtitle="Find a study partner to learn, practice, and grow together."
      items={buddies}
      kind="buddy"
    />
  );
}

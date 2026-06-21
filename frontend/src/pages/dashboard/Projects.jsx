import CategoryPage from "./CategoryPage";
import { projects } from "../../data/mockData";

export default function Projects() {
  return (
    <CategoryPage
      title="Projects"
      subtitle="Open-source and side projects from across the kNITTEd network."
      items={projects}
      kind="project"
    />
  );
}

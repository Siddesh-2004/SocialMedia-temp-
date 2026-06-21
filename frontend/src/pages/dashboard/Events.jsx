import CategoryPage from "./CategoryPage";
import { events } from "../../data/mockData";

export default function Events() {
  return (
    <CategoryPage
      title="Events"
      subtitle="Hackathons, summits, and meetups happening across the network."
      items={events}
      kind="event"
    />
  );
}

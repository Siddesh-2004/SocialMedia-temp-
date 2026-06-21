import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/dashboard/Home";
import Events from "./pages/dashboard/Events";
import Teammates from "./pages/dashboard/Teammates";
import Buddies from "./pages/dashboard/Buddies";
import Projects from "./pages/dashboard/Projects";
import Discussions from "./pages/dashboard/Discussions";
import Profile from "./pages/dashboard/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="teammates" element={<Teammates />} />
        <Route path="buddies" element={<Buddies />} />
        <Route path="projects" element={<Projects />} />
        <Route path="discussions" element={<Discussions />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  EventsPage,
  ExplorePage,
  FaqPage,
  FeaturesPage,
  LandingPage,
  ProjectsPage,
} from "../../pages";
import { Footer, Navbar } from "../../components";

const PublicRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default PublicRoute;

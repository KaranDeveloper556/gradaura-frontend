import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../../pages";

const PublicRoute = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
    </Routes>
  );
};

export default PublicRoute;

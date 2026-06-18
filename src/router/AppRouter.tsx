import { Route, Routes } from "react-router-dom";
import PublicRoute from "./route/PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoute />} />
    </Routes>
  );
};

export default AppRouter;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Home />} />
    </Route>
  )
);

export default router;

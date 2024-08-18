import { AnimatePresence } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import Curve from "../animation/Curve";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Link to="/about">About</Link>
      <AnimatePresence mode="wait" key={location.pathname}>
        <Curve>
          <Outlet />
        </Curve>
      </AnimatePresence>
    </>
  );
};

export default Layout;

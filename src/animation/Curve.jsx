import { motion } from "framer-motion";
import BezierCurve from "./BezierCurve";
import { animate, text } from "./helper";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const routes = {
  "/": "Home",
  "/about": "About",
};

const Curve = ({ children }) => {
  const { pathname } = useLocation();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="curve">
      {/* <div
        style={{ opacity: dimensions.width >0 ? 0 : 1 }}
        className="background"
      /> */}
      <motion.p className="route-name" {...animate(text)}>
        {routes[pathname]}
      </motion.p>

      {dimensions.width > 0 && <BezierCurve {...dimensions} />}
      {children}
    </div>
  );
};

Curve.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Curve;

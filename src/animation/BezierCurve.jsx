import { motion } from "framer-motion";
import { animate, curve, translate } from "./helper";
import PropTypes from "prop-types";

const BezierCurve = ({ width, height }) => {
    
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...animate(translate)}>
      <motion.path {...animate(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

BezierCurve.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default BezierCurve;

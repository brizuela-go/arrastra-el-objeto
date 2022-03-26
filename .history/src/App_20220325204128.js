import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const App = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="container">
      <h1 className="mt-5 text-center text-white"> Arrastra el objeto</h1>
      <div className="mt-5">
        <motion.div className="special_container" ref={constraintsRef}>
          <motion.div className="item" drag dragConstraints={constraintsRef} />
        </motion.div>
      </div>
      <div className="col col-auto ms-3">
        <h1 className="mt-5 text-center text-white"> Arrastra el objeto</h1>
        <motion.div className="special_container" ref={constraintsRef}>
          <motion.div
            className="item"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default App;

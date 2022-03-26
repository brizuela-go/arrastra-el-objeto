import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const App = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="container">
      <h1 className="text-center text-white animate__animated animate__fadeIn ds-1 ">
        Arrastra el objeto
      </h1>
      <div className="mt-5">
        <motion.div
          className="special_container animate__animated animate__fadeInUp"
          ref={constraintsRef}
        >
          <motion.div className="item" drag dragConstraints={constraintsRef} />
        </motion.div>
      </div>
      <div></div>
    </div>
  );
};

export default App;

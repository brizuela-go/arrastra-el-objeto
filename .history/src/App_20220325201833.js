import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Example = () => {
  const constraintsRef = useRef(null);

  function App() {
    return (
      <div className="container">
        <h1 className="mt-5 text-center"> Arrastra el objeto</h1>
        <div className="mt-5">
          <motion.div className="container" ref={constraintsRef}>
            <motion.div
              className="item"
              drag
              dragConstraints={constraintsRef}
            />
          </motion.div>
        </div>
      </div>
    );
  }
};

export default App;

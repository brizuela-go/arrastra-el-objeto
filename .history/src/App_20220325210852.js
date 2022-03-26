import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const App = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="container">
      <h1 className="text-center text-white animate__animated animate__fadeIn">
        Arrastra el objeto
      </h1>
      <div className="mt-5 ms-3">
        <motion.div
          className="special_container animate__animated animate__fadeInUp"
          ref={constraintsRef}
        >
          <motion.div className="item" drag dragConstraints={constraintsRef} />
        </motion.div>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mKQSt0IyTVQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default App;

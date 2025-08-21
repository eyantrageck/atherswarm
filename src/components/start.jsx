import React from 'react';
import { motion } from 'framer-motion';

const Start = () => {
  return (
    <motion.div
      className="video-container w-[100vw] md:w-[80vw] lg:w-[40vw] rounded-xl overflow-hidden relative"
      initial={{
        boxShadow: "0px 0px 0px rgba(0, 123, 255, 0.2)", // Initial light blue shadow
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark background for contrast
      }}
      animate={{
        boxShadow: [
          "0px 0px 10px rgba(0, 123, 255, 0.5)", // Light blue shadow
          "0px 0px 20px rgba(0, 102, 204, 0.7)", // Medium blue shadow
          "0px 0px 30px rgba(0, 51, 102, 0.9)",  // Darker blue shadow
        ]
      }}
      transition={{
        duration: 2, // Duration for the animation to complete
        repeat: Infinity, // Infinite animation loop
        repeatType: "reverse", // Reverse animation each cycle
      }}
    >
      <video autoPlay loop muted className="background-video w-full h-full object-cover">
        <source src="./video/start.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default Start;

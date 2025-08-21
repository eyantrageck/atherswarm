import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import Start from "./components/start.jsx";
import Home from "./components/home.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Coordinator from "./components/coordinator.jsx";
import Representatives from "./components/representatives.jsx";
import Devloper from "./components/devloper.jsx";
import Contact from "./components/contact.jsx";
import Landing from "./components/landing.jsx";
import Participants from "./components/participants.jsx";
import OnGoing from "./components/onGoing.jsx";
import Facilities from "./components/facilities.jsx";
import Collabration from "./components/collabration.jsx";
import Exhibition from "./components/exhibition.jsx";
import Competition from "./components/competition.jsx";

import { Link } from "react-router-dom";

// Error Page Component
function ErrorPage() {
  return (
    <div className="mt-20 mb-20 flex flex-col justify-center items-center text-center p-6">
      <div className="text-9xl font-extrabold text-gray-800">404</div>
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p className="text-lg md:text-xl text-gray-600 mt-2">
        The page you're looking for doesn't exist or is under development.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

// Main App Component
function App() {
  const [visible, setVisible] = useState(true);

  // Handle key press to skip video
  const handleKeyPress = (event) => {
    if (event.key === " " || event.key === "Enter") {
      setVisible(false);
    }
  };

  // Hide video after 6 seconds or key press
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 6000); // Hide after 6 seconds if no key is pressed

      // Add keydown listener for Space or Enter key press
      window.addEventListener("keydown", handleKeyPress);

      // Cleanup listener on component unmount
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [visible]);

  return (
    <>
      {/* Show Video Animation First */}
      {visible ? (
        <motion.div
          className="animated-container w-[100vw] flex items-center justify-center h-[100vh] bg-black"
          onClick={() => setVisible(false)} // Also skip on click
        >
          <Start />
          <div className="text-orange-400 absolute bottom-5 right-5 cursor-pointer">Click to skip intro video</div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 2 }}
          className="relative min-h-screen overflow-hidden"
        >
          {/* Background Design */}
          <div className="absolute inset-0 -z-20"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-[#74cac2] blur-3xl rounded-full opacity-50"></div>
            <div className="absolute top-80 -right-20 w-[700px] h-[500px] bg-[#42a096] blur-3xl rounded-full opacity-30"></div>
            <div className="absolute top-1/3 -left-1/4 w-[800px] h-[600px] bg-[#74cac2] blur-3xl rounded-full opacity-30"></div>
            <div className="absolute top-[70%] right-0 w-[500px] h-[600px] bg-[#42a096] blur-3xl rounded-full opacity-20"></div>
            <div className="absolute top-[85%] -left-1/3 w-[1000px] h-[500px] bg-[#74cac2] blur-3xl rounded-full opacity-30"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col min-h-screen">
            <Router>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/eyantra" element={<Landing />} />
                  <Route path="/eyantra/about" element={<Home />} />
                  <Route
                    path="/eyantra/coordinator"
                    element={<Coordinator />}
                  />
                  <Route
                    path="/eyantra/student-representatives"
                    element={<Representatives />}
                  />
                  <Route path="/eyantra/developer" element={<Devloper />} />
                  <Route path="/eyantra/contact" element={<Contact />} />
                  <Route
                    path="/eyantra/participants"
                    element={<Participants />}
                  />
                  <Route
                    path="/eyantra/onGoingProjects"
                    element={<OnGoing />}
                  />
                  <Route
                    path="/eyantra/collaboration"
                    element={<Collabration />}
                  />
                  <Route path="/eyantra/facilities" element={<Facilities />} />
                  <Route path="/eyantra/exhibition" element={<Exhibition />} />
                  <Route path="/eyantra/documents" element={<Exhibition />} />
                  <Route path="/eyantra/video-lectures" element={<Exhibition />} />
                  <Route
                    path="/eyantra/competition"
                    element={<Competition />}
                  />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;

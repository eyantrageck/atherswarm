import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="">
      <div className="text-black pt-12 font-sans w-4/5 mx-auto">
        <header className="text-red-700  text-3xl font-medium pb-3">
          E-Yantra
        </header>
        <header className="text-2xl font-semibold">
          Message from the E-Yantra lab, GEC Kishanganj
        </header>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          The{" "}
          <span className="font-bold">
            E-Yantra Lab at Government Engineering College (GEC), Kishanganj,
          </span>{" "}
          warmly welcomes all students and faculty to explore the exciting world
          of interdisciplinary engineering. The lab primarily integrates the
          fields of{" "}
          <span className="font-bold">
            Electronics, Mechanical, and Electrical Engineering
          </span>
          , offering a collaborative space for innovation and hands-on learning.
          Students who enroll in this lab are exposed to a wide range of
          technical experiences, which are instrumental in bridging the gap
          between theoretical knowledge and practical application.
        </p>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          Equipped with{" "}
          <span className="font-bold">
            FDM 3D printers, a general-purpose board, state-of-the-art sensors,
            and a variety of small modules
          </span>
          , the lab provides the perfect environment for students to engage in
          robotics and other technical projects. These resources enable them to
          develop creative solutions to real-world challenges, enhancing their
          problem-solving abilities and preparing them for successful careers in
          the ever-evolving field of engineering.
        </p>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          Under the guidance of the E-Yantra coordinators, students are
          encouraged to take on multidisciplinary projects that foster teamwork,
          innovation, and technical expertise. It’s our mission to inspire and
          nurture the next generation of engineers by providing them with the
          tools and opportunities needed to thrive in a dynamic and competitive
          industry.
        </p>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          We look forward to witnessing the groundbreaking projects and
          remarkable growth of our students as they continue to explore and
          contribute to the world of robotics and engineering.
        </p>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          At the E-Yantra Lab, we are committed to inspiring and empowering the
          next generation of engineers.{" "}
          <span className="font-bold">
            Join us in this journey of growth, creativity, and excellence!
          </span>
        </p>
      </div>
      <div className="text-black font-sans w-4/5 mx-auto">
        <header className="text-2xl font-semibold">Why AetherSwarm</header>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
        We chose AetherSwarm because it perfectly represents our vision of innovation, intelligence, and collaboration.
        </p>
        <p className="text-gray-600 text-base pl-5 text-justify">
        Aether symbolizes the limitless possibilities of futuristic technology and the invisible connections between autonomous systems.
        </p>
        <p className="text-gray-600 text-base pl-5 text-justify">
        Swarm reflects the concept of swarm robotics, where multiple small robots work together harmoniously, like a colony of ants or a flock of birds, to accomplish complex tasks efficiently.
        </p>
      </div>
      <div className="text-black font-sans w-4/5 mx-auto">
        <header className="text-2xl font-semibold">Our Vision</header>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          AetherSwarm at GEC Kishanganj envisions a future where innovation,
          technology, and collaboration drive advancements in robotics. By
          integrating Electronics, Mechanical, Electrical, and Computer
          Engineering, we provide a platform for students to explore,
          experiment, and transform ideas into real-world solutions.
        </p>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          Through innovation-driven projects and industry-relevant workshops, we
          cultivate technical expertise, critical thinking, and teamwork,
          preparing students for the evolving world of automation and
          intelligent systems.
        </p>
        <p className="text-gray-600 text-base pt-4 pb-4 text-justify">
          Beyond technical skills, we foster perseverance, adaptability, and a
          problem-solving mindset. Our goal is to inspire members to push
          boundaries, embrace challenges, and develop robotics-driven solutions
          that impact society. By promoting mentorship and collaboration,
          AetherSwarm strives to shape future innovators who will redefine
          robotics and automation.
        </p>
      </div>
    </div>
  );
}

export default Home;

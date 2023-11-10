import React from "react";
import "../styles/Work.css";

const Work = () => {
  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="projects">
        {/* Here you would map over your projects and render them */}
        <div className="project">Project 1</div>
        <div className="project">Project 2</div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Work;

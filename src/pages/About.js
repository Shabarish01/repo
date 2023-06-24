import React from 'react';
import image1 from "../components/img/Mario_Adrian_1low.jpeg";
import image2 from "../components/img/Mario_Adrian_2up.jpg";
import "../CSS/About.css"
const aboutData = {
  title: "Little Lemon",
  subTitle: "Munich",
  description: "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.",
  image1,
  image2,
};

const About = () => {
  return (
    <section>
      <div className="app_section-about">
        <div className="app_about-content">
          <h1 className="app_about-title">{aboutData.title}</h1>
          <br />
          <h4 className="app_about-subtitle">{aboutData.subTitle}</h4>
          <br />
          <p className="app_about-description">
            {aboutData.description}
            <br />
          </p>
        </div>

        <div className="image-holder">
          <img className="about-1" src={image1} alt="Little Lemon restaurant cuisine 1" />
          <img className="about-2" src={image2} alt="Little Lemon restaurant cuisine 2" />
        </div>
      </div>
    </section>
  );
};

export default About;

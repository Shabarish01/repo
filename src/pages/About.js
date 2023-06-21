import React from 'react';
import image1 from "../components/img/Mario_Adrian_1low.jpeg";
import image2 from "../components/img/Mario_Adrian_2up.jpg";

const aboutData = {
  title: "Little Lemon",
  subTitle: "Munich",
  description: "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.",
  image1,
  image2,
};

const About = () => {
  return (
    <>
      <div className="app_section-about">
        <div className="app_about-description">
          <h1 className="app_about-title">{aboutData.title}</h1>
          <br />
          <h4 className="app_about-subtitle">{aboutData.subTitle}</h4>
          <br />
          <p className="app_about-description">
            {aboutData.description}
            <br />
            <br />
          </p>
        </div>

        <div className="app_about-image-holder">
          <div
            className="app_about-image-box img-box-1"
            style={{
              backgroundImage: `url(${aboutData.image2})`,
            }}
          />
          <div
            className="app_about-image-box img-box-2"
            style={{
              backgroundImage: `url(${aboutData.image1})`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
import React, { useEffect } from "react";
import ProfileCard from "./homepage/ProfileCard";

const About = () => {
  useEffect(() => {
    document.title = "Sarthak Vadgama | About";
  }, []);
  return (
    <>
      <ProfileCard />
    </>
  );
};

export default About;

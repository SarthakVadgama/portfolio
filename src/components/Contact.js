import React, { useEffect } from "react";
import ProfileCard from "./homepage/ProfileCard";

const Contact = () => {
  useEffect(() => {
    document.title = "Sarthak Vadgama | Contact";
  }, []);
  return (
    <>
      <ProfileCard />
    </>
  );
};

export default Contact;

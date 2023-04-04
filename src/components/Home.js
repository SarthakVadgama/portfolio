import React, { useEffect } from "react";
import MainCont from "./homepage/MainCont";
import ProfileCard from "./homepage/ProfileCard";

const Home = () => {
  useEffect(() => {
    document.title = "Sarthak Vadgama | Home";
  }, []);
  return (
    <>
      <ProfileCard />
      <MainCont />
    </>
  );
};

export default Home;

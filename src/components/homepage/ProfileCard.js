import React from "react";
import "../../css/ProfileCard.css";
import { Tilt } from "react-tilt";

const defaultOptions = {
  max: 5,
  scale: 1,
  speed: 1000,
};

const ProfileCard = () => {
  return (
    <>
      <div className="container mt-3 pt-5">
        <center className="my-5">
          <Tilt
            options={defaultOptions}
            style={{
              zIndex: "4",
              position: "relative",
              width: "auto",
              height: "auto",
            }}
          >
            <div className={`card cardBlur`} style={{ width: "100%" }}>
              <div className={`row nogutters`}>
                <div className="col col-md-4">
                  <span className={`DPbg`}>
                    <img
                      src={require("../../assets/Dp (2).jpg")}
                      className={`card-img-top m-3 DP`}
                      alt="..."
                    />
                  </span>
                  <img
                    src={require("../../assets/Dp (2).jpg")}
                    className={`card-img-top m-3 DP`}
                    alt="..."
                  />
                </div>
                <div
                  className="col col-md-6 card-body"
                  style={{ cursor: "default" }}
                >
                  <h2
                    className="card-title margin mt-3"
                    style={{ cursor: "default" }}
                  >
                    Sarthak Vadgama
                  </h2>
                  <p
                    className={`card-text margin my-3 fs-5`}
                    style={{ cursor: "default" }}
                  >
                    I am a full stack web developer with experience in building
                    and maintaining web applications using modern technologies
                    such as React, Node.js, MongoDB, Express, CSS3, Bootstrap,
                    TailwindCSS etc. I have a passion for creating
                    user-friendly, responsive, and scalable websites that solve
                    real-world problems. I enjoy learning new skills and
                    exploring new challenges in web development.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </center>
      </div>
    </>
  );
};

export default ProfileCard;

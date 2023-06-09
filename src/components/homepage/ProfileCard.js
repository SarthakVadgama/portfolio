import React, { useEffect, useRef } from "react";
import "../../css/ProfileCard.css";
import Pdf from "../../assets/Sarthaks_Resume.pdf";
import VanillaTilt from "vanilla-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const ProfileCard = () => {
  const defaultOptions = {
    max: 7,
    scale: 1,
    speed: 1000,
  };

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
                <div className="col col-sm-4">
                  <span className={`DPbg`}>
                    <LazyLoadImage
                      src={require("../../assets/Dp (2).jpg")}
                      className={`card-img-top m-3 DP`}
                      alt="..."
                      effect="blur"
                      placeholdersrc={require("../../assets/Dp (2).jpg")}
                    />
                  </span>
                  <LazyLoadImage
                    src={require("../../assets/Dp (2).jpg")}
                    className={`card-img-top m-3 DP`}
                    alt="..."
                    effect="blur"
                    placeholdersrc={require("../../assets/Dp (2).jpg")}
                  />
                </div>
                <div
                  className="col col-sm-6 card-body"
                  style={{ cursor: "default" }}
                >
                  <h2
                    className="card-title margin mt-2"
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
                  <a className="btn btn-light" href={Pdf} download>
                    Download my Resume
                  </a>
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

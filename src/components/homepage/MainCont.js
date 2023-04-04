import React from "react";
import "../../css/MainCont.css";

const MainCont = () => {
  return (
    <>
      <div className="container user-select-auto mb-2 py-5">
        <div className={`row g nogutters`}>
          <div className="col col-md-7 text-start user-select-auto">
            <h2>
              <span className={`Projs`}>My Projects</span>
            </h2>
            <div
              className="container mt-5"
              style={{ borderLeft: "white 2px solid", position: "relative" }}
            >
              {/* user interface */}

              <h5>
                <a
                  href="https://sarthakvadgama.github.io/MinimalisticUI/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Minimal UI <i className="bi bi-link-45deg"></i>{" "}
                </a>
                <span className="fs-6 text-warning-emphasis">
                  | Approx. around 2015, 2016
                </span>
              </h5>
              <p className="fs-6 text-white-50">
                This project was created to test self skills of designing a
                minimalistic embosed type user interface.
              </p>

              {/* certification */}

              <h5>
                <a
                  href="https://github.com/SarthakVadgama/CertVastPass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cert.vastpass.com <i className="bi bi-github fs-5"></i>{" "}
                  <span className="fs-6 text-warning-emphasis">
                    | Dec, 2019 -- Jan, 2020
                  </span>
                </a>
              </h5>
              <p className="fs-6 text-white-50 user-select-auto">
                This Freelance project was developed using html, css, php and
                javascript that was used to generate custom certificates for
                individual with their own details.
              </p>

              {/* spreadlight */}

              <h5>
                <a
                  href="https://www.spreadlight.nyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spreadlight.NYC <i className="bi bi-link-45deg"></i>{" "}
                </a>
                <span className="fs-6 text-warning-emphasis">
                  | April, 2020 -- Feb, 2021
                </span>
              </h5>
              <p className="fs-6 text-white-50">
                This Freelance project was developed using CMS website namely
                squarespace that was developed as per the requirements of my
                client.
              </p>

              {/* Student utils */}

              <h5>
                <a
                  href="https://sarthakvadgama.github.io/student-utility/#/student-utility/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Students Utility <i className="bi bi-link-45deg"></i>{" "}
                </a>
                <a
                  href="https://github.com/SarthakVadgama/student-utility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github fs-5"></i>{" "}
                </a>
                <span className="fs-6 text-warning-emphasis">
                  | Nov, 2022 -- Present
                </span>
              </h5>
              <p className="fs-6 text-white-50">
                This FullStack single page web App was developed as self
                improvement project that later turned into college project. This
                app is developed using ReactJS, nodeJS, Express, MongoDB etc.
                This is a fullstack application with backend implementation too.
                However on hosted site backend is not applicable as backend is
                not hosted but can have look at backend files from{" "}
                <a
                  href="https://github.com/SarthakVadgama/student-utility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link link-underline-primary"
                >
                  github
                </a>{" "}
                link.
              </p>

              {/* Portfolio myself */}

              <h5>
                <a
                  href="https://personal-blog-rust-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio (Self) <i className="bi bi-link-45deg"></i>{" "}
                </a>
                <a
                  href="https://github.com/SarthakVadgama/personal_blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github fs-5"></i>{" "}
                </a>
                <span className="fs-6 text-warning-emphasis">
                  | March, 2023 -- Present
                </span>
              </h5>
              <p className="fs-6 text-white-50">
                This project is the current website developed to represent
                myself in unique manner. This website is developed using NextJS
                (a react framework).
              </p>
            </div>
          </div>
          <div className="col col-md-5 text-start">
            <h2>
              <span className={`Skills`}>My Skills</span>
            </h2>
            <div
              className="container text-start mt-5"
              style={{ borderLeft: "white 2px solid" }}
            >
              <span className={`badge badgeSkills fs-6 m-2`}>CSS3</span>
              <span className={`badge badgeSkills fs-6 m-2`}>HTML5</span>
              <span className={`badge badgeSkills fs-6 m-2`}>JavaScript</span>
              <span className={`badge badgeSkills fs-6 m-2`}>NodeJS</span>
              <span className={`badge badgeSkills fs-6 m-2`}>ReactJS</span>
              <span className={`badge badgeSkills fs-6 m-2`}>PHP(Basic)</span>
              <span className={`badge badgeSkills fs-6 m-2`}>MongoDB</span>
              <span className={`badge badgeSkills fs-6 m-2`}>Express</span>
              <span className={`badge badgeSkills fs-6 m-2`}>MERN</span>
              <span className={`badge badgeSkills fs-6 m-2`}>Python</span>
              <span className={`badge badgeSkills fs-6 m-2`}>NextJS</span>
              <span className={`badge badgeSkills fs-6 m-2`}>VueJs</span>
              <span className={`badge badgeSkills fs-6 m-2`}>Adobe XD</span>
              <span className={`badge badgeSkills fs-6 m-2`}>Figma</span>
              <span className={`badge badgeSkills fs-6 m-2`}>Photoshop</span>
              <span className={`badge badgeSkills fs-6 m-2`}>Illustrator</span>
              <span className={`badge badgeSkills fs-6 m-2`}>
                After Effects
              </span>
              <span className={`badge badgeSkills fs-6 m-2`}>3d-modelling</span>
            </div>
            <br />
            <h2>
              <span className={`Edu`}>My Education</span>
            </h2>
            <div
              className="container text-start mt-5"
              style={{ borderLeft: "white 2px solid" }}
            >
              <h5>
                SSC (GSEB) <span className="fs-5 text-success">75.65%</span>{" "}
                <span className="fs-6 text-warning-emphasis">
                  | March, 2019
                </span>
              </h5>
              <p className="fs-6 text-white-50">From: Bright Day School</p>
              <h5>
                HSC (GSEB) <span className="fs-5 text-success">63.53%</span>{" "}
                <span className="fs-6 text-warning-emphasis">| May, 2021</span>
              </h5>
              <p className="fs-6 text-white-50">From: Bright Day School</p>
              <h5>
                B.E. - Computer Eng. (GTU){" "}
                <span className="fs-6 text-warning-emphasis">
                  | 2021 -- Present
                </span>
              </h5>
              <p className="fs-6 text-white-50">From: NTC (GTU)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCont;

import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <center>
        <footer id="footer" className={`footer mt-1 m-0`}>
          <div className="container py-2">
            <hr />
            <div className="container mb-2 mt-4">
              <div className="row g-3 text-center">
                <div className="col">
                  <h4>Connect with me through following handles</h4>
                </div>
                <div className="row mx-2 gy-3">
                  <div className="row fs-1" id="sarthF">
                    <a
                      href="https://github.com/SarthakVadgama/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/sarthak.vadgama.7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Avadgamasarthak%40gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col"
                    >
                      <i className="bi bi-envelope-plus"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sarthak-vadgama-324b48212/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`ending`}>
            <h6>Copyright &copy;2023 All rights reserved.</h6>
          </div>
        </footer>
      </center>
    </>
  );
};

export default Footer;

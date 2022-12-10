import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__left">
            <h3 className="footer__left--logo">IYW Job</h3>
            <p className="footer__left--des">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <p className="footer__left--contact">gmail: jwtjob@gmail.com</p>
          </div>
          <div className="footer__main">
            <div className="footer__company">
              <h5>Company</h5>
              <p>About IYW</p>
              <p>Browse Jobs</p>
              <p>Contact Us</p>
              <p>Candidate Dashboard</p>
            </div>
            <div className="footer__resource">
              <h5>Resources</h5>
              <p>Blog</p>
              <p>Post A Job</p>
              <p>Candidates</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="footer__right">
            <h5>Quick Contact</h5>
            <p>32, Wales Street, New York, USA</p>
            <p>0977542603</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

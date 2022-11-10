import React from "react";
import classes from "./Head.module.css";
import { Link } from "react-router-dom";
import logo from '../../digital opportunity trust.jpg'
const Head = () => {
  return (
    <>
      <section className={classes.HeadContainer}>
        <div className={classes.flexSB}>
          <div className={classes.LogoContainer}>
            <div className={classes.CompanyLogo}>
              <a href="/">
                <img
                  src={logo}
                  alt="Dot ethiopia logo"
                />
              </a>
            </div>
            <div>
             
            </div>
          </div>

          <div className={classes.SocialLinks}>
            <Link to="/" class="fab fa-linkedin icon"></Link>
            <Link to="/" class="fab fa-facebook icon"></Link>
            <Link to="/" className="fab fa-instagram icon"></Link>
            <Link to="/" className="fab fa-twitter icon"></Link>
            <Link to="/" className="fab fa-youtube icon"></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

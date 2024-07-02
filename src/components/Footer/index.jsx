import React from "react";
import styles from "./footer.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { ElectricBolt, X } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = ({ offsetValue }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <ParallaxLayer offsetValue={offsetValue} offset={offsetValue}>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.footerCol}>
                <h4>Legal</h4>
                <ul>
                  <li>
                    <Link to={`/privacy-policy`}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={`/terms-of-service`}>Terms of Service</Link>
                  </li>
                  <li>
                    <Link to={`/end-user-license-agreement`}>End User License Agreement</Link>
                  </li>
                  <li>
                    <Link to={`/api-license-agreement`}>API License Agreement</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <h4>Contact</h4>
                <ul>
                  <li>
                    <a href="mailto:hello@jippi.app">Email</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@jippi_app"
                      target="_blank"
                      rel="noreferrer">
                        Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <h4>Social</h4>
                <div className={styles.innerContainer}>
                  <a href="https://twitter.com/JippiApp">
                    <X />
                  </a>
                  <a href="https://stacker.news/Jippi">
                    <ElectricBolt />
                    <ElectricBolt className={styles.rotateBolt} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.copyright}>
              <p>Copyright © {year} Jippi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </ParallaxLayer>
    </>
  );
};

export default Footer;

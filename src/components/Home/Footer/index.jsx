// import classNames from "classnames";
import React from "react";
import styles from "./footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <ul>
              <li><a href="https://www.freeprivacypolicy.com/live/7e9a8f54-5d46-441e-b9ad-6a254c42e3d5" target="_blank" rel="noreferrer">privacy policy</a></li>
              <li><a href="https://drive.google.com/file/d/1U69BQjYODp1yvkbW4QJ7iad7wVtq07ya/view?usp=sharing" target="_blank" rel="noreferrer">terms of use</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Social</h4>
            <div className={styles.socialLinks}>
              <a href="#"><FacebookIcon/></a>
              <a href="#"><TwitterIcon/></a>
              <a href="#"><InstagramIcon/></a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © {year} Jippi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

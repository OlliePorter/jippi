import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const handlePrivacyClick = () => {
    const win = window.open(
      "https://www.freeprivacypolicy.com/live/7e9a8f54-5d46-441e-b9ad-6a254c42e3d5",
      "_blank"
    );
    return win.focus();
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePrivacyClick}>Privacy policy</button>
      <p>Copyright © {year} Jippi. All rights reserved.</p>
    </div>
  );
};

export default Footer;

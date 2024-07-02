import React, { useState } from "react";
import styles from "./whatsNext.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import Modal from 'react-modal';

const WhatsNext = () => {
  const [inView, setInView] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: "24px"
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    modalTitle: {
      fontSize: "32px",
      fontFamily: "Nunito",
    },
    closeButton: {
      fontSize: "32px",
      fontWeight: "bold",
      paddingBottom: "20px",
      cursor: "pointer"
    }
  };

  const openForm = async () =>  {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
        // @TS-ignore
        if (window.hbspt) {
            // @TS-ignore
            window.hbspt.forms.create({
                portalId: '44829060',
                formId: '61146cdd-6f35-4b5f-aa73-1b6ec438627c',
                target: '#hubspotForm'
            })
        }
    });
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    openForm();
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  Modal.defaultStyles.overlay.backgroundColor = '#0636454F';

  return (
    <div className={styles.cover}>
      <p className={styles.capitals}>
        WHAT'S NEXT
      </p>
      <p className={styles.title}>
        Join our beta
      </p>
      <img
        src="/path.png"
        alt="iPhone showing app education page"
        className={styles.image}
      />

      <div className={styles.container}>
      <div className={styles.spaceContainer}></div>
        <div className={styles.column}>
        <span className={styles.subtitle}>
        Sign up to the waitlist today or get in touch to help us meet our fundraising goal for our H2 2024 launch.
        </span>
        <div className={styles.row}>
        <button
          className={styles.navButton}
          onClick={openModal}
        >
          Register
        </button>
        <a href="mailto:hello@jippi.app" className={styles.navButtonTwo}>Get in Touch</a>
        </div>
      </div>
      <div className={styles.spaceContainer}></div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="modal"
        >
          <div style={customStyles.row}>
          <h2 style={customStyles.modalTitle}>Join the Waitlist</h2>
          <span style={customStyles.closeButton} onClick={closeModal}>&times;</span>
          </div>
          <div id="hubspotForm"></div>
      </Modal>
    </div> 
  );
};

export default WhatsNext;

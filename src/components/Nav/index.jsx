import React, { useState } from "react";
import classNames from "classnames";
import styles from "./nav.module.scss";
import Modal from 'react-modal';

const Nav = () => {
  const navClassNames = () => {
    return classNames(styles.nav, {
      [styles.navBlue]: true,
    });
  };

  // Uncomment to scroll to specific section of site
  // const handleScrollClick = () => {   
  //  if (!innerRef.current) return;

  //  return innerRef.current?.scrollTo(16);
  // };

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
    <div className={navClassNames()}>
      <div className={styles.jippiLogo} />
      <button
        className={styles.navButton}
        onClick={openModal}
      >
        Register
      </button>
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

export default Nav;

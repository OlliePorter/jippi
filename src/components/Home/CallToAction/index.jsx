import React, { useState } from "react";
import styles from "./callToAction.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import Modal from 'react-modal';

const CallToAction = ({ offsetValue, title, subtitle }) => {
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
    <div>
      <ParallaxLayer
        offset={offsetValue}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
            <div className={styles.cover}>
              <div className={styles.innerCover}>
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
                <div>
                  <img
                    src="/person_bubble.png"
                    alt="person"
                    className={styles.image}
                  />
                </div>
                <div className={styles.innerContainerOne}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.subtitle}>{subtitle}</p>
                  <div className={styles.innerContainerTwo}>
                    <img
                      onClick={openModal}
                      src="/app_store_badge.png"
                      alt="person"
                      className={styles.badge}
                    />
                    <img
                      onClick={openModal}
                      src="/google_play_badge.png"
                      alt="person"
                      className={styles.badge}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </div>
  );
};

export default CallToAction;

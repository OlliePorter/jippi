import React, { useState } from "react";
import styles from "./callToAction.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import Swal from 'sweetalert2'
import axios from 'axios';

const CallToAction = ({ offsetValue, title, subtitle }) => {
  const [inView, setInView] = useState(false);

  const imageClick = async () =>  {
    const { value: email } = await Swal.fire({
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jippi-mobile.appspot.com/o/assets%2Fcoming_soon.png?alt=media&token=4bf659d4-eaa6-48bd-acd8-36d93877cdef',
      imageHeight: 200,
      imageWidth: 200,
      imageAlt: 'A calendar image',
      title: 'Watch This Space',
      confirmButtonColor: '#171717',
      confirmButtonText: 'Sign Up',
      text: "Jippi isn't quite ready, but we're working tirelessly to have the app on Google Play and iOS by the end of 2023.",
      input: 'email',
      inputLabel: 'Stay up to date:',
      inputPlaceholder: 'Enter your email address',
      showCloseButton: true,
    })

    const handleSubmit = () => {
      const data = {
        Email: email,
        Timestamp: Date.now()
      }

      axios.post('https://sheet.best/api/sheets/84374f85-da40-461f-8d43-4cfd5cf38c67', data).catch((e) => {
        return Swal.fire({
          icon: 'error',
          title: "There was a problem",
          text: "Please try again",
          confirmButtonColor: '#171717',
          confirmButtonText: 'OK',
        })
      }).then((response) => {
        if (response.status === 200) {
        return Swal.fire({
          icon: 'success',
          title: "We'll be in touch",
          text: `${email}`,
          confirmButtonColor: '#171717',
          confirmButtonText: 'OK',
        })}
      });
    }

    if (email != null) {
      handleSubmit();
    }
  }


  return (
    <div>
      <ParallaxLayer
        offset={offsetValue}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
            <div className={styles.cover}>
              <div className={styles.innerCover}>
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
                      onClick={imageClick}
                      src="/app_store_badge.png"
                      alt="person"
                      className={styles.badge}
                    />
                    <img
                      onClick={imageClick}
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

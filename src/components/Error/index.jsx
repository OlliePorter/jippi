import { useRouteError } from "react-router-dom";
import styles from "./error.module.scss";

export default function ErrorPage() {
  // const error = useRouteError();
  // {error.statusText || error.message}

  return (
    <div className={styles.cover}>
      <img src="/jippi_blue_square.png" alt="jippi logo" className={styles.logo} />
      <p className={styles.title}>404</p>
      <p className={styles.paragraph}>Page not found.</p>
    </div>
  );
}
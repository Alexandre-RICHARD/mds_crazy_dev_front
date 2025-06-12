import type React from "react";

import globalStyles from "../../../App.module.scss";
import { Button } from "../../parts/Button/Button";
import styles from "./Homepage.module.scss";

export const Homepage = (): React.JSX.Element => {
  const titleSentence =
    "Avec Cosmo Match, faites graviter l'amour autour de vous";

  return (
    <div
      className={`${globalStyles.global_page} ${globalStyles.flex_center} ${styles.homepage_container}`}
    >
      <p className={styles.title_sentence}>{titleSentence}</p>
      <Button
        type="link"
        link="/account/register"
        label="S'inscrire"
        stylesType="styles_color"
      />
    </div>
  );
};

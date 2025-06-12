import React from "react";

import { Button } from "../Button/Button";
import styles from "./ProfilePart.module.scss";

type PropsType = {
  name: string;
  age: string;
  distance: string;
  gender: string;
};

export const ProfilePart = ({
  name,
  age,
  distance,
  gender,
}: PropsType): React.JSX.Element => {
  return (
    <div className={styles.profile_part_container}>
      <div className={styles.top_container}>
        <div className={styles.photo_container}>
          Une photo de profil à imaginer
        </div>
        <div className={styles.info_container}>
          <p>{name}</p>
          <p>{age}</p>
          <p>{distance}</p>
          <p>{gender}</p>
        </div>
      </div>
      <div className={styles.consult_button_container}>
        <Button
          label="Consulter le profil"
          stylesType="styles_color"
          type="button"
          onClick={() => {}}
          isDisabled={false}
        />
      </div>
    </div>
  );
};

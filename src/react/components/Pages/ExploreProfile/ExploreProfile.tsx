import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./ExploreProfile.module.scss";

export const ExploreProfile = (): React.JSX.Element => {
  return (
    <div
      className={`${globalStyles.global_page} ${globalStyles.flex_center} ${styles.explore_profile}`}
    >
      Cette page na pas encore été faites. Nan mais oh 2 jours, tu te rends
      compte les pirates ?
    </div>
  );
};

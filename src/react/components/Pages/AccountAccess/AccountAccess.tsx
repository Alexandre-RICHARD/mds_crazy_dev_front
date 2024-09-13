import type React from "react";
import { useLocation } from "react-router-dom";

import globalStyles from "../../../App.module.scss";
import styles from "./AccountAccess.module.scss";
import { Login } from "./Login";
import { Register } from "./Register";

export const AccountAccess = (): React.JSX.Element => {
  const { pathname } = useLocation();
  const isLoginMode = pathname.split("/")[2] === "login";

  return (
    <div
      className={`${globalStyles.global_page} ${globalStyles.flex_center} ${styles.account_access_container}`}
    >
      {isLoginMode ? <Login /> : <Register />}
    </div>
  );
};

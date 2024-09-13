import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Button.module.scss";

type Props = {
  label: string;
  stylesType:
    | "styles_color"
    | "styles_white"
    | "styles_border_color"
    | "styles_border_white";
} & (
  | {
      type: "button";
      onClick: () => void;
      isDisabled: boolean;
      link?: undefined;
      buttonSubmit?: boolean;
    }
  | {
      type: "link";
      onClick?: undefined;
      isDisabled?: undefined;
      link: string;
      buttonSubmit?: undefined;
    }
);

export const Button = ({
  type,
  stylesType,
  label,
  onClick,
  link,
  isDisabled,
  buttonSubmit,
}: Props): React.JSX.Element | null => {
  if (type === "button") {
    return (
      <div
        className={`${styles.button_custom_border} ${isDisabled ? styles.disable : ""} ${styles[stylesType]}`}
      >
        <button
          type={buttonSubmit ? "submit" : "button"}
          className={`${styles.button_custom} ${isDisabled ? styles.disable : ""} ${styles[stylesType]}`}
          onClick={isDisabled ? undefined : onClick}
        >
          {label}
        </button>
      </div>
    );
  }
  if (type === "link") {
    return (
      <div
        className={`${styles.button_custom_border} ${isDisabled ? styles.disable : ""} ${styles[stylesType]}`}
      >
        <NavLink
          to={link}
          className={`${styles.button_custom} ${isDisabled ? styles.disable : ""} ${styles[stylesType]}`}
          onClick={isDisabled ? undefined : onClick}
        >
          {label}
        </NavLink>
      </div>
    );
  }
  return null;
};

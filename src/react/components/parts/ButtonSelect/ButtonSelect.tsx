import React from "react";

import { DropdownArrow } from "../../icons/DropdownArrow";
import { IconContainer } from "../IconContainer/IconContainer";
import styles from "./ButtonSelect.module.scss";

type PropsType = {
  selectorId: string;
  label: string | React.JSX.Element;
  onClick: () => void;
};

export const ButtonSelect = ({
  selectorId,
  label,
  onClick,
}: PropsType): React.JSX.Element => {
  return (
    <button
      id={selectorId}
      type="button"
      className={styles.button_select}
      onClick={onClick}
    >
      {label}
      <IconContainer
        size="15px"
        margin="0 0 0 6px"
        color="#ffffff"
      >
        <DropdownArrow />
      </IconContainer>
    </button>
  );
};

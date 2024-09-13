import React from "react";

import styles from "./IconContainer.module.scss";

type PropsType = {
  children: React.JSX.Element;
  size: string;
  margin?: string;
  color?: string;
};

export const IconContainer = ({
  children,
  size,
  margin,
  color,
}: PropsType): React.JSX.Element => {
  return (
    <div
      style={{ width: size, height: size, margin, fill: color }}
      className={styles.icon_container}
    >
      {children}
    </div>
  );
};

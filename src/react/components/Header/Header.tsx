import type React from "react";
import { IoPlanetOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { NavLink, redirect } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { dynamicImageImporter } from "../../../helpers/images/dynamicImageImporter.helper";
import { useCombinedStore } from "../../../store/combined.store";
import { Button } from "../parts/Button/Button";
import styles from "./Header.module.scss";

export const Header = (): React.JSX.Element => {
  const [isUserConnected, setIsUserConnected, setUserData] = useCombinedStore(
    useShallow((state) => [
      state.isUserConnected,
      state.setIsUserConnected,
      state.setUserData,
    ]),
  );

  const handleDisconnect = () => {
    if (isUserConnected) {
      setIsUserConnected(false);
      setUserData(undefined);
      redirect("/");
    }
  };

  const labelTEMP = "Explorer l'univers de l'amour";

  return (
    <header className={styles.header}>
      <nav className={styles.nav_bar}>
        <NavLink
          className={styles.app_name_logo_container}
          to="/"
        >
          <img
            className={styles.logo_image}
            alt="logo of cosmo match app"
            src={dynamicImageImporter(`logo.png`)}
          />
          <p className={styles.app_name}>CosmoMatch</p>
        </NavLink>
        {isUserConnected ? (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.current_page : ""}`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/explore-profile"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.current_page : ""}`
              }
            >
              {labelTEMP}
            </NavLink>
            <NavLink
              to="/upgrade-premium"
              className={({ isActive }) =>
                `${styles.nav_link} ${styles.premium_link} ${isActive ? styles.current_page : ""}`
              }
            >
              Premium
            </NavLink>
            <div className={styles.header_icon_button_container}>
              <NavLink to="/profile">
                <IoPlanetOutline
                  color="white"
                  size="25px"
                />
              </NavLink>
              <button
                onClick={handleDisconnect}
                type="button"
              >
                <MdLogout
                  color="white"
                  size="25px"
                />
              </button>
            </div>
          </>
        ) : (
          <div className={styles.account_buttons_container}>
            <Button
              type="link"
              link="/account/login"
              label="Se connecter"
              stylesType="styles_border_white"
            />
            <Button
              type="link"
              link="/account/register"
              label="S'inscrire"
              stylesType="styles_color"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

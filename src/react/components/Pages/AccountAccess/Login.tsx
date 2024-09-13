import type React from "react";
import { useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

// import { fetcherHelper } from "../../../../helpers/api/fetcher.helper";
import { useCombinedStore } from "../../../../store/combined.store";
import { Button } from "../../parts/Button/Button";
import styles from "./AccountAccess.module.scss";

export const Login = (): React.JSX.Element => {
  const [setIsUserConnected] = useCombinedStore(
    useShallow((state) => [state.setIsUserConnected]),
  );

  const [email, setEmail] = useState("alexandrichard99@gmail.com");
  const [password, setPassword] = useState("azertyuiop");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (emailTesting: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailTesting);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Format de l'adresse mail invalide");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Format incorrect - 8 caractères minimum");
      valid = false;
    }

    if (valid) {
      const requestData = {
        email,
        password,
      };

      try {
        const response = await fetch("http://localhost:9000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        // Vérifie la réponse du serveur
        if (response.ok) {
          const responseData = response.json();
          console.log(responseData);
          redirect("/");
          setIsUserConnected(true);
        } else {
          const errorText = await response.text();
          console.log(errorText);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const changeModeLabel = "Pas de compte ?";

  return (
    <form onSubmit={handleLogin}>
      <div className={styles.account_handle_container}>
        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="login_email_input"
          >
            Adresse mail
          </label>
          <input
            className={`${styles.input_input} ${emailError ? styles.error_input : ""}`}
            type="email"
            id="login_email_input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && (
            <p className={styles.error_input_message}>{emailError}</p>
          )}
        </div>

        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="register_password_input"
          >
            Mot de passe
          </label>
          <input
            className={`${styles.input_input} ${passwordError ? styles.error_input : ""}`}
            type="password"
            id="register_password_input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && (
            <p className={styles.error_input_message}>{passwordError}</p>
          )}
        </div>
        <div className={styles.submit_button_container}>
          <Button
            label="Se connecter"
            stylesType="styles_color"
            type="button"
            isDisabled={false}
            buttonSubmit
            onClick={() => {}}
          />
        </div>
      </div>
      <div className={styles.bottom_account}>
        <NavLink
          to="/account/register"
          className={styles.change_mode}
        >
          {changeModeLabel}
        </NavLink>
      </div>
    </form>
  );
};

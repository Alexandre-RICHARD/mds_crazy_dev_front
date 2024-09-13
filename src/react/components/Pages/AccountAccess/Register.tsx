import type React from "react";
import { useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { genderDictionnary } from "../../../../dictionnaries/gender";
import { fetcherHelper } from "../../../../helpers/api/fetcher.helper";
import { useCombinedStore } from "../../../../store/combined.store";
import { Button } from "../../parts/Button/Button";
import { Selector } from "../../parts/Selector/Selector";
import styles from "./AccountAccess.module.scss";

export const Register = (): React.JSX.Element => {
  const [setIsUserConnected] = useCombinedStore(
    useShallow((state) => [state.setIsUserConnected]),
  );

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

  // const [description, setDescription] = useState("");
  // const [descriptionError, setDescriptionError] = useState("");

  const [age, setAge] = useState<number>();
  const [ageError, setAgeError] = useState("");

  // const [coordinateX, setCoordinateX] = useState("");
  // const [coordinateXError, setCoordinateXError] = useState("");

  // const [coordinateY, setCoordinateY] = useState("");
  // const [coordinateYError, setCoordinateYError] = useState("");

  // const [coordinateZ, setCoordinateZ] = useState("");
  // const [coordinateZError, setCoordinateZError] = useState("");

  const validateEmail = (emailTesting: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailTesting);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let valid = true;
    setGenderError("");
    setUserNameError("");
    setEmailError("");
    setPasswordError("");
    setPasswordConfirmationError("");
    // setDescriptionError("");
    setAgeError("");
    // setCoordinateXError("");
    // setCoordinateYError("");
    // setCoordinateZError("");

    if (!gender) setGenderError("Sélection obligatoire");

    if (!userName) setUserNameError("Champ vide");

    if (!validateEmail(email)) {
      setEmailError("Format de l'adresse mail invalide");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Format incorrect - 8 caractères minimum");
      valid = false;
    }

    if (password !== passwordConfirmation)
      setPasswordConfirmationError(
        "Les 2 mots de passe ne sont pas identiques",
      );

    if (!age || age < 0 || age > 14000000) setAgeError("Âge invalide");

    if (valid) {
      fetcherHelper({
        method: "POST",
        path: "/users",
        body: {
          email,
          password,
          name: userName,
          gender: genderDictionnary.find((genderF) => genderF.label === gender)
            ?.value,
          nickname: userName,
          description: "Default Description",
          color: "#ffffff",
          moonNumber: 0,
          localisation: `x: -148729660, y: 451864, Z: 892046285`,
          hasAtmosphere: false,
          image: "string",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            setGender("");
            setUserName("");
            setEmail("");
            setPassword("");
            setPasswordConfirmation("");
            // setDescription("");
            setAge(undefined);
            // setCoordinateX("");
            // setCoordinateY("");
            // setCoordinateZ("");

            redirect("/");
            setIsUserConnected(true);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const changeModeLabel = "J'ai déjà un compte";

  return (
    <form onSubmit={handleRegister}>
      <div className={styles.account_handle_container}>
        {/* Gender Selector */}
        <div className={styles.input_container}>
          <label className={styles.input_label}>Genre</label>
          <Selector
            id="astre_gender_selector"
            items={genderDictionnary.map((genderItem) => ({
              label: genderItem.label,
              value: genderItem.label,
            }))}
            label={gender || "Sélectionner votre genre"}
            onSelect={setGender}
            position="bottom-left"
          />
          {genderError && (
            <p className={styles.error_input_message}>{genderError}</p>
          )}
        </div>
        {/* User Name */}
        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="register_userName_input"
          >
            Nom
          </label>
          <input
            className={`${styles.input_input} ${userNameError ? styles.error_input : ""}`}
            type="text"
            id="register_userName_input"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          {userNameError && (
            <p className={styles.error_input_message}>{userNameError}</p>
          )}
        </div>
        {/* Mail */}
        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="register_email_input"
          >
            Adresse mail
          </label>
          <input
            className={`${styles.input_input} ${emailError ? styles.error_input : ""}`}
            type="email"
            id="register_email_input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && (
            <p className={styles.error_input_message}>{emailError}</p>
          )}
        </div>
        {/* Password */}
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
        {/* Password Confirmation */}
        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="register_password_confirmation_input"
          >
            Confirmation du mot de passe
          </label>
          <input
            className={`${styles.input_input} ${passwordConfirmationError ? styles.error_input : ""}`}
            type="password"
            id="register_password_confirmation_input"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
          {passwordConfirmationError && (
            <p className={styles.error_input_message}>
              {passwordConfirmationError}
            </p>
          )}
        </div>
        {/* Age number */}
        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="register_age_input"
          >
            Âge (en milliers d années)
          </label>
          <input
            className={`${styles.input_input} ${ageError ? styles.error_input : ""}`}
            type="number"
            id="register_age_input"
            value={age}
            max={14000000}
            min={0}
            step={1}
            onChange={(event) => setAge(parseInt(event.target.value, 10))}
          />
          {ageError && <p className={styles.error_input_message}>{ageError}</p>}
        </div>
        <div className={styles.submit_button_container}>
          <Button
            label="S'inscrire"
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
          to="/account/login"
          className={styles.change_mode}
        >
          {changeModeLabel}
        </NavLink>
      </div>
    </form>
  );
};

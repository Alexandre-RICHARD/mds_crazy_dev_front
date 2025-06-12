import type React from "react";
import { useShallow } from "zustand/react/shallow";

import { useCombinedStore } from "../../../../store/combined.store";
import globalStyles from "../../../App.module.scss";
import { ProfilePart } from "../../parts/ProfilePart/ProfilePart";
import styles from "./HomepageConnected.module.scss";

export const HomepageConnected = (): React.JSX.Element => {
  const [userData] = useCombinedStore(useShallow((state) => [state.userData]));

  const title = `Bienvenue ${userData?.name} ! Prêt à explorer les constellations d'opportunités
      galactiques ?`;

  return (
    <div
      className={`${globalStyles.global_page} ${styles.homepage_connected_container}`}
    >
      <h2 className={styles.welcome_title}>{title}</h2>
      <div className={styles.homepage_container}>
        <div className={styles.daily_suggestions}>
          <p>Ces profils vous intéresseront peut-être ?</p>
          <div className={styles.profile_container}>
            <ProfilePart
              age="2,5 Mds années"
              distance="1.73 années lumières de vous"
              name="Hensworth"
              gender="Planètes telluriques"
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.cosmo_container}>
        <section className="suggestions-section">
          <h2>Vos Suggestions Galactiques</h2>
          <div className="profile-grid">
            {["Mars", "Sirius", "Vénus", "Andromède"].map((astro, index) => (
              <div
                key={index}
                className="astro-card"
              >
                <img
                  src={`/${astro.toLowerCase()}.png`}
                  alt={astro}
                  className="astro-image"
                />
                <h3>{astro}</h3>
                <p>Type : {index % 2 === 0 ? "Planète" : "Étoile"}</p>
                <p>Description : Un astre fascinant à explorer.</p>
                <button>En savoir plus</button>
                <button className="like-btn">J'aime</button>
              </div>
            ))}
          </div>
        </section>

        <section className="recent-activities-section">
          <h2>Activités Récentes</h2>
          <ul>
            <li>Vous avez échangé des messages avec Jupiter.</li>
            <li>Sirius a visité votre profil.</li>
            <li>Vous avez reçu un "J'aime" de Vénus.</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>À propos de CosmoConnect</h2>
          <p>
            CosmoConnect est un site où les astres de l'univers peuvent se
            rencontrer, échanger et se connecter. Que vous soyez une planète,
            une étoile, ou une galaxie entière, il y a toujours quelqu'un avec
            qui partager votre lumière !
          </p>
        </section>
      </div> */}
    </div>
  );
};

import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import { useCombinedStore } from "../store/combined.store";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";

export const App = (): React.JSX.Element => {
  const [setNumber] = useCombinedStore(
    useShallow((state) => [state.setNumber]),
  );

  useEffect(() => setNumber(Math.floor(Math.random() * 10000)), [setNumber]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

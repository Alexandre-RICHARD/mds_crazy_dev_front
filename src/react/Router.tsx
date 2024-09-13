import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { useCombinedStore } from "../store/combined.store";
import { AccountAccess } from "./components/Pages/AccountAccess/AccountAccess";
import { ExploreProfile } from "./components/Pages/ExploreProfile/ExploreProfile";
import { Homepage } from "./components/Pages/Homepage/Homepage";
import { HomepageConnected } from "./components/Pages/HomepageConnected/HomepageConnected";
import { Premium } from "./components/Pages/Premium/Premium";
import { Profile } from "./components/Pages/Profile/Profile";

export const Router = (): React.JSX.Element => {
  const [isUserConnected] = useCombinedStore(
    useShallow((state) => [state.isUserConnected]),
  );

  return (
    <Routes>
      <Route
        path="/"
        element={isUserConnected ? <HomepageConnected /> : <Homepage />}
      />
      <Route
        path="/account/*"
        element={
          isUserConnected ? (
            <Navigate
              replace
              to="/"
            />
          ) : (
            <AccountAccess />
          )
        }
      />
      <Route
        path="/explore-profile"
        element={
          isUserConnected ? (
            <ExploreProfile />
          ) : (
            <Navigate
              replace
              to="/"
            />
          )
        }
      />
      <Route
        path="/upgrade-premium"
        element={
          isUserConnected ? (
            <Premium />
          ) : (
            <Navigate
              replace
              to="/"
            />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isUserConnected ? (
            <Profile />
          ) : (
            <Navigate
              replace
              to="/"
            />
          )
        }
      />
    </Routes>
  );
};

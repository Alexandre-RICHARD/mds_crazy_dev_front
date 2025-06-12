import type { StateCreator } from "zustand";

import type { DefaultStoreType } from "./default.store.type";

export const useTranslationStore: StateCreator<DefaultStoreType> = (set) => ({
  number: 1,
  setNumber: (payload) => set(() => ({ number: payload })),
  isUserConnected: false,
  setIsUserConnected: (payload) => set(() => ({ isUserConnected: payload })),

  userData: undefined,
  setUserData: (payload) => set(() => ({ userData: payload })),
});

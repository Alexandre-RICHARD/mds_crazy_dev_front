import type { UserData } from "./userData.type";

export type DefaultStoreType = {
  number: number;
  setNumber: (payload: number) => void;
  isUserConnected: boolean;
  setIsUserConnected: (payload: boolean) => void;
  userData: UserData | undefined;
  setUserData: (payload: UserData | undefined) => void;
};

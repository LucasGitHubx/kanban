import { create } from "zustand";
import { User } from "firebase/auth";

interface UserState {
  user: User | null;
  setUser: (authUser: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (authUser) =>
    set(() => ({
      user: authUser,
    })),
}));

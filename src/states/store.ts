import { create } from 'zustand';
import LocalStorage from './storage';

interface AuthState {
  isLoggedin: boolean;
  setUser: (val: boolean) => void;
  loadUser: () => Promise<void>;
}

export const AuthStore = create<AuthState>(set => ({
  isLoggedin: false,
  setUser: val => set(() => ({ isLoggedin: val })),
  loadUser: async () => {
    const saved = await LocalStorage.getItem<boolean>('isLoggedIn');
    if (saved !== null) {
      set({ isLoggedin: saved });
    }
  },
}));

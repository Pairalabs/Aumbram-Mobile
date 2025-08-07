import { create } from 'zustand'

interface AuthState {
    isLoggedin: boolean;
    setUser: (val: boolean) => void;
}

export const AuthStore = create<AuthState>((set) => ({
    isLoggedin: false,
    setUser: (val) => set(() => ({ isLoggedin: val}))
}));

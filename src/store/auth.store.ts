import { create } from "zustand";

interface AuthState {
  status: "authenticated" | "unauthenticated" | "checking";
  token?: string;
  user?: User;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  token: undefined,
  user: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (email: string, _password: string) => {
    set({
      status: "authenticated",
      token: "1234567890",
      user: {
        name: "John Doe",
        email,
      },
    });
  },
  logout: () => {
    set({
      status: "unauthenticated",
      token: undefined,
      user: undefined,
    });
  },
}));

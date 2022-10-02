import React, { createContext, useContext, useState } from "react";

import { AuthContext as AuthContextT, User } from "../types/client";

const AuthContext = createContext<AuthContextT>(null!);

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(() => {
    const cookies = document.cookie.split(";");
    const session = cookies
      .find((key) => key.includes("session"))
      ?.split("=")[1];
    const username = cookies
      .find((key) => key.includes("username"))
      ?.split("=")[1];
    return { session: session!, username: username! };
  });

  async function login(
    username: string,
    password: string,
    callback: VoidFunction
  ) {
    setUser({ session: "secret", username });
    callback();
  }

  function logout(callback: VoidFunction) {
    setUser(null!);
    document.cookie = "";
    callback();
  }

  const value = { user, login, logout };
  const props = { value, children };

  return <AuthContext.Provider {...props}></AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

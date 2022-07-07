import React, { createContext, useContext, useState } from "react";

import { AuthContext as AuthContextT, User } from "../types/client";

const AuthContext = createContext<AuthContextT>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
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
    const body = JSON.stringify({ username, password });
    const url = new URL("public/v2/login", window.location.origin);
    const res = await fetch(url, { method: "POST", body }); // fetch token from server and set it in user object
    if (res.ok) {
      const body = await res.json();
      console.log(body);
      setUser(body);
    }
    callback();
  }

  function logout(callback: VoidFunction) {
    setUser(null!);
    document.cookie = "";
    callback();
  }

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

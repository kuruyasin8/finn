import React, { createContext, useContext, useState } from "react";

import { AuthContext as AuthContextT, User } from "../types/client";

const AuthContext = createContext<AuthContextT>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
    return null;
  });

  async function login(
    username: string,
    password: string,
    callback?: VoidFunction
  ) {
    // set token
    console.log(
      "fetching token from server with username:",
      username,
      "and password:",
      password
    );
    await fetch("google.com"); // fetch token from server and set it in user object
    const user: User = {
      token: "abc",
      username,
    };
    setUser(user);
    const stringifed = JSON.stringify(user);
    localStorage.setItem("user", stringifed);
    if (callback) callback();
  }

  function logout(callback?: VoidFunction) {
    // set token free
    setUser(null!);
    localStorage.removeItem("user");
    if (callback) callback();
  }

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

import React, { createContext, useContext, useMemo } from "react";

import { AuthContext as AuthContextT } from "../types/client";

const AuthContext = createContext<AuthContextT>({
  is: false,
  login: async function () {},
  logout: function () {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  function login() {
    localStorage.setItem("auth", "true");
    auth.is = true;
    console.log("login called from authprovider");
  }

  function logout() {
    localStorage.removeItem("auth");
    auth.is = false;
    console.log("logout called from authprovider");
  }

  const mem = useMemo(() => {
    return {
      is: false,
      login: async function (username: string, password: string) {
        console.log("login called");
        await fetch("google.com");

        localStorage.setItem("token", "abc");

        if (localStorage.getItem("token")) this.is = true;
      },
      logout: function () {
        console.log("logout called");
        this.is = false;
      },
    };
  }, [auth]);
  return <AuthContext.Provider value={mem}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

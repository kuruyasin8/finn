import { Cookie } from "../types/client";

function parseCookies(): Cookie {
  const cookie: Cookie = {
    sessionId: "",
  };

  const pairs = document.cookie.split(";");

  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key === "sessionId") {
      cookie.sessionId = value;
    }
  }

  return cookie;
}

export { parseCookies };

type User = {
  token: string;
  username: string;
};

type AuthContext = {
  user: User;
  login: (
    username: string,
    password: string,
    callback?: VoidFunction
  ) => Promise<void>;
  logout: (callback?: VoidFunction) => void;
};

type Cookie = {
  sessionId: string;
};

export type { Cookie, User, AuthContext };

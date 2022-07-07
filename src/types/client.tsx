type User = {
  id: number;
  username: string;
  password: string;
};

type AuthContext = {
  is: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

type Cookie = {
  sessionId: string;
} | null;

export type { Cookie, User, AuthContext };

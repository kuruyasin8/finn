import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

import { Button } from "../designs/Button";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={async () => {
          await auth.login("kuruyasin8@gmail.com", "378797Yk", () =>
            navigate("/")
          );
        }}
        style={{ width: 70, height: 40 }}
      >
        sign in
      </Button>
    </>
  );
}

export { Login };

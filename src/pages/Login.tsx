import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={async () => {
          await auth.login("kuruyasin", "378797Yk");
          navigate("/");
        }}
        style={{ width: 70, height: 40 }}
      >
        sign in
      </button>
    </>
  );
}

export { Login };

import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  if (!auth.user) return <Navigate to="/login" />;
  return children;
}

export { ProtectedRoute };

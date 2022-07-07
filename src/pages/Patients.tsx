import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { useAuth } from "../auth/AuthProvider";
import { Patient as PatientT } from "../types/api";
import { Patient } from "../designs/Patient";

function Patients() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const { data, status } = useQuery<PatientT[]>("patients", fetchPatients);

  return (
    <div>
      <h1>{status}</h1>
      {data?.map((patient) => {
        return <Patient key={patient.id} {...patient} />;
      })}
      <button onClick={() => logout(() => navigate("/"))}>sign out</button>
    </div>
  );
}

async function fetchPatients() {
  const url = new URL("public/v2/users", window.location.origin);
  const res = await fetch(url);
  return res.json();
}

export { Patients };

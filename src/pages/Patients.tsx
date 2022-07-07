import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { httpGet } from "../lib/network";
import { Patient } from "../types/api";
import { useAuth } from "../auth/AuthProvider";

function Patients() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [patients, setPatients] = useState<Array<Patient>>([]);

  useEffect(function () {
    const fetchPatients = async () => httpGet("public/v2/users");

    fetchPatients()
      .then((patients) => setPatients(patients))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {patients.map((patient) => {
        return (
          <p key={patient.id}>
            <a onClick={() => navigate("/patients/" + patient.id)}>
              {patient.name}
            </a>
            {" " + patient.gender}
          </p>
        );
      })}
      <button
        onClick={() => {
          auth.logout();
          return navigate("/");
        }}
      >
        sign out
      </button>
    </div>
  );
}

export { Patients };

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Patient as PatientT } from "../types/api";
import { Patient as PatientCard } from "../designs/Patient";

function Patient() {
  const { id } = useParams();

  const { data, status } = useQuery<PatientT>(["patient", id], () =>
    fetchPatient(Number(id))
  );

  return (
    <div>
      <h1>{status}</h1>
      <PatientCard {...data!} />
    </div>
  );
}

async function fetchPatient(id: number) {
  const url = new URL("public/v2/users/" + id, window.location.origin);
  const res = await fetch(url);
  return res.json();
}

export { Patient };

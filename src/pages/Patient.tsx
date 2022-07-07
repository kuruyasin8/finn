import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { httpGet } from "../lib/network";
import { Patient as PatientT } from "../types/api";

function Patient() {
  const { id } = useParams();

  const [patient, setPatient] = useState<PatientT>();

  useEffect(function () {
    const fetchPatient = async () => httpGet("public/v2/users/" + id);

    fetchPatient()
      .then((patient) => setPatient(patient))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <p>this is a profile page for {patient?.name}</p>
      <p>gender is {patient?.gender}</p>
      <p>email is {patient?.email}</p>
      <p>status is {patient?.status}</p>
    </>
  );
}

export { Patient };

// **** never define functions inside functions ***** //
// **** this will cause function to be defined every time the component is rendered ***** //
// function saveUserToLocalStorage(user: User | undefined) {
//   if (user === undefined) return Error("User is undefined");
//   localStorage.setItem("user", JSON.stringify(user));
// }

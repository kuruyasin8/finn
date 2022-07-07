import { useNavigate } from "react-router-dom";

import { Patient as PatientT } from "../types/api";

interface PatientProps extends PatientT {}

function Patient({ id, name, email, gender, status }: PatientProps) {
  const navigate = useNavigate();
  return (
    <div>
      <a onClick={() => navigate("/patients/" + id)}>{name}</a>
      <p>
        {email} {gender}
      </p>
    </div>
  );
}

export { Patient };

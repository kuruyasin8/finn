import { useNavigate } from "react-router-dom";

import { Report as ReportT } from "../types/api";

interface ReportProps extends ReportT {}

function Report({ id, title, body, user_id }: ReportProps) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <a onClick={() => navigate("/patients/" + id)}>{user_id}</a>
    </div>
  );
}

export { Report };

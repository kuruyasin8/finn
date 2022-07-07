import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { httpGet } from "../lib/network";
import { Report as ReportT } from "../types/api";

function Report() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [report, setReport] = useState<ReportT>();

  useEffect(function () {
    const fetchReport = async () => httpGet("public/v2/posts/" + id);

    fetchReport()
      .then((report) => setReport(report))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>{report?.title}</h1>
      <h2>{report?.body}</h2>
      <a onClick={() => navigate("/patients/" + report?.user_id)}>
        go to patient
      </a>
    </>
  );
}

export { Report };

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { httpGet } from "../lib/network";
import { Report } from "../types/api";

function Reports() {
  const navigate = useNavigate();
  const [reports, setReports] = useState<Array<Report>>([]);

  useEffect(function () {
    const fetchReports = async () => httpGet("public/v2/posts");

    fetchReports()
      .then((reports) => setReports(reports))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {reports.map((report) => {
        return (
          <>
            <h1>
              <a onClick={() => navigate("/reports/" + report.id)}>
                {report.title}
              </a>
            </h1>
            <h2>{report.body}</h2>
          </>
        );
      })}
    </div>
  );
}

export { Reports };

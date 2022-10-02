import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Report as ReportT } from "../types/api";
import { Report as ReportCard } from "../designs/Report";

function Report() {
  const { id } = useParams();

  const { data, status } = useQuery<ReportT>("report", () =>
    fetchReport(Number(id))
  );

  return (
    <div>
      <h1>{status}</h1>
      <ReportCard {...data!} />
    </div>
  );
}

async function fetchReport(id: number) {
  const url = new URL("public/v2/posts" + id, process.env.REACT_APP_API_URL!);
  const res = await fetch(url);
  return res.json();
}

export { Report };

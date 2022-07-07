import { useQuery } from "react-query";

import { Report } from "../types/api";
import { Report as ReportCard } from "../designs/Report";

function Reports() {
  const { data, status } = useQuery<Report[]>("reports", fetchReports);

  return (
    <div>
      <h1>{status}</h1>
      {data?.map((report) => {
        return <ReportCard {...report} />;
      })}
    </div>
  );
}

async function fetchReports() {
  const url = new URL("public/v2/posts", window.location.origin);
  const res = await fetch(url);
  return res.json();
}

export { Reports };

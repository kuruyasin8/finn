type Patient = {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
};

type Report = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type { Patient, Report };

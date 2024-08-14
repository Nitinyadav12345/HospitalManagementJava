import axios from "axios";
import config, { config2 } from "../config";

export async function patientRegistration({
  bloodgroup,
  dob,
  disease,
  doa,
  userId,
  bedno,
}) {
  const token = sessionStorage.getItem("token");
  const body = { bloodgroup, dob, disease, doa, userId, bedno };
  const result = await axios.post(`${config2.url}/patient/register`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

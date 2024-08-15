import axios from "axios";
import config, { config2 } from "../config";

export async function patientRegistration({
  bloodgroup,
  dob,
  disease,
  doa,
  userId,
  bedno,
  isadmit,
}) {
  const token = sessionStorage.getItem("token");
  const body = { bloodgroup, dob, disease, doa, userId, bedno, isadmit };
  const result = await axios.post(`${config2.url}/patient/register`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function getAdmitedPatients() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/patient/admitedpatients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function dischargePatient({ id }) {
  const token = sessionStorage.getItem("token");
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const body = { dod: formattedDate, id };
  const result = await axios.post(`${config2.url}/patient/discharge`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

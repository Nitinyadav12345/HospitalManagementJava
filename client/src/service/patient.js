import axios from "axios";
import config, { config2 } from "../config";

export async function bookAppointment({
  status,
  appdate,
  doctorId,
  patientId,
}) {
  const token = sessionStorage.getItem("token");
  const body = {
    status,
    appdate,
    doctorId,
    patientId,
  };
  const result = await axios.post(`${config2.url}/appointment/bookapp`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function getPatientId() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/patient/patient`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function getAllAppointment({ id }) {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/appointment/patient/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function cancelAppointment({ status, id }) {
  const token = sessionStorage.getItem("token");
  const body = { status, id };
  const result = await axios.post(
    `${config2.url}/appointment/updatestatus`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result;
}

export async function updatePatientdetails({
  bloodgroup,
  dob,
  disease,
  doa,
  bedno,
  isadmit,
}) {
  const token = sessionStorage.getItem("token");
  const body = { bloodgroup, dob, disease, doa, bedno, isadmit };
  const result = await axios.post(`${config2.url}/patient/update`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

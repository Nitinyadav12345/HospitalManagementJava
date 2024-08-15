import axios from "axios";
import { config2 } from "../config";
import { connect } from "react-redux";

export async function getAllPatient() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/patient/patients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function addPress({ id, prescription }) {
  const body = { id, prescription };
  const token = sessionStorage.getItem("token");
  const result = await axios.post(
    `${config2.url}/patient/addPrescription`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result;
}

export async function getDoctorId() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/employee/getid`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function getAppointmentByDoctorId({ id }) {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/appointment/doctor/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

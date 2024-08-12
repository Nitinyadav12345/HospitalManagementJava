import axios from "axios";
import config, { config2 } from "../config";

export async function insertMedicine(formData) {
  console.log(formData);
  const token = sessionStorage.getItem("token");
  const result = await axios.post(
    `${config2.url}/chemist/medicine/insert`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result;
}

export async function getAllMedicine() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/chemist/medicine`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function deleteMedicine({ id }) {
  const token = sessionStorage.getItem("token");
  const result = await axios.delete(`${config2.url}/chemist/medicine/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function insertPayment(paymentData) {
  const token = sessionStorage.getItem("token");
  const result = await axios.post(`${config2.url}/api/payments`, paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

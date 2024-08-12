import axios from "axios";
import config, { config2 } from "../config";

const token = sessionStorage.getItem("token");

export async function insertMedicine(formData) {
  console.log(formData);
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
  const result = await axios.get(`${config2.url}/chemist/medicine`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

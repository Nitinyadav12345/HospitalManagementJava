import axios from "axios";
import config, { config2 } from "../config";

export async function userRegistration({
  name,
  email,
  password,
  phoneNumber,
  role,
}) {
  const body = {
    name,
    email,
    password,
    phoneNumber,
    role,
  };

  const result = await axios.post(`${config2.url}/user/register`, body);
  return result;
}

export async function employeeRegistration({
  doj,
  dob,
  salary,
  charges,
  department,
  userid,
}) {
  const body = { doj, dob, salary, charges, department, userid };
  const token = sessionStorage.getItem("token");
  const result = await axios.post(`${config2.url}/employee/register`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

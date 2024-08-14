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

export async function employeelist() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/employee/employees`);
  return result;
}

export async function deleteEmp({ id }) {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/employee/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}

export async function revenueGenrator() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/api/payments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const arr = result.data.data;
  const totalFees = arr.reduce((sum, bill) => sum + bill.fees, 0);
  return totalFees;
}

export async function getAllPayments() {
  const token = sessionStorage.getItem("token");
  const result = await axios.get(`${config2.url}/api/payments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
}


export async function uploadUserImage({image ,userid}) {
    const token = sessionStorage.getItem("token");
    const res = await axios.post(
        `${config2.url}/user/profileImage/${userid}` , image ,{
            headers:{
                'Content-Type':'multipart/form-data',
                Authorization:`Bearer ${token}`
            }
        }
    );
    return res;
}
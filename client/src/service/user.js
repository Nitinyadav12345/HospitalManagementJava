import axios from "axios";
import config, { config2 } from "../config";

export async function registerUser({
  name,
  email,
  phoneNumber,
  password,
  role,
}) {
  //body parameter
  const body = {
    name,
    email,
    phoneNumber,
    password,
    role,
  };
  //make API call
  const response = await axios.post(`${config2.url}/user/register`, body, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
  return response.data;
}

export async function login(email, password) {
  const body = {
    email,
    password,
  };
  const response = await axios.post(`${config2.url}/user/login`, body, {
    validateStatus: function (status) {
      return status < 500;
    },
  });

  return response.data;
}

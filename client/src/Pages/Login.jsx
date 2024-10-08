import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../Validations/validation";
import { toast } from "react-toastify";
import { login } from "../service/user";
import { loginAction } from "../features/userSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user.loginStatus);
  const roleRoutes = {
    DOCTOR: `/doctor`,
    ADMIN: `/admin`,
    PATIENT: `/patient`,
    CHEMIST: `/chemist`,
    RECEPTIONIST: `/receptionist`,
  };
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const onLogin = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      toast.warning("Enter a valid email");
    } else if (password.length == 0) {
      toast.warning("Enter a password ");
    } else {
      try {
        const result = await login(email, password);
        console.log(result);
        if (result.status === "Success") {
          toast.success("Login successful!");
          const token = result["token"];
          console.log(token);
          const decodedToken = jwtDecode(token);
          console.log(decodedToken);
          sessionStorage.token = token;
          // Navigate based on role or to a specific page
          const route = roleRoutes[decodedToken.authorities];
          if (route) {
            navigate(route);
          }
          dispatch(loginAction);
          console.log(loginStatus);
        } else if ((result.status = "error")) {
          toast.error(result.data + " Login failed");
        } else {
          toast.error("Login failed");
        }
      } catch (error) {
        toast.error("An error occurred during login");
      }
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 border rounded-3xl">
        <div className="flex justify-center items-center p-5">
          <form onSubmit={onLogin} method="Post">
            <h1 className="text-center mb-10 font-bold text-4xl">LOGIN HERE</h1>
            <input
              type="email"
              className="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex mb-4">
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-pink-400 hover:bg-pink-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white ml-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
            <span className="text-center">
              Don't have an account? Register
              <Link to="/register" className="font-bold underline mx-2">
                here
              </Link>
            </span>
          </form>
        </div>
        <div className="bg-gradient-to-r from-[#E4F9F5] to-[#5038ED] rounded-sm flex items-center justify-center">
          <img
            src="../../Resources/doctor.png"
            className="rounded-3xl"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

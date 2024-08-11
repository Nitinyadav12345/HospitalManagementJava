import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, validatePhone } from "../Validations/validation";
import { toast } from "react-toastify";
import { registerUser } from "../service/user";

const Register = () => {
  const [registerForm , setRegisterForm] = useState({email :"" , name:"",phoneNumber:"",password:"", cnfpassword:"" , role:"PATIENT"});
  const navigate = useNavigate();

  const onRegister = async (event) =>{
    event.preventDefault();
    console.log(registerForm)
    if(!validateEmail(registerForm.email)){
      toast.warn("enter valid email");
    }else if(registerForm.name.length == 0){
      toast.warn("plz enter name")
    }
    else if(!validatePhone(registerForm.phoneNumber)){
      toast.warn("enter a valid phone")
    }else if(!validatePassword(registerForm.password)){
      toast.warn("enter valid password")
    }
    else if(registerForm.cnfpassword !== registerForm.password){
        toast.warn("confirm password is not same as password")
    }else{
      try{
          const result = await registerUser(registerForm);
          console.log(result);
          if(result.status === "Success"){
            toast.success("Patient Register Successfully ");
          navigate("/");}
          else{
            toast.error(toast.data)
          }
      }catch(error){
        toast.error("error occurred during register")
      }
    }
  }

  const handleCancel = () => {
    setRegisterForm({...registerForm,email:"",name:'',password:"",cnfpassword:"",phoneNumber:""})
  };
  return (
    <>
      <div className ="flex justify-center items-center md:h-screen p-10 ">
        <div className ="grid md:grid-cols-2 grid-cols-1  border rounded-3xl">
          <div className ="flex justify-center items-center p-5">
            <form >
              <h1 className ="text-center mb-10 font-bold text-4xl">
                PATIENT CAN REGISTER HERE
              </h1>
              <input
                type="email"
                className =" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Email"
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  email: e.target.value
                })}
              />
              <input
                type="text"
                className =" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Name"
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  name: e.target.value
                })}
              />
              <input
                type="text"
                className =" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Phone"
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  phoneNumber: e.target.value
                })}
              />
              
              <input
                type="Password"
                className =" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Password"
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  password: e.target.value
                })}
              />
              <input
                type="Password"
                className =" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
                placeholder="Confirm Password"
                onChange={(e) => setRegisterForm({
                  ...registerForm,
                  cnfpassword: e.target.value
                })}
              />
              <div className="flex">
                <button
                  type="submit"
                  className =" bg-blue-400 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
                  onClick={onRegister}
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className =" bg-pink-400 hover:bg-pink-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
              <div className="mt-5">
                <span className ="text-center">
                  alredy have account login
                  <Link to="/login" className="font-bold underline mx-2">
                    here
                  </Link>
                </span>
              </div>
            </form>
          </div>
          <div className ="bg-gradient-to-r from-[#E4F9F5] to-[#5038ED] rounded-sm flex  items-center justify-center">
            <img src="../../Resources/doctor.png" className ="rounded-3xl" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import axios from "axios"
import config ,{config2} from "../config"

export async function registerUser(email,password,role){
    //body parameters
    const body={
        Name,email,password,phoneNumber
    }
    //make API call 
    const response = await axios.post(`${config2.url}/user/register`,body,{
        validateStatus: function (status){
            return status < 500;
        }
    })
    return response.data;
}



export async function login(email,password,role) {
    const body = {
        email,
        password,
        role
    }
    const response = await axios.post(`${config2.url}/user/login`, body,{
        validateStatus: function (status){
            return status < 500;
        }})

    return response.data;
}
import axios from '../../api/axios';
import Cookies from 'js-cookie';
import { USER_TYPE,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGOUT_SUCCESS_MESSAGE } from '../types/authType';
const CryptoJS = require('crypto-js');
const secretKey = 'mdsdflsddfsgscqs';

const encryptionOfMessage = (data) => {
    const dataString = JSON.stringify(data);
    const encryptedMessage = CryptoJS.AES.encrypt(dataString, secretKey).toString();  
    return encryptedMessage;
}

export const userRegistration = (data) => {
    const encryptedMessage = encryptionOfMessage(data);
    return async (dispath) => {
         try {
            const url = "/api/auth/registration";
			const { data: res } = await axios.post(url, {
                data: encryptedMessage
            });
            console.log(res);
              dispath({
                  type: REGISTRATION_SUCCESS,
                  payload: {
                      successMessage: res.message,
                  }
              })
          } catch (error) {
              dispath({
                  type: REGISTRATION_FAIL,
                  payload: {
                      error: error.response.data.error.errorMessage
                  }
              })
          }
    }
}

export const authLogin = (data,type,setCookies) => {
    const encryptedMessage = encryptionOfMessage(data);
     return async (dispath) => {
          try {
            let url;
			if(type===USER_TYPE) url = "/api/auth/login";
			else url = "http://localhost:8000/api/worker/login";
			const { data: res } = await axios.post(url, {
                data: encryptedMessage
            });
            setCookies("jwtoken", res.token)
			console.log(res);
               dispath({
                   type: LOGIN_SUCCESS,
                   payload: {
                       successMessage: res.message,
                       token: res.token
                   }
               })
           } catch (error) {
               dispath({
                   type: LOGIN_FAIL,
                   payload: {
                       error: error.response.data.error.errorMessage
                   }
               })
           }
     }
}

export const authLogout = (type,id,removeCookies) => {
    const token = Cookies.get('jwtoken');
    return async (dispath) => {
        try{
            if(type!==USER_TYPE) {
                const { data: res } = await axios.post("/api/worker/logout",{},{ 
                    headers:{
                        "Content-Type": "application/json",
                        Authorization : `Bearer ${token}`
                    }
                });
                console.log(res);
            }
            removeCookies("jwtoken");
            dispath({
                type: LOGOUT_SUCCESS,
                payload: {
                    successMessage: LOGOUT_SUCCESS_MESSAGE
                }
            })
        } catch(error) {
            console.log(error.response.data.error.errorMessage);
        }
    }
}

export const getWorkerTypes = async () => {
    try {
        const { data: res } = await axios.get(`/api/worker`);
        return res.types;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchUserById = async (userId) => {
    try {
        const res = await axios.get(`/api/auth/${userId}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}


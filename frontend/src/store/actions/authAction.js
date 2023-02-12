import axios from 'axios';
import { useAlert } from 'react-alert';
import { USER_TYPE,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOGOUT_SUCCESS_MESSAGE } from '../types/authType';

export const userRegistration = (data) => {
    return async (dispath) => {
         try {
            const url = "http://localhost:8000/api/auth/registration";
			const { data: res } = await axios.post(url, data);
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
     return async (dispath) => {
          try {
            let url;
			if(type===USER_TYPE) url = "http://localhost:8000/api/auth/login";
			else url = "http://localhost:8000/api/worker/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("authToken2", res.token);
            setCookies("authToken2", res.token)
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

export const authLogout = () => {
    return async (dispath) => {
            localStorage.removeItem("authToken2");
              dispath({
                  type: LOGOUT_SUCCESS,
                  payload: {
                    successMessage: LOGOUT_SUCCESS_MESSAGE
                  }
              })
    }
}

export const getWorkerTypes = async () => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/worker`);
        // console.log(res.types);
        return res.types;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

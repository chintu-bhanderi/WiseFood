import axios from 'axios';
import { USER_TYPE,LOGIN_FAIL,LOGIN_SUCCESS } from '../types/authType';


export const userLogin = (data,type) => {
     return async (dispath) => {
          try {
            let url;
			if(type===USER_TYPE) url = "http://localhost:8000/api/auth/login";
			else url = "http://localhost:8000/api/worker/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("authToken2", res.token);
			console.log(res);
               dispath({
                   type: LOGIN_SUCCESS,
                   payload: {
                       successMessage: res.message,
                       token: res.token
                   }
               })
           } catch (error) {
                // if(error.response){
                //     console.log('error->',error.response.data.error.errorMessage);
                // } else {
                //     console.log('error->','Internal server error');
                // }
               dispath({
                   type: LOGIN_FAIL,
                   payload: {
                       error: error.response.data.error.errorMessage
                   }
               })
           }
     }
}
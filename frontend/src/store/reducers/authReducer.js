
import deCodeToken from 'jwt-decode';
import { ERROR_CLEAR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, SUCCESS_MESSAGE_CLEAR } from '../types/authType';

const authState = { 
    loading : true,
    authenticate : false,  
    error : '',
    successMessage: '',
    myInfo : ''        // Info about which user is login ..
}

const tokenDecode = (token) =>{
    const tokenDecoded = deCodeToken(token);
    const expTime = new Date(tokenDecoded.exp*1000);
    if(new Date() > expTime){
         return null;
    }
    return tokenDecoded;
}

const getToken = localStorage.getItem('authToken2');
if(getToken){
    const getInfo = tokenDecode(getToken);
     if(getInfo){
          authState.myInfo = getInfo;
          authState.authenticate = true;
          authState.loading = false;
     }  
}

export const authReducer = (state = authState, action) => {
    const {payload,type} = action;
    if( type === LOGIN_FAIL){
         return {
              ...state,
              error : payload.error,
              authenticate : false,
              myInfo : '',
              loading : true
         }
    }

    if(type === LOGIN_SUCCESS){
        const myInfo = tokenDecode(payload.token);
        return{
            ...state,
            myInfo : myInfo,
            successMessage : payload.successMessage,
            error : '',
            authenticate : true,
            loading: false  
       }
    }

    if(type === SUCCESS_MESSAGE_CLEAR){
        return {
             ...state,
             successMessage : ''
        }
   }

   if(type === ERROR_CLEAR){
        return {
             ...state,
             error : ''
        }
   }

   if(type === LOGOUT_SUCCESS){
     return {
          loading : true,
          authenticate : false,  
          error : '',
          successMessage: '',
          myInfo : ''
     }
   }

    return state;
}
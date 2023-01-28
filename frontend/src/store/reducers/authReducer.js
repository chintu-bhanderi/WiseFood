
import deCodeToken from 'jwt-decode';
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../types/authType';

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

export const authReducer = (state = authState, action) => {
    const {payload,type} = action;
    
    if( type === LOGIN_FAIL){
        console.log(state);
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

    return state;
}
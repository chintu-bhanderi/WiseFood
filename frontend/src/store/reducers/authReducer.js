import deCodeToken from 'jwt-decode';
import Cookies from 'js-cookie';
import { ERROR_CLEAR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTRATION_FAIL, REGISTRATION_SUCCESS, SUCCESS_MESSAGE_CLEAR } from '../types/authType';
import { BOOKED_TABLE_GET_SUCCEESS } from '../types/tableType';

const authState = { 
    loading : true,
    authenticate : false,  
    error : '',
    successMessage: '',
    myInfo : ''  
}

const tokenDecode = (token) =>{
    const tokenDecoded = deCodeToken(token);
    const expTime = new Date(tokenDecoded.exp*1000);
    if(new Date() > expTime){
         return null;
    }
    return tokenDecoded;
}

const getToken = Cookies.get('jwtoken');

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
    if( type === REGISTRATION_FAIL){
          return {
               ...state,
               error : payload.error,
               authenticate : false,
               myInfo : '',
               loading : true
          }
     }

     if(type === REGISTRATION_SUCCESS){
          return{
              ...state,
              successMessage : payload.successMessage,
              error : '',
              loading: false  
         }
      }

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
          successMessage: payload.successMessage,
          myInfo : ''
     }
   }

   if(type === BOOKED_TABLE_GET_SUCCEESS){
     const newInfo = {...state.myInfo,bookedTable:payload.table};
     return {
          ...state,
          myInfo:newInfo
     }
   }

    return state;
}
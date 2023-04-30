import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_LOGIN_ERROR_MESSAGE, AUTH_LOGIN_TYPE, AUTH_LOGOUT_TYPE, AUTH_NOT_LOGIN_ERROR_MESSAGE, CHEF_TYPE, INVALID_USER_MESSAGE, WAITER_TYPE } from "../store/types/authType";

export const ProtectedRoute = ({Child,type}) => {
    const { myInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const alert = useAlert();
    useEffect(()=>{
        if(type===AUTH_LOGIN_TYPE) {
            if(myInfo) {
                alert.show(AUTH_LOGIN_ERROR_MESSAGE);
                navigate("/");
            }
        }else if(type===AUTH_LOGOUT_TYPE){
            if(!myInfo) {
                alert.show(AUTH_NOT_LOGIN_ERROR_MESSAGE);
                navigate("/");
            }
        }else if(!myInfo.type) {
            alert.show(AUTH_NOT_LOGIN_ERROR_MESSAGE);
            navigate("/auth");
        }else if(type!==myInfo.type) {
            alert.show(INVALID_USER_MESSAGE);
            navigate("/");
        }
    },[])
    
    return (
        <>
            <Child />
        </>
    )
}
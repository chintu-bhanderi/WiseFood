import React, { useEffect } from "react"; 
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin, authLogout } from "../store/actions/authAction";
import { SUCCESS_MESSAGE_CLEAR } from "../store/types/authType";
import "../styles/navbar.css";

export const Navbar = () => {
    
    const navigate = useNavigate();
    const alert = useAlert();
    const {authenticate,successMessage} = useSelector(state=>state.auth);
    const dispatch = useDispatch();	

    const logoutHandler = (e)=>{
        e.preventDefault();
        dispatch(authLogout())
    }

    useEffect(()=>{
        if(successMessage){
            alert.success(successMessage);
            dispatch({type : SUCCESS_MESSAGE_CLEAR })
        }
    },[successMessage])

return (
    <>
    <nav>
        <ul>
            <li className="logo">Welcome</li>
            <li className="items"><a href="/">Home</a></li>
            <li className="items"><a href="/">About</a></li>
            {/* <li className="items"><a href="/">Blogs</a></li> */}
            {!authenticate && <li className="items"><a href="/auth">Login</a></li>}
            {authenticate && <li className="items"><a onClick={logoutHandler}>Logout</a></li>}
            <li className="btn"><a href="/"><i className="fas fa-bars"></i></a></li>
        </ul>
    </nav>
    </> 
    )
}
 

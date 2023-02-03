import React from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../store/actions/authAction";
import "../styles/navbar.css";

export const Navbar = () => {
    const {authenticate} = useSelector(state=>state.auth);
    const dispatch = useDispatch();	

    const logoutHandler = ()=>{
        dispatch(authLogin());
        console.log("LogoutSuccessFull");
    }

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
 

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
            <li class="logo">Welcome</li>
            {/* <li class="items"><a href="/">Home</a></li> */}
            {/* <li class="items"><a href="/">About</a></li> */}
            {/* <li class="items"><a href="/">Blogs</a></li> */}
            {!authenticate && <li class="items"><a href="/auth">Login</a></li>}
            {authenticate && <li class="items"><a onClick={logoutHandler}>Logout</a></li>}
            <li class="btn"><a href="/"><i class="fas fa-bars"></i></a></li>
        </ul>
    </nav>
    </> 
    )
}
 

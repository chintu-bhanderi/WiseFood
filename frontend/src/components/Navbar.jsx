import React, { useEffect } from "react"; 
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../store/actions/authAction";
import { fetchAvailableTableByUser } from "../store/actions/tableAction";
import { CHEF_TYPE, COUNTER_TYPE, SUCCESS_MESSAGE_CLEAR, USER_TYPE, WAITER_TYPE } from "../store/types/authType";
import "../styles/navbar.css";

export const Navbar = ({removeCookies}) => {
    const alert = useAlert();
    const {authenticate,myInfo,successMessage} = useSelector(state=>state.auth);
    const dispatch = useDispatch();	

    const logoutHandler = (e)=>{
        e.preventDefault();
        dispatch(authLogout(myInfo.type,myInfo.id,removeCookies));
    }

    useEffect(()=>{
        if(successMessage){
            alert.success(successMessage);
            dispatch({type : SUCCESS_MESSAGE_CLEAR })
        }
    },[successMessage])

    useEffect(()=>{
        if(authenticate && myInfo.type===USER_TYPE){
            dispatch(fetchAvailableTableByUser(myInfo.id))
        }
    },[authenticate])

return (
    <>
    <nav>
        <ul>
            <li className="logo">WiseFood</li>
            <li className="items"><a href="/">Home</a></li>
            <li className="items"><a href="/about">About</a></li>
            {authenticate && myInfo.type===USER_TYPE && <li className="items"><a href="/table/table-book">Table Book</a></li>}
            {authenticate && myInfo.type===USER_TYPE && <li className="items"><a href="/food/category">Food Order</a></li>}
            {authenticate && myInfo.type===USER_TYPE && <li className="items"><a href="/table/table-book/user">Booked-Table</a></li>}
            {authenticate && myInfo.type===USER_TYPE && <li className="items"><a href="/food/food-order-show/user">Ordered-Food</a></li>}
            {authenticate && myInfo.type===CHEF_TYPE && <li className="items"><a href={'/chef/order/'+ myInfo.id}>Order-Make</a></li>}
            {authenticate && myInfo.type===CHEF_TYPE && <li className="items"><a href='/chef/order/made'>Made-Orders</a></li>}
            {authenticate && myInfo.type===WAITER_TYPE && <li className="items"><a href={'/waiter/order/'+ myInfo.id}>Order-Serve</a></li>}
            {authenticate && myInfo.type===WAITER_TYPE && <li className="items"><a href='/waiter/order/served'>Served-Orders</a></li>}
            {authenticate && myInfo.type===COUNTER_TYPE && <li className="items"><a href="/counter">User-Details</a></li>}
            {authenticate && <li className="items"><a href="/profile">Profile</a></li>}

            {!authenticate && <li className="items"><a href="/auth">Login</a></li>}
            {authenticate && <li className="items" style={{ color: '#e88290' }} ><a onClick={logoutHandler}>Logout</a></li>}
            <li className="btn"><a href="/"><i className="fas fa-bars"></i></a></li>
        </ul>
    </nav>
    </> 
    )
}
 

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postTableOrder } from "../../store/actions/foodAction";
import {io} from 'socket.io-client';

export const FoodOrderShow = (props) => {
    
    const[foodOrder,setFoodOrder] = useState();
    const foodName = useParams().foodName;
    const quantity = useParams().quantity;
    const {myInfo} = useSelector(state=>state.auth);
    const socket = useRef();

    useEffect(() => {
      socket.current = io("ws://localhost:5000");
    }, []);

    useEffect(()=>{
      if(myInfo.bookedTable) postTableOrder(myInfo,foodName,quantity)
      .then(data=>{
        if(data){
          setFoodOrder(data);
          socket.current.emit('food-ordered',data.chef)
        }
        return data;
      });
    },[myInfo])
    
    return (
        <>
            <h1>Food Ordered</h1>
            {foodOrder && <h2>{foodOrder.name}</h2>}
            {foodOrder && <h2>{foodOrder.quantity}</h2>}
            {foodOrder && <h2>{foodOrder.totalPrice}</h2>}
        </>
    )
}
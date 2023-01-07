import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const FoodOrderShow = (props) => {
    
    const[foodOrder,setFoodOrder] = useState();
    const foodName = useParams().foodName;
    const quantity = useParams().quantity;

    const postTableOrder = async () => {
        const tableBookId = '63a802d315f30834e8f6c5c8';
        const res = await axios.post(`http://localhost:8000/api/order/${tableBookId}`,{
            name:foodName,quantity
        })  
        .catch(error => console.log(error));
        const data = await res.data;
        return data;
      }

      useEffect(()=>{
        postTableOrder().then(data=>setFoodOrder(data));
      },[])
    
    return (
        <>
            <h1>Food Ordered</h1>
            {foodOrder && <h2>{foodOrder.name}</h2>}
            {foodOrder && <h2>{foodOrder.quantity}</h2>}
            {foodOrder && <h2>{foodOrder.totalPrice}</h2>}
        </>
    )
}
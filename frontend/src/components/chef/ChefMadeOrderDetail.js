import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChefMadeOrderShow } from "./ChefMadeOrderShow";
import { fetchChefMakeOrdersById } from "../../store/actions/workerAction";

export const ChefMadeOrderDetail = () => {

    const [foodOrders,setFoodOrders] = useState();
    const {myInfo} = useSelector(state=>state.auth);
    
    useEffect(()=>{
        fetchChefMakeOrdersById(myInfo.id).then(data=>setFoodOrders(data.reverse()));
    },[]);

    return (
        <>
            <div className="heading">Made Food-Orders</div>
            <div className="cards">
                {foodOrders && foodOrders.map((foodOrder) => (
                    <ChefMadeOrderShow
                        name={foodOrder.name}
                        totalPrice={foodOrder.totalPrice}
                    />
                ))}
            </div>
        </>
    );
}
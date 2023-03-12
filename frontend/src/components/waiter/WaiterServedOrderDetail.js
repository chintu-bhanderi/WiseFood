import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchWaiterServedOrdersById } from "../../store/actions/workerAction";
import { WaiterServedOrderShow } from "./WaiterServedOrderShow";

export const WaiterServedOrderDetail = () => {

    const [foodOrders,setFoodOrders] = useState();
    const {myInfo} = useSelector(state=>state.auth);

    useEffect(()=>{
        fetchWaiterServedOrdersById(myInfo.id).then(data=>setFoodOrders(data.reverse()));
    },[]);

    return (
        <>
            <div className="heading">Served Food-Orders</div>
            <div className="cards">
                {foodOrders && foodOrders.map((foodOrder) => (
                    <WaiterServedOrderShow
                        name={foodOrder.name}
                        totalPrice={foodOrder.totalPrice}
                    />
                ))}
            </div>
        </>
    );
}
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserFoodOrderedShow } from "./UserFoodOrderedShow";
import { fetchFoodDetailsByUser } from "../../store/actions/foodAction";

export const UserFoodOrderedDetail = () => {

    const [foodOrders,setFoodOrders] = useState();
    const [pastOrders,setPastOrders] = useState();
    const {myInfo} = useSelector(state=>state.auth);

    useEffect(()=>{
        fetchFoodDetailsByUser(myInfo.id)
        .then(data=>{
            setFoodOrders(data.filter((order)=>order.isServed))
            setPastOrders(data.filter((order)=>!order.isServed).reverse());
            return data;
        });
    },[]);

    return (
        <>
            <div className="heading">Orderd Food</div>
            <div className="cards">
                {foodOrders && foodOrders.map((foodOrder) => (
                    <UserFoodOrderedShow
                        id={foodOrder._id}
                        name={foodOrder.name}
                        isDone={foodOrder.isDone}
                        isServed={foodOrder.isServed}
                    />
                ))}
            </div>
            <br />
            <div className="heading">Past Orderd Food</div>
            <div className="cards">
                {pastOrders && pastOrders.map((foodOrder) => (
                    <UserFoodOrderedShow
                        id={foodOrder._id}
                        name={foodOrder.name}
                        isDone={foodOrder.isDone}
                        isServed={foodOrder.isServed}
                    />
                ))}
            </div>
        </>
    );
}
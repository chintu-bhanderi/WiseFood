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
            setFoodOrders(data.filter((order)=>!order.isServed))
            setPastOrders(data.filter((order)=>order.isServed).reverse());
            console.log(foodOrders);
            return data;
        });
    },[]);

    return (
        <>
            <div className="heading">Just Orderd Food</div>
            <div className="cards">
                {foodOrders && foodOrders.map((foodOrder) => (
                    <UserFoodOrderedShow
                        id={foodOrder._id}
                        name={foodOrder.name}
                        quantity={foodOrder.quantity}
                        totalPrice={foodOrder.totalPrice}
                        isDone={foodOrder.isDone}
                        isServed={foodOrder.isServed}
                        image={foodOrder.image}
                    />
                ))}
            </div>
            <br />
            <div className="heading">Served Orderd Food</div>
            <div className="cards">
                {pastOrders && pastOrders.map((foodOrder) => (
                    <UserFoodOrderedShow
                        id={foodOrder._id}
                        name={foodOrder.name}
                        quantity={foodOrder.quantity}
                        totalPrice={foodOrder.totalPrice}
                        isDone={foodOrder.isDone}
                        isServed={foodOrder.isServed}
                        image={foodOrder.image}
                    />
                ))}
            </div>
        </>
    );
}
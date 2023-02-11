import { useEffect, useState } from "react";
import axios from 'axios';
import { OrdersShow } from './OrdersShow'
import "../styles.css"
import { useParams } from "react-router-dom";

//import React from "react"
export const WaiterOrdersDetail = () => {
    // store all orders..
    const [foodOrders, setFoodOrders] = useState();
    const waiterId = useParams().waiterId;

    // fetch all orders ..
    const fetchFoodOrdersDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/order/waiter/${waiterId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        // after some interval rerander this page..
        setInterval(() => {
            fetchFoodOrdersDetails().then(data => setFoodOrders(data));
        }, 1000);

    }, []);

    return (
        <>
            <div>
                <h1>All Orders</h1>
                <div className="ordersDetail">

                    {foodOrders && foodOrders.map((foodOrder, index) => (
                        <OrdersShow
                            foodOrderId={foodOrder._id}
                            foodName={foodOrder.name}
                            quantity={foodOrder.quantity}
                            table={foodOrder.table}
                            chef={foodOrder.chef}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
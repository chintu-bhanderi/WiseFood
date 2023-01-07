import { useEffect, useState } from "react";
import axios from 'axios';
import { OrdersShow } from './OrdersShow'
import "../styles.css"

//import React from "react"
export const OrdersDetail = (props) => {
    // store all orders..
    const [foodOrders, setFoodOrders] = useState();

    // fetch all orders ..
    const fetchFoodOrdersDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/order/`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        // after some interval rerander this page..
        setInterval(() => {
            fetchFoodOrdersDetails()
                .then(data => data.filter(order => !order.isDone))
                .then(data => setFoodOrders(data));
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
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
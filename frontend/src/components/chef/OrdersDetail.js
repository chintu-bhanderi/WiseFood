import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { io } from 'socket.io-client'
import { OrdersShow } from './OrdersShow'
import "../styles.css"

export const OrdersDetail = () => {

    const chefId = useParams().chefId;
    const [foodOrders, setFoodOrders] = useState();
    const socket = useRef();
    const { myInfo } = useSelector(state => state.auth);

    const fetchFoodOrdersDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/order/chef/${chefId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const setFoodOrderArray = () => {
        fetchFoodOrdersDetails()
            .then(data => setFoodOrders(data))
    }

    useEffect(() => {
        socket.current = io("ws://localhost:5000");
        socket.current.on('get-order', (data) => {
            setFoodOrderArray();
        })
        socket.current.on('order-update', (data) => {
            setFoodOrderArray();
        })
    }, [])

    useEffect(() => {
        socket.current.emit('add-worker', myInfo.id, myInfo);
        setFoodOrderArray();
    }, []);

    return (
        <>
            <div>
                <h1>All Orders</h1>
                {foodOrders && <h2>Total Orders: {foodOrders.length}</h2>}
                <br />
                <div className="ordersDetail">
                    {foodOrders && foodOrders.map((foodOrder, index) => (
                        <OrdersShow
                            orderId={foodOrder._id}
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
import { Button } from '@mui/material';
import axios from "axios";
import { io } from 'socket.io-client';
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../styles.css"

export const OrdersShow = (props) => {

    const { myInfo } = useSelector(state => state.auth);
    const socket = useRef();

    const updateOrderDone = async () => {
        const res = await axios.put(`http://localhost:8000/api/order/done/${props.orderId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        return data.order;
    }

    useEffect(() => {
        socket.current = io("ws://localhost:5000");
    }, []);

    const clickHandler = () => {
        updateOrderDone()
            .then((data) => {
                socket.current.emit('order-done', myInfo.id);
                socket.current.emit('food-ordered', data.waiter);
            })
    }

    return (
        <>
            <span className="ordersShow">
                <p>Name: {props.foodName}</p>
                <p>quantity: {props.quantity}</p>
                <Button className="btnShow"
                    onClick={clickHandler}
                >Done</Button>
            </span>
        </>
    )
}
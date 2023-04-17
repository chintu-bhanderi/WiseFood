import { Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { io } from 'socket.io-client';
import "../styles.css"

export const OrdersShow = (props) => {

    const socket = useRef();
    const { myInfo } = useSelector(state => state.auth);

    const updateOrderServer = async () => {
        const res = await axios.put(`http://localhost:8000/api/order/serve/${props.foodOrderId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const clickHandler = () => {
        updateOrderServer().then((data) => {
            socket.current.emit('order-done', myInfo.id);
            return data;
        })
    }

    useEffect(() => {
        socket.current = io("ws://localhost:5000");
    }, []);

    return (
        <>
            <span className="ordersShow">
                <p>Name: {props.foodName}</p>
                <p>quantity: {props.quantity}</p>
                <p>tableNo : {props.table}</p>
                <Button className="btnShow"
                    onClick={clickHandler}
                >Done</Button>
            </span>
        </>
    )
}
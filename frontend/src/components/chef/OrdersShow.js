import "../styles.css"
import { Button} from '@mui/material';
import axios from "axios";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {io} from 'socket.io-client';

export const OrdersShow = (props) => {

    const {myInfo} = useSelector(state=>state.auth);
    const socket = useRef();

    const updateOrderDone = async () => {
        const res = await axios.put(`http://localhost:8000/api/order/done/${props.orderId}`)
          .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        return data;
    }

    useEffect(() => {
        socket.current = io("ws://localhost:5000");
    }, []);

    const clickHandler = () => {
        updateOrderDone()
        .then((data) => {
            console.log(myInfo);
            socket.current.emit('order-done',myInfo.id)
        })
    }

    return (
        <>
            <span className="ordersShow">
                    <p>Name: {props.foodName}</p>
                    <p>quantity: {props.quantity}</p>
                    {/* <p>table: {props.table}</p> */}
                <Button className="btnShow"
                    onClick={clickHandler}
                >Done</Button>
            </span>
        </>
    )
}
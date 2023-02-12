import "../styles.css"
import { Button} from '@mui/material';
import axios from "axios";
// import { useEffect } from "react";

export const OrdersShow = (props) => {
    
    const updateOrderServer = async () => {
        const res = await axios.put(`http://localhost:8000/api/order/serve/${props.foodOrderId}`)
          .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        return data;
    }

    const clickHandler = () => {
        updateOrderServer()
    }

    return (
        <>
            <span className="ordersShow">
                    <p>id: {props.foodOrderId}</p>
                    <p>Name: {props.foodName}</p>
                    <p>quantity: {props.quantity}</p>
                    <p>table: {props.table}</p>
                    <p>chef: {props.chef}</p>
                <Button className="btnShow"
                    onClick={clickHandler}
                >Done</Button>
            </span>
        </>
    )
}
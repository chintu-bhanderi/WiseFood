import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles.css"
import {TableOrderShow} from './TableOrderShow' 
import { Button, Link, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



//import React from "react
export const TableOrderDetail = () => {

    const navigate = useNavigate();

    const [bookId, setBookId] = useState();
    const [orders, setOrders] = useState();
    const [bill, setBill] = useState(0);

    const fetchTableBookOrders = async () => {
        const res = await axios.get(`http://localhost:8000/api/order/${bookId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const deleteTableBookOrders = async () => {
        const res = await axios.delete(`http://localhost:8000/api/order/${bookId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const deleteTableBook = async () => {
        const res = await axios.delete(`http://localhost:8000/api/table-book/${bookId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const onChangeHandler = (event) => {
        setBookId(event.target.value);
    }

    const submitHandler = (event) => {
        // event.preventDefault();
        fetchTableBookOrders()
            .then((data) => {
                return data.filter((order) => {
                    // console.log(order.isDone);
                    if (order.isDone) setBill(bill + order.totalPrice);
                    return order.isDone;
                })
            })
            .then(data => { setOrders(data) })
        // .then(()=>{console.log(orders)});
    }

    function getTotalBill() {
        let totalBill = 0;
        for(let i=0; i<orders.length; i++){
            totalBill += orders[i].totalPrice;
        }
        return totalBill;
    }

    const deleteHandler = () => {
        deleteTableBookOrders()
        .then(()=>deleteTableBook())
        .then(()=>{navigate('/counter')})
    }

    return (
        <>
            <TextField name="title" onChange={onChangeHandler} margin="auto" variant="outlined" />
            <Button className="btnShow"
                onClick={submitHandler}
            >Find</Button>
            {orders &&
                <h2>Total Bill: {getTotalBill()}</h2>
            }
            <div className="ordersDetail"    >
                <br />
                {orders && orders.map((order,index) => (
                    <TableOrderShow
                        id={order._id}
                        name={order.name}
                        quantity={order.quantity}
                        totalPrice={order.totalPrice}
                        tableBook={order.tableBook}
                    />
                ))}
            </div>
            {orders &&
                <Button className="btnShow"
                    onClick={deleteHandler}
                >DeleteOrders</Button>
            }
        </>
    );
}
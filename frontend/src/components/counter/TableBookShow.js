import "../styles.css"
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const TableBookShow = (props) => {

    const navigate = useNavigate();

    const updateIsAvailable = async () => {
        const res = await axios.put(`http://localhost:8000/api/table-book/${props.bookId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const submithandler = () => {
        updateIsAvailable()
        .then(()=>{navigate('/counter')});
    }

    return (
        <>
            <span className="tableShow">
                <p>id: {props.bookId}</p>
                <p>slotNo: {props.slot}</p>
                <p>tableNo: {props.table}</p>
                <p>userName: {props.user.firstName+ " " + props.user.lastName}</p>
                <p>date: {props.date}</p>
                { !props.isAvailable && <Button className="btnShow"
                    onClick={submithandler}
                >Confirm</Button>}
            </span>
        </>
    )
}
import "../styles.css"
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const TableBookShow = (props) => {

    const navigate = useNavigate();

    // const [available,setAvailable] = useState(props.isAvailable);

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

    // useEffect(()=>{console.log(props)},[])

    return (
        <>
            <span className="tableShow">
                <p>id: {props.bookId}</p>
                <p>slot: {props.slot}</p>
                <p>table: {props.table}</p>
                <p>user: {props.user}</p>
                <p>date: {props.date}</p>
                <Button className="btnShow"
                    onClick={submithandler}
                >Available</Button>
            </span>
        </>
    )
}
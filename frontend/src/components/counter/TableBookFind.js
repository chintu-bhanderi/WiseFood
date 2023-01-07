import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles.css"
import { Button, TextField } from "@mui/material";
import { TableBookShow } from "./TableBookShow";



//import React from "react
export const TableBookFind = () => {

    const [bookId, setBookId] = useState();
    const [tableBook, setTableBook] = useState();

    const fetchTableBookDetail = async () => {
        const res = await axios.get(`http://localhost:8000/api/table-book/${bookId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const onChangeHandler = (event) => {
        setBookId(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetchTableBookDetail().then(data => setTableBook(data));

    }

    return (
        <>
            <TextField name="title" onChange={onChangeHandler} margin="auto" variant="outlined" />
            <Button className="btnShow"
                onClick={submitHandler}
            >Find</Button>
            <div className="tableDetail"    >

                {tableBook && <TableBookShow
                    bookId={tableBook._id}
                    slot={tableBook.slot}
                    table={tableBook.table}
                    date={tableBook.date}
                    isAvailable={tableBook.isAvailable}
                />}
            </div>
        </>
    );
}
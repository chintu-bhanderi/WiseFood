import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles.css"
import { Button, TextField } from "@mui/material";
import { TableBookShow } from "./TableBookShow";

export const TableBookFindById = () => {

    const [tableBook, setTableBook] = useState();
    const [id,setId] = useState();

    const fetchTableBookDetail = async () => {
        const { data: res } = await axios.get(`http://localhost:8000/api/table-book/id/${id}`)
        .catch(error => console.log(error));
        return res.tableBook;
    }

    const inputTableNoHandler = (event) => {
        setId(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetchTableBookDetail()
        .then(data => setTableBook(data));

    }

    return (
        <>
            <lable>TableBook No. </lable>   
            <TextField name="title" onChange={inputTableNoHandler} required margin="auto" variant="outlined" />
            <br />
            <br />
            <Button className="btnShow"
                onClick={submitHandler}
            >Find</Button>
            <div className="tableDetail"    >

                {tableBook && <TableBookShow
                    bookId={tableBook.id}
                    slot={tableBook.slot}
                    table={tableBook.table}
                    user={tableBook.user}
                    date={tableBook.date}
                    isAvailable={tableBook.isAvailable}
                />}
            </div>
        </>
    );
}
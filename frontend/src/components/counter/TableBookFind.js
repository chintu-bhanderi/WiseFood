import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles.css"
import { Button, TextField } from "@mui/material";
import { TableBookShow } from "./TableBookShow";

export const TableBookFind = () => {

    const [bookId, setBookId] = useState();
    const [tableBook, setTableBook] = useState();
    const [tableNo,setTableNo] = useState();
    const [slotNo,setSlotNo] = useState();
    const [date,setDate] = useState({
        day : "",
        month: "",
        year: ""
    });

    const fetchTableBookDetail = async () => {
        console.log("Fetching");
        const { data: res } = await axios.post(`http://localhost:8000/api/table-book/details`,{
            tableNo,slotNo,date
        })
        .catch(error => console.log(error));
        return res.tableBook;
    }

    const inputTableNoHandler = (event) => {
        setTableNo(event.target.value);
    }

    const inputSlotNoHandler = (event) => {
        setSlotNo(event.target.value);
    }

    const inputDateHandler = (event) => {
        setDate((prev)=>{
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetchTableBookDetail()
        .then(data => setTableBook(data));

    }

    return (
        <>
            <lable>Table No. </lable>   
            <TextField name="title" onChange={inputTableNoHandler} required margin="auto" variant="outlined" />
            <br />
            <br />
            <lable>Slot No. </lable>   
            <TextField name="title" onChange={inputSlotNoHandler} required margin="auto" variant="outlined" />
            <br />
            <br />
            <div>
                <input 
                    type="number" placeholder="Day" name="day" onChange={inputDateHandler}
                    value={date.day} required />
                <input 
                    type="number" placeholder="<Month" name="month" onChange={inputDateHandler}
                    value={date.month} required />
                <input 
                    type="number" placeholder="year" name="year" onChange={inputDateHandler}
                    value={date.year} required />
            </div>
            <Button className="btnShow"
                onClick={submitHandler}
            >Find</Button>
            <div className="tableDetail"    >

                {tableBook && <TableBookShow
                    bookId={tableBook._id}
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
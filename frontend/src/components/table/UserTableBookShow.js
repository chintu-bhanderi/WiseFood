import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { fetchSlotNo, fetchTableNo } from "../../store/actions/tableAction";
import "../../styles/Table.css";

export const UserTableBookShow = (props) => {

    const [slotNo,setSlotNo] = useState();
    const [tableNo,tableSlotNo] = useState();

    const cancelTableBook = () => {
        props.deleteTableBook(props.id);
    }

    useEffect(()=>{
        fetchSlotNo(props.slot).then(data=>setSlotNo(data));
        fetchTableNo(props.table).then(data=>tableSlotNo(data));
    },[])

    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
                    <div className="content">
                        <h2>TableBook No. {props.id}</h2>
                        <h2>Slot No : {slotNo}</h2>
                        <h2>Table No : {tableNo}</h2>
                        <h2>Price : {props.price}</h2>
                        <h2>Date : {props.date}</h2>
                        <Button onClick={cancelTableBook}>Cancel</Button>
                    </div>
                </div>
            </div>
        </>
    )
                        // <a href='/table/tables-book/user' className="button">Cancel Table-Book</a>
}
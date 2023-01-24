import { useState } from "react";
import { TableDetail } from "./TableDetail";
import { SlotDetail } from "./SlotDetail";

//import React from "react
export const TableBook = () => {

    const [selectSlot,setSelectSlot] = useState();
    const [date,setDate] = useState({
        day : "",
        month: "",
        year: ""
    });

    const handleChange = (event) => {
        setDate((prev)=>{
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

   
    return (
        <>
            <br />
            <div>
                <input 
                    type="number" placeholder="Day" name="day" onChange={handleChange}
                    value={date.day} required />
                <input 
                    type="number" placeholder="<Month" name="month" onChange={handleChange}
                    value={date.month} required />
                <input 
                    type="number" placeholder="year" name="year" onChange={handleChange}
                    value={date.year} required />
            </div>
            <br />
            <br />
            <h2>{date.day}</h2>
            <h2>{date.month}</h2>
            <h2>{date.year}</h2>
            <SlotDetail 
                setSelectSlot={setSelectSlot}
            />
            {selectSlot && 
                <TableDetail
                    selectSlot={selectSlot}
                    date={date}
                />
            }
        </>
    );
}
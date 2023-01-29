import { useState } from "react";
import { TableDetail } from "./TableDetail";
import { SlotDetail } from "./SlotDetail";

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
import { useState } from "react";
import { TableDetail } from "./TableDetail";
import { SlotDetail } from "./SlotDetail";

export const TableBook = () => {

    const [selectSlot,setSelectSlot] = useState();
    const [date,setDate] = useState();

    const changeHandler = (event) => {
        setDate(event.target.value);
    }   
   
    return (
        <>
            <br />
            <div>
                <span>Enter the date: </span>
                <input type="date" name="date" id="date" onChange={changeHandler} placeholder="date" required />
            </div>  
            <SlotDetail 
                setSelectSlot={setSelectSlot}
                selectSlot={selectSlot}
            />
            {date && selectSlot && 
                <TableDetail
                    selectSlot={selectSlot}
                    date={date}
                />
            }
        </>
    );
}
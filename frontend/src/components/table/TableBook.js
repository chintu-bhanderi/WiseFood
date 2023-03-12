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

    const changeHandler = (event) => {
        setDate({
          day : event.target.value.substring(8,10),
          month : event.target.value.substring(5,7),
          year : event.target.value.substring(0,4)   
        })
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
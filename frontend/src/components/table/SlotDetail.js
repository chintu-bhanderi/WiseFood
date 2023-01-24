import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles.css"
import { SlotShow } from "./SlotShow";

export const SlotDetail = (props) => {

    const [slots,setSlots] = useState();

    const fetchSlotDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/slot`)
          .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        return data;
      }

    useEffect(()=>{
        fetchSlotDetails().then(data=>setSlots(data));
    },[]);

    const selectSlotHandler = (id) => {
        props.setSelectSlot(id);
    }

    return (
        <>
            <div>
                <div className="tableDetail">
                {slots && slots.map((slot) => (
                    <SlotShow
                        id={slot._id}
                        slotNo={slot.slotNo}
                        startTime={slot.startTime}
                        endTime={slot.endTime}
                        selectSlotHandler={selectSlotHandler}
                    />
                ))}
                </div>
            </div>
        </>
    );
}
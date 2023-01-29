import { useEffect, useState } from "react";
import "../styles.css"
import { SlotShow } from "./SlotShow";
import { fetchSlotDetails } from "../../store/actions/tableAction";

export const SlotDetail = (props) => {

    const [slots,setSlots] = useState();

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
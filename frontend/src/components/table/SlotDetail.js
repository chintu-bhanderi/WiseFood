import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles.css"
import { useParams } from "react-router-dom";
import { SlotShow } from "./SlotShow";



//import React from "react
export const SlotDetail = (props) => {

    const [slots,setSlots] = useState();
    const categoryId = useParams().categoryId;

    const fetchSlotDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/slot`)
          .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        return data;
      }
    

    useEffect(()=>{
        fetchSlotDetails().then(data=>setSlots(data));
        // console.log(tables);
    },[]);

    return (
        <>
            <div>
                <h1>{categoryId}</h1>
                <div className="tableDetail">
                {slots && slots.map((slot,index) => (
                    <SlotShow
                        id={slot._id}
                        slotNo={slot.slotNo}
                        startTime={slot.startTime}
                        endTime={slot.endTime}
                    />
                ))}
                </div>
            </div>
        </>
    );
}
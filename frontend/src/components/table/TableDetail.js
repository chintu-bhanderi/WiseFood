import { useEffect, useState } from "react";
import axios from 'axios';
import {TableShow} from './TableShow'
import { useParams } from "react-router-dom";

//import React from "react
export const TableDetail = (props) => {

    const [tables,setTables] = useState();
    // const [chair,setChair] = useState();

    const fetchTableDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/table`)
          .catch(error => console.log(error));
        const data = await res.data;
        return data;
      }
    

    useEffect(()=>{
        fetchTableDetails().then(data=>setTables(data));
    },[]);

    return (
        <>
            <h2>{props.selectSlot}</h2>
            <h2>{props.date.day}</h2>
            <div className="heading">Tables</div>
            <div className="cards">
                {tables && tables.map((table) => (
                    <TableShow
                        chair={table.chair}
                        price={table.price}
                        tableId={table._id}
                    />
                ))}
            </div>
        </>
    );
}
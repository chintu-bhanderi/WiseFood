import { useEffect, useState } from "react";
import axios from 'axios';
import {TableShow} from './TableShow'
import { useParams } from "react-router-dom";

//import React from "react
export const TableDetail = (props) => {

    const [tables,setTables] = useState();
    const [bookFlag,setBookFlag] = useState(true);
    const slotId = props.selectSlot;
    const date = props.date;

    const fetchTableDetailsBySlot = async () => {
        const res = await axios.post(`http://localhost:8000/api/table-book/slot`,{
            slotId,date
            })  
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }
    
    const postTableOrder = async (tableId) => {
        // console.log(tableId);
        const user = '63a4ffc68cc75652b8850f9f';
        const res = await axios.post(`http://localhost:8000/api/table-book`,{
            slotId,tableId,user,date
          })  
          .catch(error => console.log(error));
        const data = await res.data;
        setBookFlag(!bookFlag);
        return data;
    }

    useEffect(()=>{
        fetchTableDetailsBySlot().then(data=>setTables(data));
    },[bookFlag]);

    return (
        <>
            <div className="heading">Tables</div>
            <div className="cards">
                {tables && tables.map((table) => (
                    <TableShow
                        chair={table.chair}
                        price={table.price}
                        tableId={table._id}
                        postTableOrder={postTableOrder}
                    />
                ))}
            </div>
        </>
    );
}
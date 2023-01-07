import { useEffect, useState } from "react";
import axios from 'axios';
import {TableShow} from './TableShow'
import "./styles.css"
import { Link } from '@mui/material';



//import React from "react
export const TableDetail = () => {

    const [tables,setTables] = useState();
    // const [chair,setChair] = useState();

    const fetchTableDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/table`)
          .catch(error => console.log(error));
        const data = await res.data;
        // console.log(data[0].chair);
        // setChair(data[0].chair);
        // console.log(data);
        return data;
      }
    

    useEffect(()=>{
        fetchTableDetails().then(data=>setTables(data));
        // console.log(tables);
    },[]);

    return (
        <>
            <div className="tableDetail"    >
            {tables && tables.map((table,index) => (

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
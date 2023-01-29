import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postTableBook } from "../../store/actions/tableAction";

// Not used..
export const TableBookDetail = (props) => {
    
    const[tableBook,setTableBook] = useState();
    const tableId = useParams().tableId;

      useEffect(()=>{
          postTableBook(tableId).then(data=>setTableBook(data));
      },[])
    
    return (
        <>
            {tableBook && <h1>Table Bocked</h1>}
            {tableBook && <h2>{tableBook._id}</h2>}
            <h1>Hellow {tableId}</h1>
        </>
    )
}
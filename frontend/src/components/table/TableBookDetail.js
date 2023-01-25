import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const TableBookDetail = (props) => {
    
    const[tableBook,setTableBook] = useState();
    const tableId = useParams().tableId;

    const postTableOrder = async () => {
        const slotId = '63a4ffc68cc75652b8850f9f';
        const user = '63a4ffc68cc75652b8850f9f';
        const res = await axios.post(`http://localhost:8000/api/table-book`,{
            slotId,tableId,user
          })  
          .catch(error => console.log(error));
        const data = await res.data;
        return data;
      }

      useEffect(()=>{
        postTableOrder().then(data=>setTableBook(data));
      },[])
    
    return (
        <>
            {tableBook && <h1>Table Bocked</h1>}
            {tableBook && <h2>{tableBook._id}</h2>}
            <h1>Hellow {tableId}</h1>
        </>
    )
}
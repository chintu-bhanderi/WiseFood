import { useEffect, useState } from "react";
import {TableShow} from './TableShow'
import { fetchTableDetailsBySlot, setTableBook } from "../../store/actions/tableAction";

export const TableDetail = (props) => {

    const [tables,setTables] = useState();
    const [bookFlag,setBookFlag] = useState(true);
    const slotId = props.selectSlot;
    const date = props.date;
    
    const postTableBook = (tableId) => {
        setTableBook(tableId,slotId,date)
        .then(()=>setBookFlag(!bookFlag));
    }

    useEffect(()=>{
        fetchTableDetailsBySlot(slotId,date).then(data=>setTables(data));
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
                        postTableBook={postTableBook}
                    />
                ))}
            </div>
        </>
    );
}
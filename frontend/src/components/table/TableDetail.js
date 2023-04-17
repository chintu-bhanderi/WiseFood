import { useEffect, useState } from "react";
import {TableShow} from './TableShow'
import { fetchTableDetailsBySlot, setTableBook } from "../../store/actions/tableAction";
import { useSelector } from "react-redux";

export const TableDetail = (props) => {
    
    const [tables,setTables] = useState();
    const [bookFlag,setBookFlag] = useState(true);
    const slotId = props.selectSlot;
    const date = props.date;
    
    const {myInfo} = useSelector(state=>state.auth);

    const postTableBook = (tableId) => {
        setTableBook(tableId,slotId,myInfo.id,date)
        .then(()=>setBookFlag(!bookFlag));
    }

    useEffect(()=>{
        fetchTableDetailsBySlot(slotId,date).then(data=>setTables(data));
    },[bookFlag,props.selectSlot,props.date]);

    return (
        <>
            <div className="heading">Tables</div>
            <div className="cards">
                {tables && tables.map((table) => (
                    <TableShow
                        tableNo={table.tableNo}
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
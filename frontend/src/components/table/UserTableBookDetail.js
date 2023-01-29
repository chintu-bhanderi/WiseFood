import { useEffect, useState } from "react";
import {UserTableBookShow} from './UserTableBookShow'
import { deleteTableBookById, fetchTableBookDetailsByUser } from "../../store/actions/tableAction";

export const UserTableBookDetail = () => {

    const [tableBooks,setTableBooks] = useState();
    const [state,setState] = useState(true);

    const deleteTableBook = async (tableBookId) => {
        deleteTableBookById(tableBookId).then(()=>setState(!state));
    }  

    useEffect(()=>{
        fetchTableBookDetailsByUser().then(data=>setTableBooks(data));
    },[state]);

    return (
        <>
            <div className="heading">Tables</div>
            <div className="cards">
                {tableBooks && tableBooks.map((tableBook) => (
                    <UserTableBookShow
                        id = {tableBook._id}
                        slot = {tableBook.slot}
                        table = {tableBook.table}
                        user={tableBook.user}
                        price={tableBook.price}
                        date={tableBook.date}
                        deleteTableBook = {deleteTableBook}
                    />
                ))}
            </div>
        </>
    );
}
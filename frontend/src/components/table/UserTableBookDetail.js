import { useEffect, useState } from "react";
import {UserTableBookShow} from './UserTableBookShow'
import { deleteTableBookById, fetchTableBookDetailsByUser } from "../../store/actions/tableAction";
import { useSelector } from "react-redux";

export const UserTableBookDetail = () => {

    const [tableBooks,setTableBooks] = useState();
    const [state,setState] = useState(true);
    const {myInfo} = useSelector(state=>state.auth);

    const deleteTableBook = async (tableBookId) => {
        deleteTableBookById(tableBookId).then(()=>setState(!state));
    }  

    useEffect(()=>{
        fetchTableBookDetailsByUser(myInfo.id).then(data=>setTableBooks(data));
    },[state]);

    return (
        <>
            <div className="heading">BookedTables</div>
            <div className="cards">
                {tableBooks && tableBooks.map((tableBook) => (
                    <UserTableBookShow
                        id = {tableBook.id}
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
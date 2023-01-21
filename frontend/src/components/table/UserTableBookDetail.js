import { useEffect, useState } from "react";
import axios from 'axios';
import {UserTableBookShow} from './UserTableBookShow'
import { useNavigate } from "react-router-dom";

//import React from "react
export const UserTableBookDetail = () => {

    const navigate = useNavigate();

    const [tableBooks,setTableBooks] = useState();
    const [state,setState] = useState(true);
    // const [chair,setChair] = useState();

    const fetchTableBookDetails = async () => {
        // Static
        const user = "63a4ffc68cc75652b8850f9f";
        const res = await axios.get(`http://localhost:8000/api/table-book/user/${user}`)
          .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    const deleteTableBook = async (tableBookId) => {
        const res = await axios.delete(`http://localhost:8000/api/table-book/${tableBookId}`)
          .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        setState(!state);
    }  

    useEffect(()=>{
        fetchTableBookDetails().then(data=>setTableBooks(data));
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
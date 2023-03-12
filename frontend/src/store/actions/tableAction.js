import axios from "axios";
import { BOOKED_TABLE_GET_SUCCEESS } from "../types/tableType";

export const fetchSlotDetails = async () => {
    try {
        const { data: res }  = await axios.get(`http://localhost:8000/api/slot`)
        return res.slots;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchSlotNo = async (slotId) => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/slot/${slotId}`);
        // console.log(res.slotNo);
        return res.slotNo;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableNo = async (tableId) => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/table/${tableId}`);
        console.log(res.tableNo);
        return res.tableNo;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableDetailsBySlot = async (slotId,date) => {
    try {
        const { data: res } = await axios.post(`http://localhost:8000/api/table-book/slot`,{
            slotId,date
        }) 
        return res.tables;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableBookDetailsByUser = async (user) => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/table-book/user/${user}`);
        return res.tableBooks;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchAvailableTableByUser = (user) => {
    return async (dispath) => {
        try {
            const { data: res } = await axios.get(`http://localhost:8000/api/table-book/user/available/${user}`);
            // console.log(res.table.tableNo);
            dispath({
                type: BOOKED_TABLE_GET_SUCCEESS,
                payload: {
                    successMessage: res.message,
                    table: res.tableBook
                }
            })
        } catch (error) {
            console.log(error.response.data.error.errorMessage);
        }   
    }
}

export const setTableBook = async (tableId,slotId,user,date) => {
    try {
        // const user = '63a4ffc68cc75652b8850f9f';
        const { data: res } = await axios.post(`http://localhost:8000/api/table-book`,{
            slotId,tableId,user,date
        })  
        console.log(res.message);
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const deleteTableBookById = async (tableBookId) => {
    try {
        const { data: res } = await axios.delete(`http://localhost:8000/api/table-book/${tableBookId}`);
        console.log(res.message);
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}



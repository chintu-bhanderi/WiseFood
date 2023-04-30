import axios from "../../api/axios";
import { BOOKED_TABLE_GET_SUCCEESS } from "../types/tableType";

export const fetchSlotDetails = async () => {
    try {
        const { data: res }  = await axios.get(`/api/slot`)
        return res.slots;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchSlotNo = async (slotId) => {
    try {
        const { data: res } = await axios.get(`/api/slot/${slotId}`);
        return res.slotNo;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableNo = async (tableId) => {
    try {
        const { data: res } = await axios.get(`/api/table/${tableId}`);
        return res.tableNo;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableDetailsBySlot = async (slotId,date) => {
    try {
        const { data: res } = await axios.post(`/api/table-book/slot`,{
            slotId,date
        }) 
        return res.tables;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableBookDetailsByUser = async (user) => {
    try {
        const { data: res } = await axios.get(`/api/table-book/user/${user}`);
        return res.tableBooks;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableBookDetailsById = async (bookId) => {
    try {
        const res  = await axios.get(`/api/table-book/${bookId}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchAvailableTableByUser = (user) => {
    return async (dispath) => {
        try {
            const { data: res } = await axios.get(`/api/table-book/user/available/${user}`);
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
        await axios.post(`/api/table-book`,{
            slotId,tableId,user,date
        })  
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
        alert(error.response.data.error.errorMessage);
    }
}

export const deleteTableBookById = async (tableBookId) => {
    try {
        const { data: res } = await axios.delete(`/api/table-book/${tableBookId}`);
        console.log(res.message);
    } catch (error) {
        alert(error.response.data.error.errorMessage);
        console.log(error.response.data.error.errorMessage);
    }
}



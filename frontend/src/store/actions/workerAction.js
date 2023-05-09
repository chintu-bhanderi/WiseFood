import Cookies from "js-cookie";
import axios from "../../api/axios";
const CryptoJS = require('crypto-js');
const secretKey = 'mySecretKey';

export const fetchChefMakeOrdersById = async (chefId) => {
    try {
        const { data: res }  = await axios.get(`/api/worker-action/chef/order/${chefId}`)
        return res.orders;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchWaiterServedOrdersById = async (waiterId) => {
    try {
        const { data: res }  = await axios.get(`/api/worker-action/waiter/order/${waiterId}`)
        return res.orders;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const testing = async () => {
    const token = {
        key: "Hello",
        Value: "World"
    }
    // const token = Cookies.get('jwtoken');
    const tokenString = JSON.stringify(token);
    const encryptedMessage = CryptoJS.AES.encrypt(tokenString, secretKey).toString();  
    console.log(encryptedMessage);  
    try {
        const { data: res }  = await axios.post(`/api/test/data`,{
            token:encryptedMessage
        })
        // return res;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}



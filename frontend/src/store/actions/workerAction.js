// import axios from "axios";
import axios from "../../api/axios";


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

import axios from "../../api/axios";

export const fetchCategoryDetails = async () => {
    try {
        const { data: res } = await axios.get(`/api/category`)
        return res.categories;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchFoodDetails = async (categoryId) => {
    try {
        const { data: res } = await axios.get(`/api/food-item/${categoryId}`)
        return res.foodItems;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableBookOrders = async (bookId) => {
    const res = await axios.get(`/api/order/${bookId}`)
        .catch(error => console.log(error));
    const data = await res.data;
    return data;
}

export const fetchFoodDetailsByUser = async (user) => {
    try {
        const { data: res } = await axios.get(`/api/order/user/${user}`)
        return res.foodOrders;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const postTableOrder = async (myInfo,foodName,quantity) => {
    try{
        const { data: res } = await axios.post(`http://localhost:8000/api/order/${myInfo.bookedTable}`,{
            name:foodName,quantity
        })  
        return res.order;
    } catch(error){
        console.log(error.response.data.error.errorMessage);
        alert(error.response.data.error.errorMessage);
        window.history.back();
    }   
  }
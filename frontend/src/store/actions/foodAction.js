import axios from "axios";

export const fetchCategoryDetails = async () => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/category`)
        // console.log(res.message);
        return res.categories;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchFoodDetails = async (categoryId) => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/food-item/${categoryId}`)
        // console.log(res.message);
        return res.foodItems;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}

export const fetchTableBookOrders = async (bookId) => {
    const res = await axios.get(`http://localhost:8000/api/order/${bookId}`)
        .catch(error => console.log(error));
    const data = await res.data;
    return data;
}

export const fetchFoodDetailsByUser = async (user) => {
    try {
        const { data: res } = await axios.get(`http://localhost:8000/api/order/user/${user}`)
        return res.foodOrders;
    } catch (error) {
        console.log(error.response.data.error.errorMessage);
    }
}


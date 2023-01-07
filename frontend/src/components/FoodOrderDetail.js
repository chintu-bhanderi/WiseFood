import { useEffect, useState } from "react";
import axios from 'axios';
import { FoodShow } from './FoodShow'
import "./styles.css"
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";



//import React from "react
export const FoodOrderDetail = (props) => {

    const [quantity, setQuantity] = useState(2);
    const foodName = useParams().foodName;
    const navigate = useNavigate();

    // const fetchFoodDetails = async () => {
    //     const res = await axios.get(`http://localhost:8000/api/food-item/${categoryId}`)
    //         .catch(error => console.log(error));
    //     const data = await res.data;
    //     console.log(data);
    //     return data;
    // }

    useEffect(() => {
        // fetchFoodDetails().then(data => setFoodItems(data));
        // console.log(tables);
    }, []);

    const submitHandler = () => {
        navigate(`/food-order/${foodName}/${quantity}`);
    }

    const changeHadler = (event) => {
        setQuantity(event.target.value); 
    }

    return (
                // <label for="cars">Choose a car:</label>
                // <select name="cars" id="cars">
                //     <option value={1}>1</option>
                //     <option value={2}>2</option>
                //     <option value={3}>3</option>
                // </select>
        <>
            <div>
                <Button className="btnShow"
                    onClick={submitHandler}
                >Order</Button>
            </div>
        </>
    );
}
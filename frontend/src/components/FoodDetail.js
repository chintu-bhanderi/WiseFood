import { useEffect, useState } from "react";
import axios from 'axios';
import {FoodShow} from './FoodShow'
import "./styles.css"
import { useParams } from "react-router-dom";



//import React from "react
export const FoodDetail = (props) => {

    const [foodItems,setFoodItems] = useState();
    const categoryId = useParams().categoryId;

    const fetchFoodDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/food-item/${categoryId}`)
          .catch(error => console.log(error));
        const data = await res.data;
        console.log(data);
        return data;
      }
    

    useEffect(()=>{
        fetchFoodDetails().then(data=>setFoodItems(data));
        // console.log(tables);
    },[]);

    return (
        <>
            <div>
                <h1>{categoryId}</h1>
                <div className="tableDetail">

                {foodItems && foodItems.map((foodItem,index) => (
                    <FoodShow
                        foodItemId={foodItem._id}
                        foodName={foodItem.name}
                        price={foodItem.price}
                    />
                ))}
                </div>
            </div>
        </>
    );
}
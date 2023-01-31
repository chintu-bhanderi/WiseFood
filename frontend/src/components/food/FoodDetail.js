import { useEffect, useState } from "react";
import {FoodShow} from './FoodShow'
import "../styles.css"
import { useParams } from "react-router-dom";
import { fetchFoodDetails } from "../../store/actions/foodAction";

export const FoodDetail = (props) => {

    const [foodItems,setFoodItems] = useState();
    const categoryId = useParams().categoryId;

    useEffect(()=>{
        fetchFoodDetails(categoryId).then(data=>setFoodItems(data));
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
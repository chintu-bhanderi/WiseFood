import { useEffect, useState } from "react";
import {FoodShow} from './FoodShow'
import "../styles.css"
import { useParams } from "react-router-dom";
import { fetchFoodDetails } from "../../store/actions/foodAction";
import "../../styles/foodItem.css";
import { useSelector } from "react-redux";

export const FoodDetail = (props) => {
    const {myInfo} = useSelector(state=>state.auth);
    const [foodItems,setFoodItems] = useState();
    const categoryId = useParams().categoryId;

    useEffect(()=>{
        fetchFoodDetails(categoryId).then(data=>setFoodItems(data));
    },[]);

    return (
        <>
            { !myInfo.bookedTable && <h4 style={{'color':'red'}}>Note: Item can Order when you in restuant</h4>}
            <h1 class="foodItemMainHeading">Items</h1>
            <ul class="foodItemCards">
                {foodItems && foodItems.map((foodItem,index) => (
                    <FoodShow
                        foodItemId={foodItem._id}
                        foodName={foodItem.name}
                        price={foodItem.price}
                    />
                ))}
            </ul>
            <div>
                {/* <h1>{categoryId}</h1>
                <div className="tableDetail">
                {foodItems && foodItems.map((foodItem,index) => (
                    <FoodShow
                        foodItemId={foodItem._id}
                        foodName={foodItem.name}
                        price={foodItem.price}
                    />
                ))} */}
                {/* </div> */}
            </div>
        </>
    );
}
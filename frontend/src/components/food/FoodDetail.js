import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FoodShow } from './FoodShow'
import { fetchFoodDetails } from "../../store/actions/foodAction";
import "../../styles/foodItem.css";

export const FoodDetail = (props) => {
    const {myInfo} = useSelector(state=>state.auth);
    const [foodItems,setFoodItems] = useState();
    const categoryId = useParams().categoryId;

    useEffect(()=>{
        fetchFoodDetails(categoryId).then(data=>setFoodItems(data));
    },[]);

    return (
        <>
            { !myInfo.bookedTable && <h4 style={{'color':'red'}}>Note: Item can be Order when you in the restaunt</h4>}
            <h1 class="foodItemMainHeading">Items</h1>
            <ul class="foodItemCards">
                {foodItems && foodItems.map((foodItem,index) => (
                    <FoodShow
                        foodItemId={foodItem._id}
                        foodName={foodItem.name}
                        price={foodItem.price}
                        image={foodItem?.image}
                    />
                ))}
            </ul>
        </>
    );
}
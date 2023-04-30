import { useSelector } from "react-redux";
import { useState } from "react";
import "../../styles/foodItem.css";

export const FoodShow = (props) => {

    const [items,setItems] = useState(0);

    const {myInfo} = useSelector(state=>state.auth);

    return (
        <>
            <li>
            <div class="foodItemCard">
                <img class="foodItemCard__image" src={props?.image} alt="https://www.healthifyme.com/blog/wp-content/uploads/2022/01/shutterstock_1015800871-1-750x375.jpg" />
                <div class="foodItemCard__overlay">
                    <div class="foodItemCard__header">
                        <svg class="foodItemCard__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="foodItemCard__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                        <div class="foodItemCard__header-text">
                            <h3 class="foodItemCard__title">{props.foodName}</h3>
                        </div>
                    </div>
                    <div class="foodItemCard__description">
                        <p style={{"font-size":"20px"}} >Price: {props.price}</p>
                        { myInfo.bookedTable && <div>
                            <div class="foodItemWrapper">
                                
                                <span class="minus" onClick={()=>{if(items>0)setItems(items-1)}}>-</span>
                                <span class="num">{items}</span>
                                <span class="plus" onClick={()=>{setItems(items+1)}}>+</span>
                            </div>
                            {  items>0 && <div class="foodItemBtn">
                                <a href={'/food/food-order/'+props.foodName+'/'+items} class="foodItemLink">Order Now</a>
                            </div>
                            }
                        </div> 
                        }
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}
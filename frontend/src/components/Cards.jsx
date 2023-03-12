import React, { useState } from "react"; 
import {Card, CardGroup, Button} from "react-bootstrap"; 
import "../styles/foodItem.css";

export const Cards = () => { 

    const [items,setItems] = useState(1);

    return (
    <>
      <div>
      <h1 class="foodItemMainHeading">Items</h1>
      <ul class="foodItemCards">
        <li>
            <div class="foodItemCard">
                <img src="https://i.imgur.com/2DhmtJ4.jpg" class="foodItemCard__image" alt="" />
                <div class="foodItemCard__overlay">
                    <div class="foodItemCard__header">
                        <svg class="foodItemCard__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="foodItemCard__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                        <div class="foodItemCard__header-text">
                            <h3 class="foodItemCard__title">Chiily Panner Dry</h3>
                        </div>
                    </div>

                    <div class="foodItemCard__description">
                        <p>Price: 270Rs</p>
                        <div class="foodItemWrapper">
                            <span class="minus" onClick={()=>{if(items>0)setItems(items-1)}}>-</span>
                            <span class="num">{items}</span>
                            <span class="plus" onClick={()=>{setItems(items+1)}}>+</span>
                        </div>
                        { items>0 && <div class="foodItemBtn">
                            <a href="/" class="foodItemLink">Order Now</a>
                          </div>
                        }
                    </div>

                </div>
            </div>
        </li>
        <li>
        <div class="foodItemCard">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="foodItemCard__image" alt="" />
            <div class="foodItemCard__overlay">
                <div class="foodItemCard__header">
                    <svg class="foodItemCard__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <img class="foodItemCard__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                    <div class="foodItemCard__header-text">
                        <h3 class="foodItemCard__title">Chiily Panner Dry</h3>
                    </div>
                </div>

                <div class="foodItemCard__description">
                    <p>Price: 270Rs</p>
                    <div class="foodItemWrapper">
                        <span class="minus">-</span>
                        <span class="num">00</span>
                        <span class="plus">+</span>
                    </div>
                    <div class="foodItemBtn"><a href="" target="_blank" class="foodItemLink">Order Now</a>
                    </div>
                </div>

            </div>
        </div>
        </li>
        </ul>
      </div>
    </> 
    )
}
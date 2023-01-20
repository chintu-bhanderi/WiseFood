import React from "react"; 
import {Card, CardGroup, Button} from "react-bootstrap"; 
import "../styles/category.css";

export const Cards = () => { 
    return (
    <>
    <h1 class="mainHeading">Categories</h1>
    <ul class="cards">
        <li>
            <a href="/" class="card">
                <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title">kim Cattrall</h3>
                        </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
            </a>
        </li>
        <li>
            <a href="/" class="card">
                <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title">kim Cattrall</h3>
                        </div>
                    </div>
                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
            </a>
        </li>
    </ul>
    </> 
    )
}
 

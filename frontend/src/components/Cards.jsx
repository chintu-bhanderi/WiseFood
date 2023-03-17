import React, { useState } from "react"; 
import {Card, CardGroup, Button} from "react-bootstrap"; 
import "../styles/foodItem.css";

export const Cards = () => { 

    const [items,setItems] = useState(1);

    return (
    <>
        <img src="https://thumbs.dreamstime.com/b/empty-wooden-table-top-blurred-restaurant-cafe-light-bac-background-can-be-used-product-display-97966416.jpg" style={{'width':'100%'}} class="w3-circle w3-right" alt="Chef" />   
        
    </> 
    )
}
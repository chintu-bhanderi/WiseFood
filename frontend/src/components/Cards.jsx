import React from "react"; 
import {Card, CardGroup, Button} from "react-bootstrap"; 
import "./styles.css";

export const Cards = () => { 
    return (
    <>
    <div className="heading">Tables</div>
    <div className="cards">
        <div className="card">
            <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
            <div className="content">
                <h2>Table No. 1</h2>
                <h2>Sitting avilable : 4</h2>
                <h2>Price : 300Rs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="" className="button">Book Table</a>
            </div>
        </div>
    </div>
    </> 
    )
}
 

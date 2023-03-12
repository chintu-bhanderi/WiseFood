import React from "react"; 
import {Card, CardGroup, Button} from "react-bootstrap"; 
// import "../../styles/foodItem.css";

export const About = () => { 
    return (
    <>
    <h1 className="mainHeading">Items</h1>
    <ul className="cards">
        <li>
            <div className="card">
                <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">Chiily Panner Dry</h3>
                        </div>
                    </div>

                    <div className="card__description">
                        <p>Price: 270Rs</p>
                        <div className="wrapper">
                            <span className="minus">-</span>
                            <span className="num">00</span>
                            <span className="plus">+</span>
                        </div>
                        <div className="btn"><a href="/" target="_blank">Order Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </li>
            <li>
                <div className="card">
                    <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className="card__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                            <div className="card__header-text">
                                <h3 className="card__title">Chiily Panner Dry</h3>
                            </div>
                        </div>

                        <div className="card__description">
                            <p>Price: 270Rs</p>
                            <div className="wrapper">
                                <span className="minus">-</span>
                                <span className="num">00</span>
                                <span className="plus">+</span>
                            </div>
                            <div className="btn"><a href="/" target="_blank">Order Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
    </ul>
    </> 
    )
}
 

import { Button } from "react-bootstrap";
import "../../styles/Table.css";

export const UserFoodOrderedShow = (props) => {

    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/01/shutterstock_1015800871-1-750x375.jpg" alt="img"/>
                    <div className="content">
                        <h2>Name: {props.name}</h2>
                        <h2>Quantity: {props.quantity}</h2>
                        <h2>TotalPrice: {props.totalPrice}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
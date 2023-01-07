import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useEffect } from "react";

export const ChefShow = (props) => {

    const navigate = useNavigate();  
    
    const clickHandler = () => {
        navigate(`/chef/order/${props.chefId}`)
    }

    return (
        <>
            <span className="ordersShow">
                    <p>id: {props.chefId}</p>
                    <p>Name: {props.name}</p>
                    <p>quantity: {props.load}</p>
                <Button className="btnShow"
                    onClick={clickHandler}
                >Done</Button>
            </span>
        </>
    )
}
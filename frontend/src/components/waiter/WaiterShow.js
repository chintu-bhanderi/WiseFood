import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

export const WaiterShow = (props) => {

    const navigate = useNavigate();  
    
    const clickHandler = () => {
        navigate(`/waiter/order/${props.chefId}`)
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
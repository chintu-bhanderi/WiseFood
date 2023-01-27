import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

export const FoodShow = (props) => {
        // {/* {props.chair} */}

    const navigate = useNavigate();    

    return (
        <>
            <span className="tableShow">
                    <p>Name: {props.foodName}</p>
                    <p>price: {props.price}</p>
                <Button className="btnShow"
                    onClick={()=>{navigate(`/food/food-order/${props.foodName}`)}}
                >Order</Button>
            </span>
        </>
    )
}
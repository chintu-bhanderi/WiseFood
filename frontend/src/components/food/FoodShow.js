import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const FoodShow = (props) => {

    const {myInfo} = useSelector(state=>state.auth);
    const navigate = useNavigate();    

    return (
        <>
            <span className="tableShow">
                    <p>Name: {props.foodName}</p>
                    <p>price: {props.price}</p>
                {
                    myInfo.bookedTable && <Button className="btnShow"
                        onClick={()=>{navigate(`/food/food-order/${props.foodName}`)}}
                    >Order</Button> 
                }
            </span>
        </>
    )
}
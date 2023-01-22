import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

export const SlotShow = (props) => {
        // {/* {props.chair} */}

    const navigate = useNavigate();    

    return (
        <>
            <span className="tableShow">
                    <p>id: {props.id}</p>
                    <p>slotNo: {props.slotNo}</p>
                    <p>startTime: {props.startTime}</p>
                    <p>endTime: {props.endTime}</p>
                <Button className="btnShow"
                    onClick={()=>{navigate(`/food-order/`)}}
                >Order</Button>
            </span>
        </>
    )
}
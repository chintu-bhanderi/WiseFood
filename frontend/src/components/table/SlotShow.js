import "../styles.css"
import { Button} from '@mui/material';

export const SlotShow = (props) => {
    return (
        <>
            <span className="tableShow">
                    <p>id: {props.id}</p>
                    <p>slotNo: {props.slotNo}</p>
                    <p>startTime: {props.startTime}</p>
                    <p>endTime: {props.endTime}</p>
                <Button className="btnShow"
                    onClick={()=>{props.selectSlotHandler(props.id)}}
                >Order</Button>
            </span>
        </>
    )
}
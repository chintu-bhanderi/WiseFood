import { Button} from '@mui/material';
import "../../styles/slot.css";

export const SlotShow = (props) => {
    return (
        <>
            <div className="cards">
                <div className="slot-card">
                    <div className="content">
                    <p>slotNo: {props.slotNo}</p>
                    <p>startTime: {props.startTime}</p>
                    <p>endTime: {props.endTime}</p>
                    <Button className="btnShow"
                    onClick={()=>{props.selectSlotHandler(props.id)}}
                    >Find</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
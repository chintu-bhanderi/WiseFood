import "./styles.css"
import { Button} from '@mui/material';
import { redirect, useNavigate } from "react-router-dom";

export const TableShow = (props) => {
    const navigate = useNavigate();
        // {/* {props.chair} */}
    const temp = () => {
        navigate(`/table-book/${props.tableId}`)
    }

    return (  
        <>
            <span className="tableShow">
                    <p>chair: {props.chair}</p>
                    <p>price: {props.price}</p>
                    <p>id: {props.tableId}</p>
                <Button className="btnShow"
                    onClick={temp}
                >Book</Button>
            </span>
        </>
    )
}
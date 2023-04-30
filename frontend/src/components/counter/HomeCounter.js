import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

export const HomeCounter = () => {

    const navigate = useNavigate();

    return (
        <>
            <Button className="btnShow"
                    onClick={()=>{navigate(`/counter/tables-book/id`)}}
            >FindTableBooksById</Button>
            <br />
            <br />
            <Button className="btnShow"
                    onClick={()=>{navigate(`/counter/tables-order`)}}
            >FindTableOrders</Button>
        </>
    );
}
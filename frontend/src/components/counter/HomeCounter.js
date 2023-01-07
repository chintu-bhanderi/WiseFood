import "../styles.css"
import { Button} from '@mui/material';
import { useNavigate } from "react-router-dom";



//import React from "react
export const HomeCounter = () => {

    const navigate = useNavigate();

    return (
        <>
            <Button className="btnShow"
                    onClick={()=>{navigate(`/counter/tables-book`)}}
            >FindTableBooks</Button>
            <br />
            <Button className="btnShow"
                    onClick={()=>{navigate(`/counter/tables-order`)}}
            >FindTableOrders</Button>
        </>
    );
}
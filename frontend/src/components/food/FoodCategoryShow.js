import "../styles.css"
import { Button} from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";

export const FoodCategoryShow = (props) => {
        // {/* {props.chair} */}
    const navigate = useNavigate();

    return (
        <>
            <span className="tableShow">
                    <p>Name: {props.categoryName}</p>
                    <p>id: {props.categoryId}</p>
                <Button className="btnShow"
                    onClick={()=>{navigate(`/category/${props.categoryId}`)}}
                >Show</Button>
            </span>
        </>
    )
}
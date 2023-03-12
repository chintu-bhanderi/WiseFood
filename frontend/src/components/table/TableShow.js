import { Button } from "@mui/material";
import "../../styles/Table.css";

export const TableShow = (props) => {
    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
                    <div className="content">
                        <h2>Table No. {props.tableNo}</h2>
                        <h2>Sitting avilable : {props.chair}</h2>
                        <h2>Price : {props.price}</h2>
                        <Button onClick={()=>props.postTableBook(props.tableId)}>Book Table</Button>

                    </div>
                </div>
            </div>
            
        </>
    )
}
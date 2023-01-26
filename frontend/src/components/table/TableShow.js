import { Button } from "@mui/material";
import "../../styles/Table.css";

export const TableShow = (props) => {
    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
                    <div className="content">
                        <h2>Table No. 1</h2>
                        <h2>Sitting avilable : {props.chair}</h2>
                        <h2>Price : {props.price}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        {/* <a href={'/table-book/'+ props.tableId} className="button">Book Table</a> */}
                        <Button onClick={()=>props.postTableOrder(props.tableId)}>Book Table</Button>

                    </div>
                </div>
            </div>
            
        </>
    )
}
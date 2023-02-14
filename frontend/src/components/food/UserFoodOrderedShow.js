import { Button } from "react-bootstrap";
import "../../styles/Table.css";

export const UserFoodOrderedShow = (props) => {

    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
                    <div className="content">
                        <h2>foodOrder Id. {props.id}</h2>
                        <h2>name: {props.name}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
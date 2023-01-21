import { Button } from "react-bootstrap";
import "../../styles/Table.css";

export const UserTableBookShow = (props) => {

    const cancelTableBook = () => {
        props.deleteTableBook(props.id);
        console.log(props.id);
    }

    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
                    <div className="content">
                        <h2>TableBook No. {props.id}</h2>
                        <h2>Slot {props.slot}</h2>
                        <h2>Table : {props.table}</h2>
                        <h2>User : {props.user}</h2>
                        <h2>Price : {props.price}</h2>
                        <h2>Date : {props.date}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button onClick={cancelTableBook}>Cancel</Button>
                    </div>
                </div>
            </div>
        </>
    )
                        // <a href='/table/tables-book/user' className="button">Cancel Table-Book</a>
}
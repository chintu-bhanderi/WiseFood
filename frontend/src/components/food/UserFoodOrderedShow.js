import "../../styles/Table.css";

export const UserFoodOrderedShow = (props) => {
    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.image} alt="img"/>
                    <div className="content">
                        <h2>Name: {props.name}</h2>
                        <h2>Quantity: {props.quantity}</h2>
                        <h2>TotalPrice: {props.totalPrice}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
import { Button } from "@mui/material";
import "../../styles/Table.css";
import {  userPaymentRequest, userPaymentVerify } from "../../store/actions/tableAction";



export const TableShow = (props) => {

    const handleBooking = async (tableId,price) => {

        // const { token } = cookies;
        console.log('on table booking');
        try {
            
                const response = await userPaymentRequest(tableId,price);
                console.log(response)
                console.log(response.data.data.id);

                const options = {
                    key: "rzp_test_L7n5RNkA0Mk2QS",
                    amount: 200,
                    currency: "INR",
                    name: 'Demo',
                    description: 'Test Payment',
                    image: 'https://avatars.githubusercontent.com/u/25058652?v=4',
                    order_id: response.data.data.id,
                    handler: async (response) => {
                        console.log(response);
                        console.log("booking success");
                        props.postTableBook(props.tableId)

                        // try {
                            // const verificationResponse = await userPaymentVerify(response.razorpay_order_id, response.razorpay_payment_id,response.razorpay_signature);

                            // console.log(verificationResponse); 

                        //     if (verificationResponse.type === 'data') {
                                
                        //         const response = await userbooking(token, params, user, doctor, timingSlot, textfeelling, meetingMode);
                              
                        //         if (response.type === 'data') {
                                    
                                    
                        //         } else {
                                    
                        //         }
                        //     } else {
                                
                        //     }
                        // } catch (error) {

                        // }
                        // handle successful payment response
                    },
                    prefill: {
                        name: 'John Doe',
                        email: 'john.doe@example.com',
                        contact: '+919876543210'
                    },
                    notes: {
                        address: 'Razorpay Corporate Office'
                    },
                    theme: {
                        color: '#F37254'
                    }
                };
                console.log(options);
                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            
        } catch (error) {
            // dispatch(hideLoading());
            // message.error("some thing went wrong");
        }
    };

    return (  
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1363800317/photo/unique-round-wooden-dining-room-table.jpg?s=612x612&w=0&k=20&c=77IBIXe5TTm-_ShpwXWLHUgvFyxBc0KPB94Z-Et8rEE=" alt="img"/>
                    <div className="content">
                        <h2>Table No. {props.tableNo}</h2>
                        <h2>Sitting avilable : {props.chair}</h2>
                        <h2>Price : {props.price}</h2>
                        {/* <Button onClick={()=>props.postTableBook(props.tableId)}>Book Table</Button> */}
                        <Button onClick={()=>handleBooking(props.tableId,props.price)}>Book Table</Button>
         

                    </div>
                </div>
            </div>
            
        </>
    )
}
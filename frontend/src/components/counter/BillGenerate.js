import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../store/actions/authAction";
import { fetchTableBookOrders } from "../../store/actions/foodAction";
import { fetchTableBookDetailsById } from "../../store/actions/tableAction";
import "../../styles/bill.css"

export const BillGenerate = () => {

    const bookId = useParams().bookId;

    const [orders, setOrders] = useState([]);
    const [bill, setBill] = useState(0);
    const [tableBookDetail,setTableBookDetail] = useState();
    const [user,setUser] = useState();

    useEffect(()=>{
        fetchTableBookOrders(bookId).then()
        .then((data) => {
            return data.filter((order) => {
                if (order.isDone) setBill(bill + order.totalPrice);
                return order.isDone;
            })
        })
        .then(data => { setOrders(data) })

        fetchTableBookDetailsById(bookId)
        .then(data=>{
            setTableBookDetail(data);
            fetchUserById(data.user)
            .then(data=>setUser(data));
            return data;
        });
    },[])

    function getTotalBill() {
        let totalBill = 0;
        for(let i=0; i<orders.length; i++){
            totalBill += orders[i].totalPrice;
        }
        return totalBill;
    }

    return (
        <>  
           <div class="bill_wrapper">
        <div class="bill_invoice_wrapper">
            <div class="bill_header">
                <div class="bill_logo_invoice_wrap">
                    <div class="bill_logo_sec">
                        <div class="bill_title_wrap">
                            <p class="bill_title bill_bold" style={{ fontSize: '2rem',paddingTop: '-20px' }}>Wise-Food</p>
                            <p class="bill_sub_title" style={{ fontSize: '1rem' }}>Privite Limited</p>
                        </div>
                    </div>
                    <div class="bill_invoice_sec ">
                        <p class="bill_invoice bill_bold ">INVOICE</p>
                        <p class="bill_invoice_no ">
                            <span class="bill_bold ">TableBook No.</span>
                            <span>{tableBookDetail?.id}</span>
                        </p>
                        <p class="bill_date ">
                            <span class="bill_bold ">Date : </span>
                            <span>{tableBookDetail?.date}</span>
                        </p>
                    </div>
                </div>
                <div class="bill_total_wrap ">
                    <div class="bill_sec ">
                        <p>Bill To:</p>
                        <p class="bill_bold bill_name ">{user?.firstName} {user?.lastName}</p>
                        <span>
			           {user?.address}<br/>
                       {user?.email}
			        </span>
                    </div>
                </div>
            </div>
            <div class="bill_body ">
                <div class="bill_main_table ">
                    <div class="bill_table_header ">
                        <div class="bill_row ">
                            <div class="bill_col bill_col_no ">NO.</div>
                            <div class="bill_col bill_col_des ">ITEM DESCRIPTION</div>
                            <div class="bill_col bill_col_price ">PRICE</div>
                            <div class="bill_col bill_col_qty ">QTY</div>
                            <div class="bill_col bill_col_total ">TOTAL</div>
                        </div>
                    </div>
                    <div class="bill_table_body ">
                        {
                            orders && orders.map((order,index)=>(
                                <div class="bill_row ">
                                    <div class="bill_col bill_col_no ">
                                        <p>{index+1}</p>
                                    </div>
                                    <div class="bill_col bill_col_des ">
                                        <p class="bill_bold ">{order.name}</p>
                                    </div>
                                    <div class="bill_col bill_col_price ">
                                        <p>Rs {order.totalPrice/order.quantity}</p>
                                    </div>
                                    <div class="bill_col bill_col_qty ">
                                        <p>{order.quantity}</p>
                                    </div>
                                    <div class="bill_col bill_col_total ">
                                        <p>Rs {order.totalPrice}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div class="bill_paymethod_grandtotal_wrap ">
                    <div class="bill_paymethod_sec ">
                        <p class="bill_bold ">Payment Method</p>
                        <p>Visa, Master Card, Online Payment, UPI and We accept Cheque</p>
                    </div>
                    <div class="bill_grandtotal_sec ">
                        <p class="bill_bold ">
                            <span>SUB TOTAL</span>
                            <span>{getTotalBill()}</span>
                        </p>
                        {/* <p>
                            <span>Tax Vat 18%</span>
                            <span>+Rs 192</span>
                        </p>
                        <p>
                            <span>Discount 10%</span>
                            <span>-Rs 107</span>
                        </p> */}
                        <p class="bill_bold ">
                            <span>Grand Total</span>
                            <span>{getTotalBill()}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="bill_footer ">
                <p>Thank you and Best Wishes</p>
                <div class="bill_terms ">
                    <p class="bill_tc bill_bold ">Terms & Coditions</p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non praesentium doloribus. Quaerat vero iure itaque odio numquam, debitis illo quasi consequuntur velit, explicabo esse nesciunt error aliquid quis eius!</p> */}
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
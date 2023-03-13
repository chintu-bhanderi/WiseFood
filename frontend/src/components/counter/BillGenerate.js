import "../../styles/bill.css"

export const BillGenerate = () => {

    return (
        <>
            <div class="wrapper">
        <div class="invoice_wrapper">
            <div class="header">
                <div class="logo_invoice_wrap">
                    <div class="logo_sec">
                        <div class="title_wrap ">
                            <p class="title bold ">Wise-Food</p>
                            <p class="sub_title ">Privite Limited</p>
                        </div>
                    </div>
                    <div class="invoice_sec ">
                        <p class="invoice bold ">INVOICE</p>
                        <p class="invoice_no ">
                            <span class="bold ">Invoice No.</span>
                            <span>#3488</span>
                        </p>
                        <p class="date ">
                            <span class="bold ">Date : </span>
                            <span>08/Jan/2022</span>
                        </p>
                    </div>
                </div>
                <div class="bill_total_wrap ">
                    <div class="bill_sec ">
                        <p>Bill To</p>
                        <p class="bold name ">John Doi</p>
                        <span>
                            123 walls street, New Delhi<br/>
                            +91 929879234<br/>
                            johndoi07@gmail.com
                        </span>
                    </div>
                    <div class="total_wrap ">
                        <p>Total Due</p>
                        <p class="bold price ">Rs 1155</p>
                    </div>
                </div>
            </div>
            <div class="body ">
                <div class="main_table ">
                    <div class="table_header ">
                        <div class="row ">
                            <div class="col col_no ">NO.</div>
                            <div class="col col_des ">ITEM DESCRIPTION</div>
                            <div class="col col_price ">PRICE</div>
                            <div class="col col_qty ">QTY</div>
                            <div class="col col_total ">TOTAL</div>
                        </div>
                    </div>
                    <div class="table_body ">
                        <div class="row ">
                            <div class="col col_no ">
                                <p>01</p>
                            </div>
                            <div class="col col_des ">
                                <p class="bold ">Pav Bhaji</p>
                            </div>
                            <div class="col col_price ">
                                <p>Rs 150</p>
                            </div>
                            <div class="col col_qty ">
                                <p>1</p>
                            </div>
                            <div class="col col_total ">
                                <p>Rs 150</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col col_no ">
                                <p>02</p>
                            </div>
                            <div class="col col_des ">
                                <p class="bold ">Chilly Paneer Dry</p>
                            </div>
                            <div class="col col_price ">
                                <p>Rs 220</p>
                            </div>
                            <div class="col col_qty ">
                                <p>2</p>
                            </div>
                            <div class="col col_total ">
                                <p>Rs 440</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col col_no ">
                                <p>03</p>
                            </div>
                            <div class="col col_des ">
                                <p class="bold ">Masala Dhosa</p>
                            </div>
                            <div class="col col_price ">
                                <p>Rs 120</p>
                            </div>
                            <div class="col col_qty ">
                                <p>4</p>
                            </div>
                            <div class="col col_total ">
                                <p>Rs 480</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="paymethod_grandtotal_wrap ">
                    <div class="paymethod_sec ">
                        <p class="bold ">Payment Method</p>
                        <p>Visa, Master Card, Online Payment, UPI and We accept Cheque</p>
                    </div>
                    <div class="grandtotal_sec ">
                        <p class="bold ">
                            <span>SUB TOTAL</span>
                            <span>Rs 1070</span>
                        </p>
                        <p>
                            <span>Tax Vat 18%</span>
                            <span>+Rs 192</span>
                        </p>
                        <p>
                            <span>Discount 10%</span>
                            <span>-Rs 107</span>
                        </p>
                        <p class="bold ">
                            <span>Grand Total</span>
                            <span>Rs 1155</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer ">
                <p>Thank you and Best Wishes</p>
                <div class="terms ">
                    <p class="tc bold ">Terms & Coditions</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non praesentium doloribus. Quaerat vero iure itaque odio numquam, debitis illo quasi consequuntur velit, explicabo esse nesciunt error aliquid quis eius!</p>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
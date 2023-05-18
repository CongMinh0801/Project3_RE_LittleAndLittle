import "./view_pay.css"
import childImg from "../../assets/img/Trini_Arnold_Votay.png"
import { PayTicket } from "../../layout/pay_ticket/pay_ticket"

export const ViewPay = () => {
    return (
        <div className="view-pay" style={{width:"1920px", height:"1080px"}}>
            <div className="view-pay__container">
                <h1 className="view-pay__container-title">Thanh toán</h1>
                <img src={childImg} alt="" className="view-pay__container-img"/>
                <PayTicket/>
            </div>
        </div>
    )
}
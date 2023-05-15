import "./view_pay-success.css"
import childImg from "../../assets/img/Alvin_Arnold_Votay.png"
import { PayTicketItem } from "../../layout/pay_ticket_item/pay_ticket_item"
import { Triangle } from "react-feather"

interface ViewPaySuccessProps {
    Count:number;
}

export const ViewPaySuccess = ({Count}:ViewPaySuccessProps) => {
    const pageNumber:number = 1;
    return (
        <div className="view-pay-success" style={{width:"1920px", height:"1080px"}}>
            <div className="view-pay-success__container">
                <h1 className="view-pay-success__container-title">Thanh toán thành công</h1>
                <img src={childImg} alt="" className="view-pay-success__container-img"/>
                <div className="view-pay-success__container-block">
                    <div className="view-pay-success__container-block-content">
                        <PayTicketItem TicketId="207Ct68653" TicketType="Vé cổng" UseDay="08/01/2002"/>
                        <PayTicketItem TicketId="207Ct68653" TicketType="Vé cổng" UseDay="08/01/2002"/>
                        <PayTicketItem TicketId="207Ct68653" TicketType="Vé cổng" UseDay="08/01/2002"/>
                        <PayTicketItem TicketId="207Ct68653" TicketType="Vé cổng" UseDay="08/01/2002"/>
                    </div>
                    <button className="view-pay-success__container-btn1 view-pay-success__container-btn-triangle">
                        <Triangle className="view-pay-success__container-btn-icon"/>
                    </button>
                    <button className="view-pay-success__container-btn2 view-pay-success__container-btn-triangle">
                        <Triangle className="view-pay-success__container-btn-icon"/>
                    </button>
                    <p className="view-pay-success__container-count">Số lượng: {Count} vé</p>
                    <p className="view-pay-success__container-pay-number">Trang {pageNumber}/{Count%4==0 ? Count/4 : Math.round(Count/4)}</p>
                </div>
                <span>
                    <button className="view-pay-success__container-btn primary-btn btn">Tải về</button>
                    <button className="view-pay-success__container-btn primary-btn btn">Gửi Email</button>
                </span>
            </div>
        </div>
    )
}
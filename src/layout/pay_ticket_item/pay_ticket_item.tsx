import "./pay_ticket_item.css"
import QRIMG from "../../assets/img/QR.png"
import { Check } from "react-feather";

interface PayTicketItemProps {
    TicketId: string;
    TicketType: string;
    UseDay: string;
}   

export const PayTicketItem = ({TicketId, TicketType, UseDay} : PayTicketItemProps) => {
    return (
        <div className="pay-ticket-item">
            <img src={QRIMG} alt="" />
            <p>{TicketId}</p>
            <p>{TicketType}</p>
            <p>---</p>
            <p>Ngày sử dụng: {UseDay}</p>
            <span>
                <Check className="pay-ticket-item__check-icon"/>
            </span>
        </div>
    )
} 
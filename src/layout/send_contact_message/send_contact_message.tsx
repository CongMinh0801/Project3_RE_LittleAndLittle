import "./send_contact_message.css"
import {X} from "react-feather"

export const SendContactMessage = () => {
    return (
        <div className="send-contact-message">
            <p>Gửi liên hệ thành công.<br/> Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
            <button><X className="send-contact-message-icon"/></button>
        </div>
    )
}
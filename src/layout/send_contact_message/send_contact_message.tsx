import "./send_contact_message.css"
import {X} from "react-feather"

export const SendContactMessage = () => {
    const handleHideMessage = () => {
        document.querySelector(".send-contact-message-back")?.setAttribute("style","display:none;");
    } 
    return (
        <div className="send-contact-message-back">
            <div className="send-contact-message">
                <p>Gửi liên hệ thành công.<br/> Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
                <button onClick={()=>handleHideMessage()}><X className="send-contact-message-icon"/></button>
            </div>
        </div>
    )
}
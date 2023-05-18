import "./contact_form.css"
import { SendContactMessage } from './../send_contact_message/send_contact_message';

export const ContactForm = () => {
    const handleShowMessage = () => {
        document.querySelector(".send-contact-message-back")?.setAttribute("style","display:block;");
    } 

    return (
        <div className="contact-form">
            <div className="contact-form__container">
                <div className="contact-form__container-row">
                    <p className="contact-form__container-row-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. </p>
                </div>
                <div className="contact-form__container-row">
                    <div className="contact-form__container-col1">
                        <input placeholder="Tên" type="text" name="" id="" />
                    </div>
                    <div className="contact-form__container-col2">
                        <input placeholder="Email" type="text" name="" id="" />
                    </div>
                </div>
                <div className="contact-form__container-row">
                    <div className="contact-form__container-col1">
                        <input placeholder="Số điện thoại" type="text" name="" id="" />
                    </div>
                    <div className="contact-form__container-col2">
                        <input placeholder="Địa chỉ" type="text" name="" id="" />
                    </div>
                </div>
                <div className="contact-form__container-row">
                    <textarea defaultValue={""} placeholder="Lời nhắn"/>
                </div>
                <div className="contact-form__container-row">
                    <button onClick={()=>handleShowMessage()} className="primary-btn contact-form__container-row-btn">Gửi liên hệ</button>
                </div>
            </div>
        </div>
    )
}
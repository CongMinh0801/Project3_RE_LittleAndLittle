import "./view_contact.css"
import childImg from "../../assets/img/Alex_AR_Lay_Do.png"
import { ContactForm } from "../../layout/contact_form/contact_form"
import { TagInfo } from "../../layout/tag_info/tag_info"

export const ViewContact = () => {
    return (
        <div className="view-contact" style={{width:"1920px", height:"1080px"}}>
            <div className="view-contact__container">
                <h1 className="view-contact__container-title">Liên hệ</h1>
                <img src={childImg} alt="" className="view-contact__container-img"/>
                <ContactForm />
                <div className="view-contact__container-tag">
                    <TagInfo title="Địa chỉ" content="ACB Dương Quảng Hàm, P5, Gò Vấp"/>
                    <TagInfo title="Email" content="minhdeptrai@deptrai.com"/>
                    <TagInfo title="Điện thoại" content="0375394573"/>
                </div>
            </div>
        </div>
    )
}
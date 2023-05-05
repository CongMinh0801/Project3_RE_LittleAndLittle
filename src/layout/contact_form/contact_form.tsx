import "./contact_form.css"

export const ContactForm = () => {
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
                    <button className="primary-btn contact-form__container-row-btn">Gửi liên hệ</button>
                </div>
            </div>
        </div>
    )
}
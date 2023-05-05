import "./pay_ticket.css"
import TagTitle from "../../assets/img/title1.png"
import { Calendar } from "react-feather"

export const PayTicket = () => {
    return (
        <div className="pay-ticket">
            <div className="pay-ticket__block1">
                <div className="pay-ticket__block1-container">
                    <div className="pay-ticket__block1-container-title-tag">
                        <img src={TagTitle} alt="" />
                        <p>VÉ CỔNG - VÉ GIA ĐÌNH</p>
                    </div>

                    <div className="pay-ticket__container-row pay-ticket__container-row_need_flex">
                        <div className="pay-ticket__container-col">
                            <p>Số tiền thanh tóa</p>
                            <input type="text" name="" id="" className="pay-ticket__container-row-input"/>
                        </div>
                        <div className="pay-ticket__container-col">
                            <p>Số lượng vé</p>
                            <input type="text" name="" id="" className="pay-ticket__container-row-input"/>
                        </div>
                        <div className="pay-ticket__container-col">
                            <p>Ngày sử dụng</p>
                            <input type="text" name="" id="" className="pay-ticket__container-row-input"/>
                        </div>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Thông tin liên hệ</p>
                        <input type="text" name="" id="pay-ticket__container-row-contact-info-input" className="pay-ticket__container-row-input"/>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Điện thoại</p>
                        <input type="text" name="" id="pay-ticket__container-row-phone-number-input" className="pay-ticket__container-row-input"/>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Email</p>
                        <input type="text" name="" id="pay-ticket__container-row-email-input" className="pay-ticket__container-row-input"/>
                    </div>
                </div>
            </div>
            <div className="pay-ticket__block2">
                <div className="pay-ticket__block2-container">
                    <div className="pay-ticket__block2-container-title-tag">
                        <img src={TagTitle} alt="" />
                        <p>THÔNG TIN THANH TOÁN</p>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Số thẻ</p>
                        <input type="text" name="" id="" className="pay-ticket__container-row-input"/>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Họ tên chủ thẻ</p>
                        <input type="text" name="" id="" className="pay-ticket__container-row-input"/>
                    </div>
                    <div className="pay-ticket__container-row pay-ticket__container-row_have_btn">
                        <p>Ngày hết hạn</p>
                        <div>
                            <input type="text" name="" id="" className="pay-ticket__container-row-input"/>
                            <button className="pay-ticket__container-row-calendar">
                                <Calendar className="pay-ticket__container-row-calendar-icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>CVV/CVC</p>
                        <input type="text" name="" id="pay-ticket__container-row-cvv-input" className="pay-ticket__container-row-input"/>
                    </div>
                    <button className="pay-ticket__container-btn primary-btn">Thanh toán</button>
                </div>

            </div>
            <div className="pay-ticket__middle">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    ) 
}
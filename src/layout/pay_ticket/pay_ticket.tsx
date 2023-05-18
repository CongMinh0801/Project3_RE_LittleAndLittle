import "./pay_ticket.css"
import TagTitle from "../../assets/img/title1.png"
import { Calendar } from "react-feather"
import { CalendarComponent } from "../calendar/calendar"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { TagInfo } from './../tag_info/tag_info';
import { PayFail } from "../pay_fail/pay_fail"

export const PayTicket = () => {
    const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);
    const infoArray = useSelector((state: RootState) => state.bookTicket.infoArray);

    const ticketPackPrice:number = 250000;

    function testPhoneNumber(str:string) {
        var regex = /^[0-9]+$/;
        return regex.test(str);
    }

    function testEmail(str:string) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(str);
    }

    const handleShowViewPaySuccess = () => {
        if (infoArray[4].length != 10 || !testPhoneNumber(infoArray[4]) || !testEmail(infoArray[5])) {
            document.querySelector(".pay-fail")?.setAttribute("style","display:block;");
            setTimeout(() => {
                document.querySelector(".pay-fail")?.setAttribute("style","display:none;");
            },3000)
        } else {
            document.querySelector(".view-pay-success")?.setAttribute("style","display:block;");
        }
    }
    const handleShowCalendar = () => {
        const element = document.querySelector(".view-pay-calendar") as HTMLElement;
        const classList = element.classList
        if (element && classList.contains("view-pay-calendar--hidden")) {
            element.setAttribute("style","display:block;");
            element.classList.remove("view-pay-calendar--hidden");
            element.classList.add("view-pay-calendar--show");
        } else if (element && classList.contains("view-pay-calendar--show")){
            element.setAttribute("style","display:none;");
            element.classList.remove("view-pay-calendar--show");
            element.classList.add("view-pay-calendar--hidden");
        }
    }
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
                            <p>Số tiền thanh toán</p>
                            <input value={`${(parseInt(infoArray[1])*ticketPackPrice).toLocaleString('vi-VN')} vnđ`} type="text" name="" id="" className="pay-ticket__container-row-input"/>
                        </div>
                        <div className="pay-ticket__container-col">
                            <p>Số lượng vé</p>
                            <input value={infoArray[1]} type="text" name="" id="" className="pay-ticket__container-row-input"/>
                        </div>
                        <div className="pay-ticket__container-col">
                            <p>Ngày sử dụng</p>
                            <input value={infoArray[2]} type="text" name="" id="" className="pay-ticket__container-row-input"/>
                        </div>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Thông tin liên hệ</p>
                        <input value={infoArray[3]} type="text" name="" id="pay-ticket__container-row-contact-info-input" className="pay-ticket__container-row-input"/>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Điện thoại</p>
                        <input value={infoArray[4]} type="text" name="" id="pay-ticket__container-row-phone-number-input" className="pay-ticket__container-row-input"/>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>Email</p>
                        <input value={infoArray[5]} type="text" name="" id="pay-ticket__container-row-email-input" className="pay-ticket__container-row-input"/>
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
                            <input value={selectedDay} type="text" name="" id="" className="pay-ticket__container-row-input"/>
                            <button onClick={()=>handleShowCalendar()} className="pay-ticket__container-row-calendar">
                                <Calendar className="pay-ticket__container-row-calendar-icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="pay-ticket__container-row">
                        <p>CVV/CVC</p>
                        <input type="text" name="" id="pay-ticket__container-row-cvv-input" className="pay-ticket__container-row-input"/>
                    </div>
                    <button onClick={()=>handleShowViewPaySuccess()} className="pay-ticket__container-btn primary-btn">Thanh toán</button>
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
            <div className="view-pay-calendar view-pay-calendar--hidden" style={{display:"none"}}>
                <CalendarComponent/>
            </div>
            
            <PayFail/>
        </div>
    ) 
}

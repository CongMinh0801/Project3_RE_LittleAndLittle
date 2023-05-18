import "./book_ticket.css"
import "../pay_ticket/pay_ticket.css"
import TagTitle from "../../assets/img/title2.png"
import { Calendar, Star, Triangle } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import { CalendarComponent } from "../calendar/calendar"
import { RootState } from "../../app/store"
import { setInfoArray } from "./book_ticket_slice"

export const BookTicket = () => {
    const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);
    const dispatch = useDispatch();
    const handleShowViewPay = () => {
        const ticketPack = document.getElementById("book-ticket__ticketpack") as HTMLInputElement;
        const ticketCount = document.getElementById("book-ticket__count") as HTMLInputElement;
        const ticketUseDay = document.getElementById("book-ticket__useday") as HTMLInputElement;
        const ticketFullName = document.getElementById("book-ticket__fullname") as HTMLInputElement;
        const ticketPhone = document.getElementById("book-ticket__phone") as HTMLInputElement;
        const ticketEmail = document.getElementById("book-ticket__email") as HTMLInputElement;
        dispatch(setInfoArray([ticketPack.value, ticketCount.value, ticketUseDay.value, ticketFullName.value, ticketPhone.value, ticketEmail.value]))
        document.querySelector(".view-pay")?.setAttribute("style","display:block;");
    }
    const handleShowCalendar = () => {
        const element = document.querySelector(".block-calendar") as HTMLElement;
        const classList = element.classList
        if (element && classList.contains("block-calendar--hidden")) {
            element.setAttribute("style","display:block;");
            element.classList.remove("block-calendar--hidden");
            element.classList.add("block-calendar--show");
        } else if (element && classList.contains("block-calendar--show")){
            element.setAttribute("style","display:none;");
            element.classList.remove("block-calendar--show");
            element.classList.add("block-calendar--hidden");
        }
    }
    return (
        <div className="pay-ticket">
            <div className="pay-ticket__block1" style={{height:"584px"}}>
                <div className="pay-ticket__block1-container" style={{padding:"36px 56px", height:"560px"}}>
                    <div className="book-ticket__block1-container-text">
                        <p className="book-ticket__block1-container-text-paragh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
                        <p className="book-ticket__block1-container-text-paragh">Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
                    </div>
                    <div className="book-ticket__block1-container-star">
                        <div className="book-ticket__block1-container-star-row">
                            <Star className="book-ticket__block1-container-star-row-icon"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div className="book-ticket__block1-container-star-row">
                            <Star className="book-ticket__block1-container-star-row-icon"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div className="book-ticket__block1-container-star-row">
                            <Star className="book-ticket__block1-container-star-row-icon"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div className="book-ticket__block1-container-star-row">
                            <Star className="book-ticket__block1-container-star-row-icon"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
            <div className="pay-ticket__block2" style={{height:"584px"}}>
                <div className="pay-ticket__block2-container" style={{padding:"74px 22px", height:"560px"}}>
                    <div className="pay-ticket__block2-container-title-tag">
                        <img src={TagTitle} alt="" style={{width:"284px"}}/>
                        <p>VÉ CỦA BẠN</p>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="book-ticket__ticketpack" value={"Gói gia đình"} />
                        <button className="pay-ticket__container-row-triangle">
                            <Triangle className="book-ticket__container-row-calendar-icon pay-ticket__container-row-calendar-icon"/>
                        </button>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <span className="book-ticket__block2-container-row-span">
                            <input type="text" name="" id="book-ticket__count" placeholder="Số lượng vé" />
                            <input type="text" name="" id="book-ticket__useday" placeholder="Ngày sử dụng" value={selectedDay}/>
                        </span>
                        <button onClick={()=>handleShowCalendar()} className="pay-ticket__container-row-calendar">
                            <Calendar className="pay-ticket__container-row-calendar-icon"/>
                        </button>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="book-ticket__fullname" placeholder="Họ và tên"/>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="book-ticket__phone" placeholder="Số điện thoại"/>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="book-ticket__email" placeholder="Địa chỉ Email"/>
                    </div>
                    <button onClick={()=>handleShowViewPay()} className="pay-ticket__container-btn primary-btn">Đặt vé</button>
                </div>

            </div>
            <div className="pay-ticket__middle"  style={{height:"520px"}}>
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
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="block-calendar block-calendar--hidden" style={{display:"none"}}>
                <CalendarComponent/>
            </div>
        </div>
    ) 
}
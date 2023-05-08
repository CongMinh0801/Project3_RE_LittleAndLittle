import "./book_ticket.css"
import "../pay_ticket/pay_ticket.css"
import TagTitle from "../../assets/img/title2.png"
import { Calendar, Star, Triangle } from "react-feather"

export const BookTicket = () => {
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
                        <input type="text" name="" id="" value={"Gói gia đình"} />
                        <button className="pay-ticket__container-row-triangle">
                            <Triangle className="book-ticket__container-row-calendar-icon pay-ticket__container-row-calendar-icon"/>
                        </button>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <span className="book-ticket__block2-container-row-span">
                            <input type="text" name="" id="" placeholder="Số lượng vé" />
                            <input type="text" name="" id="" placeholder="Ngày sử dụng"/>
                        </span>
                        <button className="pay-ticket__container-row-calendar">
                            <Calendar className="pay-ticket__container-row-calendar-icon"/>
                        </button>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="" placeholder="Họ và tên"/>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="" placeholder="Số điện thoại"/>
                    </div>
                    <div className="book-ticket__block2-container-row">
                        <input type="text" name="" id="" placeholder="Địa chỉ Email"/>
                    </div>
                    <button className="pay-ticket__container-btn primary-btn">Đặt vé</button>
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
        </div>
    ) 
}
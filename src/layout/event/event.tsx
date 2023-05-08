import "./event.css"
import EventImg from "../../assets/img/Rectangle1.png"
import { Calendar } from "react-feather"

interface EventProps {
    EventName: string;
    EventPlace: string;
    DateStart: string;
    DateEnd: string;
    EventPrice: string;
}

export const Event = ({EventName, EventPlace, DateStart, DateEnd, EventPrice}:EventProps) => {
    return (
        <div className="event">
            <div className="event__img">
                <img src={EventImg} alt="" />
            </div>
            <div className="event__content">
                <h2 className="event__content-name">
                    {EventName}
                </h2>
                <p className="event__content-place">
                    {EventPlace}
                </p>
                <div className="event__content-date">
                    <Calendar className="event__content-date-icon"/>
                    <span className="event__content-date-start">
                        {DateStart}
                    </span>
                    -
                    <span className="event__content-date-end">
                        {DateEnd}
                    </span>
                </div>
                <p className="event__content-price">
                    {EventPrice} VNĐ
                </p>
                <button className="btn primary-btn event__content-btn">Xem chi tiết</button>
            </div>
        </div>
    )
}
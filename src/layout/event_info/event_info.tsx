import "./event_info.css"
import img1 from "../../assets/img/Rectangle1(3).png"
import img2 from "../../assets/img/Rectangle1.png"
import { Calendar } from "react-feather"
import { RootState } from "../../app/store"
import { useSelector } from "react-redux"

export const EventInfo = () => {
    const startDate = useSelector((state: RootState) => state.eventInfo.startDate);
    const endDate = useSelector((state: RootState) => state.eventInfo.endDate);
    const place = useSelector((state: RootState) => state.eventInfo.place);
    const price = useSelector((state: RootState) => state.eventInfo.price);
    
    return (
        <div className="event-info">
            <div className="event-info__container">
                <div className="event-info__container-col">
                    <img src={img1} alt="" />
                    <span>
                        <Calendar className="event-info__container-col-calendar-icon"/>  {startDate} - {endDate}
                    </span>
                    <p className="event-info__container-col-place">{place}</p>
                    <p className="event-info__container-col-price">{price} VNĐ</p>
                </div>
                <div className="event-info__container-col">
                    <p>
                        <span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.
                    </p>
                </div>
                <div className="event-info__container-col">
                    <img src={img2} alt="" />
                    <p>
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                    </p>
                </div>
                <div className="event-info__container-col">
                    <p>
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                    </p>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}
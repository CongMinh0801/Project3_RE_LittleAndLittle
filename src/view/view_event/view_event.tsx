import "./view_event.css"
import "../view_contact/view_contact.css"
import leftFlagImg from "../../assets/img/Left_flag.png"
import rightFlagImg from "../../assets/img/Right_flag.png"
import supBackgroundImg1 from "../../assets/img/Group-color.png" 
import supBackgroundImg2 from "../../assets/img/5fd91d494e2b9175c83a.jpg"
import { Event } from "../../layout/event/event"
import { Navbar } from "../../layout/navbar/navbar"
import { Triangle } from "react-feather"

export const ViewEvent = () => {
    return (
        <div className="view-event" style={{width:"1920px", height:"1080px"}}>
            <Navbar/>
            <div className="view-event__container">
                <h1 className="view-event__container-title">Sự kiện nổi bật</h1>
                <img src={leftFlagImg} alt="" className="view-event__container-sub1"/>
                <img src={rightFlagImg} alt="" className="view-event__container-sub2"/>
                <img src={supBackgroundImg1} alt="" className="view-event__container-sub3"/>
                <img src={supBackgroundImg2} alt="" className="view-event__container-sub4"/>
                <div className="view-event__container-list">
                    <Event EventName="Sự kiện 1" EventPlace="Đầm sen pack" EventPrice="500.000" DateStart="25/01/2001" DateEnd="29/01/2001"/>
                    <Event EventName="Sự kiện 1" EventPlace="Đầm sen pack" EventPrice="500.000" DateStart="25/01/2001" DateEnd="29/01/2001"/>
                    <Event EventName="Sự kiện 1" EventPlace="Đầm sen pack" EventPrice="500.000" DateStart="25/01/2001" DateEnd="29/01/2001"/>
                    <Event EventName="Sự kiện 1" EventPlace="Đầm sen pack" EventPrice="500.000" DateStart="25/01/2001" DateEnd="29/01/2001"/>
                </div>
                <button className="view-event__container-btn1 view-event__container-btn">
                    <Triangle className="view-event__container-btn-icon"/>
                </button>
                <button className="view-event__container-btn2 view-event__container-btn">
                    <Triangle className="view-event__container-btn-icon"/>
                </button>
            </div>
        </div>
    )
}
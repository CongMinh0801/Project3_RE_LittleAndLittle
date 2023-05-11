import "./view_event.css"
import "../view_contact/view_contact.css"
import leftFlagImg from "../../assets/img/Left_flag.png"
import rightFlagImg from "../../assets/img/Right_flag.png"
import supBackgroundImg1 from "../../assets/img/23fb7b6e3d0ce252bb1d.jpg" 
import supBackgroundImg2 from "../../assets/img/5fd91d494e2b9175c83a.jpg"

export const ViewEvent = () => {
    return (
        <div className="view-event" style={{width:"1920px", height:"1080px"}}>
            <div className="view-event__container">
                <h1 className="view-event__container-title">Sự kiện nổi bật</h1>
                <img src={leftFlagImg} alt="" className="view-event__container-sub1"/>
                <img src={rightFlagImg} alt="" className="view-event__container-sub2"/>
                <img src={supBackgroundImg1} alt="" className="view-event__container-sub3"/>
                <img src={supBackgroundImg2} alt="" className="view-event__container-sub4"/>
            </div>
        </div>
    )
}
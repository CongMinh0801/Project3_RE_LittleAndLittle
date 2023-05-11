import "./view_home.css"
import "../view_contact/view_contact.css"
import logoImg from "../../assets/img/Dam_sen_logo.png"
import gilrImg from "../../assets/img/Lisa_Arnold_Lay_Do_F2.png"
import groupImg from "../../assets/img/group.png"
import ballon1 from "../../assets/img/Hot_air_ balloon1.png" 
import ballon2 from "../../assets/img/Hot_air_ balloon2.png"
import ballon3 from "../../assets/img/Hot_air_ balloon3.png"
import ballon4 from "../../assets/img/Hot_air_ balloon4.png"
import ballon5 from "../../assets/img/Hot_air_ balloon5.png"
import ballon6 from "../../assets/img/Hot_air_ balloon6.png"
import { BookTicket } from "../../layout/book_ticket/book_ticket"

export const ViewHome = () => {
    return (
        <div className="view-home" style={{width:"1920px", height:"1080px"}}>
            <div className="view-home__container">
                <h1 className="view-home__container-title">ĐẦM SEN PACK</h1>
                <img src={logoImg} alt="" className="view-home__container-logo"/>
                <img src={gilrImg} alt="" className="view-home__container-girl"/>
                <img src={groupImg} alt="" className="view-home__container-group" />
                <img src={ballon1} alt="" className="view-home__container-ballon1" />
                <img src={ballon2} alt="" className="view-home__container-ballon2" />
                <img src={ballon3} alt="" className="view-home__container-ballon3" />
                <img src={ballon4} alt="" className="view-home__container-ballon4" />
                <img src={ballon5} alt="" className="view-home__container-ballon5" />
                <img src={ballon6} alt="" className="view-home__container-ballon6" />
                <BookTicket/>
            </div>
        </div>
    )
}
import { useDispatch, useSelector } from "react-redux";
import logo_little from "../../assets/img/Logo.png"
import "./navbar.css"
import {Phone} from "react-feather"
import { selectView } from "../../view/view_active/view_active_slice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const handleChangeView = (view:string) => {
        dispatch(selectView(view));
        document.querySelector(".navbar-active")?.classList.remove("navbar-active");
        document.querySelector("."+view.toLowerCase())?.classList.add("navbar-active")
        document.querySelector(".view-pay")?.setAttribute("style","display:none;");
        document.querySelector(".view-pay-success")?.setAttribute("style","display:none;");
    }
    return (
        <div className="navbar">
            <span className="navbar-back"></span>
            <div className="navbar__logo">
                <img src={logo_little} alt="" />
            </div>
            <div className="navbar__btn">
                <div>
                    <button onClick={() => handleChangeView("Home")} className="navbar__btn-item home navbar-active">Trang chủ</button>
                    <button onClick={() => handleChangeView("Events")} className="navbar__btn-item events">Sự kiện</button>
                    <button onClick={() => handleChangeView("Contact")} className="navbar__btn-item contact">Liên hệ</button>
                </div>
            </div>
            <div className="navbar__phone-number">
                <span>
                    <Phone className="navbar__phone-number-icon"/>
                </span>
                0375394573
            </div>


        </div>
    )
}
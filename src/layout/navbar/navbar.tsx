import logo_little from "../../assets/img/Logo.png"
import "./navbar.css"
import {Phone} from "react-feather"

export const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-back"></span>
            <div className="navbar__logo">
                <img src={logo_little} alt="" />
            </div>
            <div className="navbar__btn">
                <div>
                    <button className="navbar__btn-item navbar-active">Trang chủ</button>
                    <button className="navbar__btn-item">Sự kiện</button>
                    <button className="navbar__btn-item">Liên hệ</button>
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
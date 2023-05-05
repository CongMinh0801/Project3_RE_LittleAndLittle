import locationImg from "../../assets/img/Location.png"
import emailImg from "../../assets/img/Email.png"
import phoneImg from "../../assets/img/Phone.png"
import "./tag_info.css"

interface TagInfoProps {
    content:string;
    title:string;
}

export const TagInfo = ({content,title}:TagInfoProps) => {
    return (
        <div className="tag-info">
            <div className="tag-info__container">
                <div className="tag-info_container-img">
                    <img src={ title=="Địa chỉ"?locationImg:
                                title == "Email"?emailImg:phoneImg } alt=""  />
                </div>
                <div className="tag-info__container-text">
                    <span>{title + ":"}</span>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
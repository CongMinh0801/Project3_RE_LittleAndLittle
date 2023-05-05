import "./pay_fail.css"
import sadEmoji from "../../assets/img/sad_emoji.png"

export const PayFail = () => {
    return (
        <div className="pay-fail">
            <div className="pay-fail__header">

            </div>
            <div className="pay-fail__message">
                <p>
                    Hình như đã có lỗi xảy ra khi thanh toán...<br/> Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.
                </p>
            </div>
            <img src={sadEmoji} alt="" />
        </div>
    )
}
import "./view_pay-success.css"
import childImg from "../../assets/img/Alvin_Arnold_Votay.png"
import { PayTicketItem } from "../../layout/pay_ticket_item/pay_ticket_item"
import { Triangle } from "react-feather"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { db } from "../../firebase-config";
import { CollectionReference, DocumentData, collection, getDocs } from "@firebase/firestore";


export const ViewPaySuccess = () => {
    const ticketCollectionRef: CollectionReference<DocumentData> = collection(db, "ticket");
    const [list, setList] = useState<any[]>([]);
    const Count = useSelector((state: RootState) => parseInt(state.bookTicket.infoArray[1]));
    const UseDay = useSelector((state: RootState) => state.bookTicket.infoArray[2]);

    useEffect(() => {
        const getListTicket = async () => {
            const data = await getDocs(ticketCollectionRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getListTicket();
    }, []);


    interface EventInterface {
        TicketID: string;
        Type: string;
        UseDay: string;
    }

    const renderTicket = (data:EventInterface) => {
        if (data.UseDay === UseDay) {
            return <PayTicketItem TicketId={data.TicketID} TicketType={data.Type} UseDay={data.UseDay}/>
        }
    }
    
    const [startNumber, setStartNumber] = useState(0)
    
    const handlePrev = () => {
        if (startNumber > 0) {
            setStartNumber(startNumber -4);
        }
    }
    const handleNext = () => {
        if (startNumber < list.length-4) {
            setStartNumber(startNumber +4);
        }
    }

    let subArray = list.slice(startNumber, startNumber+4);
    let pageNumber = 1;
    useEffect(() => {
        pageNumber = startNumber/4 + 1
        subArray = list.slice(startNumber, startNumber+4);
    },[startNumber])
    return (
        <div className="view-pay-success" style={{width:"1920px", height:"1080px"}}>
            <div className="view-pay-success__container">
                <h1 className="view-pay-success__container-title">Thanh toán thành công</h1>
                <img src={childImg} alt="" className="view-pay-success__container-img"/>
                <div className="view-pay-success__container-block">
                    <div className="view-pay-success__container-block-content">
                    {
                    (subArray).map((data) => 
                    {
                        return renderTicket(data)
                    })
                }
                    </div>
                    <button onClick={()=>handlePrev()} className="view-pay-success__container-btn1 view-pay-success__container-btn-triangle">
                        <Triangle className="view-pay-success__container-btn-icon"/>
                    </button>
                    <button onClick={()=>handleNext()} className="view-pay-success__container-btn2 view-pay-success__container-btn-triangle">
                        <Triangle className="view-pay-success__container-btn-icon"/>
                    </button>
                    <p className="view-pay-success__container-count">Số lượng: {Count} vé</p>
                    <p className="view-pay-success__container-pay-number">Trang {pageNumber}/{Count%4==0 ? Count/4 : Math.ceil(Count/4)}</p>
                </div>
                <span>
                    <button className="view-pay-success__container-btn primary-btn btn">Tải về</button>
                    <button className="view-pay-success__container-btn primary-btn btn">Gửi Email</button>
                </span>
            </div>
        </div>
    )
}
import "./view_event.css"
import "../view_contact/view_contact.css"
import leftFlagImg from "../../assets/img/Left_flag.png"
import rightFlagImg from "../../assets/img/Right_flag.png"
import supBackgroundImg1 from "../../assets/img/Group-color.png" 
import supBackgroundImg2 from "../../assets/img/5fd91d494e2b9175c83a.jpg"
import { Event } from "../../layout/event/event"
import { Navbar } from "../../layout/navbar/navbar"
import { Triangle } from "react-feather"
import { EventInfo } from "../../layout/event_info/event_info"
import { db } from "../../firebase-config"
import { CollectionReference, DocumentData, collection, getDocs } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"

export const ViewEvent = () => {
    const eventCollectionRef: CollectionReference<DocumentData> = collection(db, "event");
    const [list, setList] = useState<any[]>([]);
    
    const name = useSelector((state: RootState) => state.eventInfo.name);

    useEffect(() => {
        const getListTicket = async () => {
            const data = await getDocs(eventCollectionRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getListTicket();
    }, []);


    interface EventInterface {
        Name: string;
        Place: string;
        StartDay: string;
        EndDay: string;
        Price: string;
    }

    const renderEvent = (data:EventInterface) => {
        return <Event EventName={data.Name} EventPlace={data.Place} EventPrice={data.Price} DateStart={data.StartDay} DateEnd={data.EndDay}/>
    }
    
    const [startNumber, setStartNumber] = useState(0)
    
    const handlePrev = () => {
        if (startNumber > 0) {
            setStartNumber(startNumber -1);
        }
    }
    const handleNext = () => {
        if (startNumber < list.length-4) {
            setStartNumber(startNumber +1);
        }
    }

    let subArray = list.slice(startNumber, startNumber+4);
    useEffect(() => {
        subArray = list.slice(startNumber, startNumber+4);
    },[startNumber])

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
                {
                    (subArray).map((data) => 
                    {
                        return renderEvent(data)
                    })
                }
                </div>
                <button onClick={()=>handlePrev()} className="view-event__container-btn1 view-event__container-btn">
                    <Triangle className="view-event__container-btn-icon"/>
                </button>
                <button onClick={()=>handleNext()} className="view-event__container-btn2 view-event__container-btn">
                    <Triangle className="view-event__container-btn-icon"/>
                </button>
            </div>
            <div className="view-event__container view-event__container-hidden">
                <h1 className="view-event__container-title">{name}</h1>
                <img src={leftFlagImg} alt="" className="view-event__container-sub1"/>
                <img src={rightFlagImg} alt="" className="view-event__container-sub2"/>
                <img src={supBackgroundImg1} alt="" className="view-event__container-sub3"/>
                <img src={supBackgroundImg2} alt="" className="view-event__container-sub4"/>
                <EventInfo />
            </div>
        </div>
    )
}
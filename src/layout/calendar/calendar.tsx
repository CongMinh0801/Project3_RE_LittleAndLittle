import { useEffect, useState } from "react";
import "./calendar.css"
import { ChevronLeft, ChevronRight, X } from "react-feather";
import { useDispatch } from "react-redux";
import { setSelectedDay } from "./calendar_slice";

export const CalendarComponent = () => {
    const dispatch = useDispatch();
    const handleClickDate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const selectedDay = document.querySelector(".selected-day");
        if (selectedDay) {
            selectedDay.classList.remove("selected-day");
        }
        const clickedDay = event.target as HTMLElement;
        clickedDay.classList.add("selected-day");
        let dayString: string;
        if (currMonth+1 < 10) {
            if (parseInt(clickedDay.innerText) < 10) {
                dayString = "0"+ clickedDay.innerText + "/" + `0${currMonth+1}/${currYear}`
            }else{
                dayString = clickedDay.innerText + "/" + `0${currMonth+1}/${currYear}`
            }
        }else {
            if (parseInt(clickedDay.innerText) < 10) {
                dayString = "0"+ clickedDay.innerText + "/" + `${currMonth+1}/${currYear}`
            }else{
                dayString = clickedDay.innerText + "/" + `${currMonth+1}/${currYear}`
            }
        }
        dispatch(setSelectedDay(dayString));
    }
    const [date, setDate] = useState(new Date());
    const [currYear, setCurrYear] = useState<number>(date.getFullYear());
    const [currMonth, setCurrMonth] = useState<number>(date.getMonth());
    const months: string[] = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7",
              "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

    const [days, setDays] = useState<JSX.Element[]>([])
    const renderCalendar = ()=> {
        let firstDayofMonth: number = new Date(currYear, currMonth, 1).getDay();
        let lastDateofMonth: number = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDayofMonth: number = new Date(currYear, currMonth, lastDateofMonth).getDay();
        let lastDateofLastMonth: number = new Date(currYear, currMonth, 0).getDate();
        const items: JSX.Element[] = [];

        for (let i = firstDayofMonth; i > 0; i--) {
            items.push(
                <button>
                    <li className="not-this-month">{lastDateofLastMonth - i + 1}</li>
                </button>);
        }
        for (let i = 1; i <= lastDateofMonth; i++) {
            items.push(
                <button onClick={(event)=>handleClickDate(event)}>
                    <li id={`${i}/${currMonth+1}/${currYear}`} className="this-month">{i}</li>
                </button>);
        }
        for (let i = lastDayofMonth ; i < 6; i++) {
            items.push(
                <button>
                    <li className="not-this-month">{i - lastDayofMonth + 1}</li>
                </button>);
        }
        setDays(items)
    };


    useEffect(() => {
        renderCalendar();
    }, [currMonth, currYear]);

    const handleMonth = (props: string): void => {
        let newCurrMonth: number = props === "prev" ? currMonth - 1 : currMonth + 1;
        if (newCurrMonth < 0 || newCurrMonth > 11) {
            let newDate: Date = new Date(currYear, newCurrMonth, new Date().getDate());
            setCurrYear(newDate.getFullYear());
            setCurrMonth(newDate.getMonth());
            setDate(newDate);
        } else {
            setCurrMonth(newCurrMonth);
            setDate(new Date());
        }

        document.querySelector(".selected-day")?.classList.remove("selected-day")
        
        renderCalendar()
    };
    return (
        <div className="wrapper">
            <div className="calender-header">
                <div>
                <button onClick={() => handleMonth("prev")} id="prev" ><ChevronLeft/></button>
                <p className="current-date">{`${months[currMonth]}, ${currYear}`}</p>
                <button onClick={() => handleMonth("next")} id="next" ><ChevronRight/></button>
                </div>
            </div>
            <div className="calendar">
                <ul className="weeks">
                <li>CN</li>
                <li>T2</li>
                <li>T3</li>
                <li>T4</li>
                <li>T5</li>
                <li>T6</li>
                <li>T7</li>
                </ul>
                <ul className="days">{days}</ul>
            </div>
        </div>
    )
}
import "./view_active.css"
import React from "react"
import { ViewHome } from "../view_home/view_home"
import { ViewEvent } from "../view_event/view_event"
import { ViewContact } from "../view_contact/view_contact"
import { Navbar } from "../../layout/navbar/navbar"
import { RootState } from "../../app/store"
import { useSelector } from "react-redux"

export const ViewActive = () => {
    const selectedView = useSelector((state: RootState) => state.view.selected);
    return (
        <div className="view-active">
            <Navbar/>
            {selectedView == "Home" ? <ViewHome/>
            : selectedView == "Events" ? <ViewEvent/>
            : <ViewContact/>}
        </div>
    )
}
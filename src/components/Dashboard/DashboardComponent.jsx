import React, { useEffect } from "react";
import SidebarComponent from "../Sidebar/SidebarComponent";
import Style from "./DashboardComponent.module.css";
export default function DashboardComponent(){
    useEffect(()=>{
        alert("DashBoard")
    },[])
    return(
        <div className={Style.Wrapper}>
            <h1>DashBoard</h1>
        </div>
    )
}
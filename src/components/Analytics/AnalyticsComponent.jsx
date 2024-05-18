import React, { useEffect } from "react";
import Style from "./AnalyticsComponent.module.css";
export default function AnalyticsComponent(){
    useEffect(()=>{
        alert("Analytics")
    },[])
    return(
        <div className={Style.Wrapper}>
            <h1>Analytics</h1>
        </div>
    )
}
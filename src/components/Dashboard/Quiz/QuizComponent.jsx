import React from "react";
import Style from "./QuizComponent.module.css";
import eyes from "../../../assets/eyes.svg";
export default function QuizComponent({item}){

    return(
        <div className={Style.Wrapper}>
            <div className={Style.Heading}>
                <div><h3>Quiz{item}</h3></div>
                <div style={{display:"flex",color:"#FF5D01", flexDirection:"row", justifyContent:"center", alignItems:"center"}}><span>667</span><img src={eyes} alt=""/></div>
            </div>
            <div style={{color:"#60B84B"}}>
            Created on : 04 Sep, 2023
            </div>
        </div>
    )
}
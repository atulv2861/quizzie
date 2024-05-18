import React from "react";
import Style from "./QuizComponent.module.css";
export default function QuizComponent({item}){

    return(
        <div className={Style.Wrapper}>
        <h2>Quiz{item}</h2>
        </div>
    )
}
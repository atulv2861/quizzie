import React, { useEffect } from "react";
import Style from "./CreateQuizComponent.module.css";
export default function CreateQuizComponent(){
    useEffect(()=>{
        alert("CreateQuiz")
    },[])
    return(
        <div className={Style.Wrapper}>
            <h1>CreateQuizComponent</h1>
        </div>
    )
}
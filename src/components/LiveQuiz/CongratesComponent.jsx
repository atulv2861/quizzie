import React, { useEffect, useState } from "react";
import congrates from "../../assets/congrates.svg";
import Style from "./CongratesComponent.module.css";
import { useSelector } from "react-redux";
export default function CongratesComponent(score) {
    const [congratesPopupPosition, setCongratesPopupPosition] = useState();
    const [quizType, setQuizType] = useState("Q&A");
    const { quizById } = useSelector(state => state.quiz);
    console.log(score);
    console.log(quizById?.quiz?.quizType)
    useEffect(() => {
        let left = (window.innerWidth - 600) / 2;
        let top = (window.innerHeight - 550) / 2;
        setCongratesPopupPosition({ left: left, top: top });
    }, [])

    return (
        <div className={Style.Wrapper}
            style={{ left: `${congratesPopupPosition?.left}px`, top: `${congratesPopupPosition?.top}px` }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {quizById?.quiz?.quizType === "Q&A" && <>
                    <div>
                        <h1>Congrates Quiz is Completed!</h1>
                    </div>
                    <div>
                        <img src={congrates} alt="" />
                    </div>
                    <div>Your Score is <span>0{score?.score}/0{quizById?.quiz?.quizQuestions?.length}</span></div>
                </>} 
                {quizById?.quiz?.quizType==='Poll_Type'&&<div style={{display:"flex", alignItems:"center", padding:"100px"}}>
                    <h1>Thank you
                        for participating in the Poll!</h1>
                </div>}
            </div>
        </div>
    )
}
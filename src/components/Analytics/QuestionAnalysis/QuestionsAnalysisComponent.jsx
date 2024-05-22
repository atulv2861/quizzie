import React, { useEffect } from "react";
import Style from "./QuestionsAnalysisComponent.module.css";
import QuestionComponent from "../Questions/QuestionComponent";
import PollQuestionComponent from "../Questions/PollQuestionComponent";
export default function QuestionsAnalysisComponent() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    useEffect(() => {
        
    }, [])
    return (
    <div className={Style.Wrapper}>
        <div className={Style.Heading}>
            <div style={{color:"#5076FF"}}><h1>Quiz2 Question Analysis</h1></div>
            <div style={{color:"#FF5D01"}}><p style={{marginBottom:"-10px"}}>
                Created On : 18 May 2024
            </p>
                <p>Impressions : 667</p>
            </div>
        </div>
        <div>
            {arr.map((item,index)=>(
                <QuestionComponent item={item}/>
            ))}
        </div>
        <div>
            {arr.map((item,index)=>(
                <PollQuestionComponent item={item}/>
            ))}
        </div>
    </div>
    )
}
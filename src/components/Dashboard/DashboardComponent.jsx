import React, { useEffect } from "react";
import SidebarComponent from "../Sidebar/SidebarComponent";
import Style from "./DashboardComponent.module.css";
import QuizComponent from "./Quiz/QuizComponent";
export default function DashboardComponent() {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12];
    useEffect(() => {

    })
    return (
        <div className={Style.Wrapper}>
            <div className={Style.Wrapper1}>
                <div className={Style.Card} style={{color:"#FF5D01"}}>
                    <div className={Style.Details}>
                        <h1>12</h1>
                        <h3>Quiz</h3>
                    </div>
                    <div><h3>Created</h3></div>
                </div>
                <div className={Style.Card} style={{color:"#60B84B"}}>
                    <div className={Style.Details}>
                        <h1>110</h1>
                        <h3>Questions</h3>
                    </div>
                    <div><h3>Created</h3></div>
                </div>
                <div className={Style.Card} style={{color:"#5076FF"}}>
                    <div className={Style.Details}>
                        <h1>989</h1>
                        <h3>Total</h3>
                    </div>
                    <div><h3>Impressions</h3></div>
                </div>                
            </div>
            <div className={Style.Quiz}>
                    <h1>Trending Quizs</h1>
                    <div className={Style.QuizContainer}>
                    {arr.map((item)=><QuizComponent item={item}/>)}
                    </div>                    
            </div>
        </div>
    )
}
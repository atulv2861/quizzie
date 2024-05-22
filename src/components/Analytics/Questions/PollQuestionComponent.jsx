import React from "react";
import Style from "./PollQuestionComponent.module.css";
export default function PollQuestionComponent({ item }) {

    return (
        <>
            <div><h1>Question {item}</h1></div>
            <div className={Style.Wrapper1}>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>12</h1>
                        <p className={Style.Text}>Option1</p>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>110</h1>
                        <p className={Style.Text}>Option2</p>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>989</h1>
                        <p className={Style.Text}>Option3</p>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>989</h1>
                        <p className={Style.Text} >Option4</p>
                    </div>
                </div>
            </div>
            <div>
            <hr style={{width:"88%", marginRight:"300px", marginBottom:"40px", size:"16", color:"black"}}/>
            </div>
        </>
    )
}
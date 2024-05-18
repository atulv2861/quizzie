import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Style from "./AnalyticsComponent.module.css";
export default function AnalyticsComponent() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    useEffect(() => {

    }, [])
    return (
        <div className={Style.Wrapper}>
            <div>
                <h1>Quiz Analysis</h1>
            </div>
            <div className={Style.QuizDetails}>
                <table>
                    <thead>
                        <tr style={{backgroundColor:'blue', borderRadius:"12px", color:"white"}}>
                            <td>Sr No.</td>
                            <td> Quiz Name</td>
                            <td>Created On</td>
                            <td>Impression</td>
                            <td>Delete and Share</td>
                            <td>Question wise Analysis</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item,index) =>(
                                <tr className={item%2==0?Style.tBody:Style.tInvBody}>
                                    <td>{item}</td>
                                    <td> Quiz Name</td>
                                    <td>Created On</td>
                                    <td>Impression</td>
                                    <td>Delete and Share</td>
                                    <td><Link to="/dashboard-panel/question-wise-analysis">Question wise Analysis</Link></td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
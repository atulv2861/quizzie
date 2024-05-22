import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./AnalyticsComponent.module.css";
import QuizPopupComponent from "../QuizPopup/QuizPopupComponent";
import ConfirmDeletePopupComponent from "../ConfirmDeletePopup/ConfirmDeletePopupComponent";
import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg";
import share from "../../assets/share.svg";
import { toast } from "react-toastify";
export default function AnalyticsComponent() {
    const[isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen]=useState(false);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    useEffect(() => {

    }, []);

    const handleDeletePopup=()=>{
        setIsConfirmDeletePopupOpen(true);
    }

    const handleLinkShare=()=>{
        toast.success('Link copied to Clipboard');
    }
    return (<>
    {isConfirmDeletePopupOpen&&<ConfirmDeletePopupComponent 
    setIsConfirmDeletePopupOpen={setIsConfirmDeletePopupOpen}
    />}
        <div className={Style.Wrapper}
        style={{opacity:isConfirmDeletePopupOpen?'0.4':'1'}}>
            <div style={{display:"flex",justifyContent:"center", color:"#5076FF"}}>
                <h1>Quiz Analysis</h1>
            </div>
            <div className={Style.QuizDetails}>
                <table>
                    <thead>
                        <tr style={{backgroundColor:'#5076FF', borderRadius:"12px", color:"white"}}>
                            <th>Sr No.</th>
                            <th> Quiz Name</th>
                            <th>Created On</th>
                            <th>Impression</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item,index) =>(
                                <tr className={item%2===0?Style.tBody:Style.tInvBody}>
                                    <td>{item}</td>
                                    <td> Quiz Name</td>
                                    <td>Created On</td>
                                    <td>Impression</td>
                                    <td>
                                        <img src={edit} alt=""/>
                                        <img src={remove} onClick={handleDeletePopup} alt=""/>
                                        <img src={share} onClick={handleLinkShare} alt=""/>
                                    </td>
                                    <td><Link className={Style.Link} to="/dashboard-panel/question-wise-analysis">Question Wise Analysis</Link></td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
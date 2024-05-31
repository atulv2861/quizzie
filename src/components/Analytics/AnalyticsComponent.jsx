import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./AnalyticsComponent.module.css";
import QuizPopupComponent from "../QuizPopup/QuizPopupComponent";
import ConfirmDeletePopupComponent from "../ConfirmDeletePopup/ConfirmDeletePopupComponent";
import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg";
import share from "../../assets/share.svg";
import { toast } from "react-toastify";
import useQuiz from "../Hook/useQuiz";
import { useSelector } from "react-redux";
import getStorage from "../../Service/StorageService";
export default function AnalyticsComponent() {
    const[isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen]=useState(false);
    const[quizId,setQuizId]=useState(null);
    const { quizByUserId } = useSelector(state => state.quiz);    
    const { handleGetQuizByUserId,handleDeleteQuiz} = useQuiz();   

    useEffect(() => {
        const initial = async () => {
            const user = JSON.parse(getStorage("user"));
            if(user){
                await handleGetQuizByUserId(user?._id);
            }                      
        }
        initial();
    }, []);   
   

    const handleDeletePopup=async(id)=>{
        setQuizId(id);
        setIsConfirmDeletePopupOpen(true);
        // if(isDeleted){
        //     await handleDeleteQuiz(id);
        //     setIsConfirmDeletePopupOpen(true);
        //     toast.success('Quiz deleted successfully!');
        //     const user = JSON.parse(getStorage("user"));
        //     if(user){
        //         await handleGetQuizByUserId(user?._id);
        //     } 
        // }
           
    }

    const formatedDate=(dateStr)=>{
        const date = new Date(dateStr);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options).replace(',', '');
        return formattedDate;
    }
    const handleLinkShare=(id)=>{
        navigator.clipboard.writeText(`${process.env.REACT_APP_FRONTEND_URL}/live-quiz/${id}`);
        //navigator.clipboard.writeText(`http://localhost:3000/live-quiz/${id}`);
        toast.success('Link copied to Clipboard');
    }
    return (<>
    {isConfirmDeletePopupOpen&&<ConfirmDeletePopupComponent 
    setIsConfirmDeletePopupOpen={setIsConfirmDeletePopupOpen}
    quizId={quizId}
    />}
        <div className={Style.Wrapper}
        style={{opacity:isConfirmDeletePopupOpen?'0.4':'1'}}>
            <div style={{display:"flex",justifyContent:"center", color:"#5076FF"}}>
                <h2>Quiz Analysis</h2>
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
                            quizByUserId?.quizzes?.map((item,index) =>(
                                <tr className={(index+1)%2===0?Style.tBody:Style.tInvBody}>
                                    <td>{index+1}</td>
                                    <td> {item.quizName}</td>
                                    <td>{formatedDate(item.createdOn)}</td>
                                    <td>{item.impression}</td>
                                    <td>
                                        <img className={Style.Cursor} src={edit} alt=""/>
                                        <img className={Style.Cursor} src={remove} onClick={e=>handleDeletePopup(item?._id)} alt=""/>
                                        <img className={Style.Cursor} src={share} onClick={e=>handleLinkShare(item?._id)} alt=""/>
                                    </td>
                                    <td><Link className={Style.Link} to={`/dashboard-panel/question-wise-analysis/${item?._id}`}>Question Wise Analysis</Link></td>
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
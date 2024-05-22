import React from "react";
import Style from "./SidebarComponent.module.css";
import { Routes } from "../../routes";

import { Link } from "react-router-dom";
export default function SidebarComponent({setIsQuizPopupOpen}) {
const handleQuizPopup=()=>{
    setIsQuizPopupOpen(true);    
}
    return (
        <div className={Style.Sidebar}>
            <div>
                <h1>Quizzie</h1>
            </div>
            <div className={Style.Container}>
                <div><Link className={Style.Link} to="/dashboard-panel/dashboard">Dashboard</Link></div>
                <div><Link className={Style.Link} to="/dashboard-panel/analytics">Analytics</Link></div>
                {/* <div onClick={handleQuizPopup}><Link to="/dashboard-panel/create-quiz">Create Quiz</Link>Create Quiz</div>                */}
                <div onClick={handleQuizPopup}>Create Quiz</div>               
            </div>
            
            <div>
            <hr style={{width:"80%", marginRight:"50px", marginBottom:"-20px", size:"8", color:"black"}}/>
            <h2>Logout</h2></div>
        </div>
    );
}
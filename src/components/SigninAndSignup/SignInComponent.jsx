import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./SignInComponent.module.css";
import SignUpFormComponent from "./SignUpFormComponent";
import SignInFormComponent from "./SignInFormComponent";
export default function SignInComponent(){
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [isRegistered,setIsRegistered]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        if(isLoggedIn)
            navigate("/dashboard-panel");
    },[isLoggedIn]);


    return(
        <div className={Style.Wrapper}>
            <div className={Style.Heading}>
                <h1>Quizzie</h1>
            </div>
            <div className={Style.Btn}>
            <div><button className={`${Style.Button} ${!isRegistered&& Style.BoxShadow}` } onClick={e=>{setIsRegistered(false)}}>Sign Up</button></div>
                <div><button className={`${Style.Button} ${isRegistered&& Style.BoxShadow}` } onClick={e=>{setIsRegistered(true)}}>Sign In</button></div>            
            </div>
            <div className={Style.Form}>
            {isRegistered?<SignInFormComponent setIsLoggedIn={setIsLoggedIn}/>:<SignUpFormComponent/>}
            </div>       
        </div>
    )
}
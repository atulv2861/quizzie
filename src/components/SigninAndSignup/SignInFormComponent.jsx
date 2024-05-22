import React from "react";
import Style from "./SignInFormComponent.module.css";
export default function SignInFormComponent({setIsLoggedIn}){
    const handleSignIn=()=>{
        setIsLoggedIn(true);
        
    }
    return(
        <div className={Style.FormWrapper}>        
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Email</div>
            <div><input className={Style.InputBox}/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Password</div>
            <div><input className={Style.InputBox} style={{marginRight:"35px"}}/></div>
        </div>        
        <div>
            <button className={Style.Button} onClick={handleSignIn}>Sign In</button>
        </div>
        </div>
    )
}
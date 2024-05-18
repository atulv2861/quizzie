import React from "react";
import Style from "./SignInFormComponent.module.css";
export default function SignInFormComponent({setIsLoggedIn}){
    const handleSignIn=()=>{
        setIsLoggedIn(true);
        
    }
    return(
        <div className={Style.FormWrapper}>        
        <div className={Style.FieldWrapper}>
            <div>Email</div>
            <div><input/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div>Password</div>
            <div><input/></div>
        </div>        
        <div>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
        </div>
    )
}
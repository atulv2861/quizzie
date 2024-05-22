import React,{useState} from "react";
import Style from "./SignInFormComponent.module.css";
export default function SignInFormComponent({setIsLoggedIn}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fieldErrors, setFieldErrors] = useState();
    const handleSignIn=()=>{
        const fieldErrors = {};
        if (!email.trim()) {
            fieldErrors.email = true;
        }
        if (!password.trim()) {
            fieldErrors.password = true;
        }
        if (Object.keys(fieldErrors).length > 0) {
            setFieldErrors(fieldErrors);
            return;
        }
        setIsLoggedIn(true);
        
    }
    return(
        <div className={Style.FormWrapper}>        
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Email</div>
            <div>
                <input 
            className={`${Style.InputBox} ${fieldErrors?.email && Style.ErrorMsg}`}
            value={email}
            type="text"
            placeholder="Email"
            onChange={e=>setEmail(e.target.value)}
            />
            </div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Password</div>
            <div><input 
            className={`${Style.InputBox} ${fieldErrors?.password && Style.ErrorMsg}`} 
            style={{marginRight:"35px"}}
            value={password}
            type="password"
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
            /></div>
        </div>        
        <div>
            <button className={Style.Button} onClick={handleSignIn}>Sign In</button>
        </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import Style from "./SignUpFormComponent.module.css";
import useUser from "../Hook/useUser";
import { useSelector } from "react-redux";
export default function SignUpFormComponent({setIsRegistered}){
    const [name,setName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [fieldErrors, setFieldErrors] = useState();
    const { userData } = useSelector((state) => state.user);
    const {handleRegisterUser}=useUser();
    const handleSignUp= async()=>{
        const fieldErrors = {};
        if (!name.trim()) {
            fieldErrors.name = true;
        }
        if (!email.trim()) {
            fieldErrors.email = true;
        }
        if (!password.trim()) {
            fieldErrors.password = true;
        }
        if (!confirmPassword.trim()) {
            fieldErrors.confirmPassword = true;
        }
        if(password.trim()!==confirmPassword.trim()){
            fieldErrors.confirmPassword = true;
        }

        if (Object.keys(fieldErrors).length > 0) {
            setFieldErrors(fieldErrors);
            return;
        }
        const data={
            name,
            email,
            password
        }
        await handleRegisterUser(data);
    }

    useEffect(() => {
        const initial = () => {
            if (userData?.success) {
                setIsRegistered(true);                
            }
        }
        initial();
    }, [userData]);
    return(
        <div className={Style.FormWrapper}>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Name</div>
            <div><input 
            className={`${Style.InputBox} ${fieldErrors?.name && Style.ErrorMsg}`} 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={e=>setName(e.target.value)}
            /></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Email</div>
            <div><input 
            className={`${Style.InputBox} ${fieldErrors?.email && Style.ErrorMsg}`} 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            /></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Password</div>
            <div><input 
            className={`${Style.InputBox} ${fieldErrors?.password && Style.ErrorMsg}`} 
            style={{marginRight:"30px"}} 
            type="password" 
            value={password}
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
            /></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Confirm Password</div>
            <div><input 
            className={`${Style.InputBox} ${fieldErrors?.confirmPassword && Style.ErrorMsg}`} 
            style={{marginRight:"100px"}} 
            type="password" 
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={e=>setConfirmPassword(e.target.value)}
            /></div>
        </div>
        <div>
            <button className={Style.Button} onClick={handleSignUp}>Sign Up</button>
        </div>
        </div>
    )
}
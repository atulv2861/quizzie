import React,{useEffect} from "react";
import Style from "./SidebarComponent.module.css";
import useUser from "../Hook/useUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeStorage } from "../../Service/StorageService";
export default function SidebarComponent({ setIsQuizPopupOpen }) {
    const { handleLogoutUser } = useUser();
    const { userData } = useSelector((state) => state.user);
    const navigate=useNavigate();
    const handleQuizPopup = () => {
        setIsQuizPopupOpen(true);
    }

    const handleLogout=async()=>{
        await handleLogoutUser();
        
    }

    useEffect(() => {
        const initial = () => {
            if (userData?.isLogout) {                 
                removeStorage("accessToken");
                removeStorage("user");
                navigate("/");
            }
        }       
            initial();
    }, [userData]);
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
                <hr style={{ width: "80%", marginRight: "50px", marginBottom: "-20px", size: "8", color: "black" }} />
                <h2 onClick={e=>handleLogout()}>Logout</h2></div>
        </div>
    );
}
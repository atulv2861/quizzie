import { useDispatch } from "react-redux";
import {userRegistrationLoading,
    userRegistrationSuccess,
    userRegistrationError,
    userLoginSuccess,
    userLoginLoading,
    userLoginError,
    userLogoutLoading,
    userLogoutSuccess,
    userLogoutError} from "../../Store/Slice/UserSlice";
    import handleGetAllStories from "../Hooks/useStories"
    import {registerUser} from "../../service/user/registerUser";
    import { loginUser } from "../../service/user/loginUser";
    import { logoutUser } from "../../service/user/logoutUser";

    const useUser = () => {
        const dispatch = useDispatch();
        
        const handleRegisterUser = async (data) => {
            try {
                dispatch(userRegistrationLoading());                
                const res = await registerUser(data);                           
                dispatch(userRegistrationSuccess(res.data));  
                handleGetAllStories();                             
            } catch (error) {              
                dispatch(userRegistrationError(error));                
            }
        };
    
        const handleLoginUser = async (data) => {
            try {
              dispatch(userLoginLoading());
              const res = await loginUser(data);              
              dispatch(userLoginSuccess(res.data));               
              handleGetAllStories();                     
            } catch (error) {            
              dispatch(userLoginError(error));
            }
          };

          const handleLogoutUser = async (userId) => {
            try {
              dispatch(userLogoutLoading());
              const res = await logoutUser(userId);
              dispatch(userLogoutSuccess(res.data));                     
            } catch (error) {
              dispatch(userLogoutError(error));
            }
          };
        return{
            handleRegisterUser,
            handleLoginUser,
            handleLogoutUser
        };
    }
    export default useUser;
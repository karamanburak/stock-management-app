import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";


const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const register = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post("https://18109.fullstack.clarusway.com/users/", userInfo)
            console.log(data);
            dispatch(registerSuccess(data))
            toastSuccessNotify("Register performed");
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Register can not be performed");
            console.log(error);
            
        }
    }

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post("https://18109.fullstack.clarusway.com/auth/login/",userInfo)
            console.log(data);
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login performed");
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Login cannot be performed!")
            console.log(error);
            
        }
    }


    return {register,login}
};
export default useAuthCall;

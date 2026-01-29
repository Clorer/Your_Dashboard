import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const isLogin = useSelector(state => state.users.isLogin);
    const navigate = useNavigate()
    useEffect(() => {
        isLogin? null : navigate("/login")
    }, [isLogin])
return(
<>
<h1>work in progress</h1>
</>
)}
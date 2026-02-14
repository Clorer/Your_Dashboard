import { useSelector } from "react-redux"

export default function Welcome(){
    const username = useSelector(state => state.users.currentUser.name)
return(
<>
    <h1 className="text-4xl mt-4">Welcome back, {username} </h1>
</>
)}
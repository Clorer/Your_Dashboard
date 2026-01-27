import bgImage from "../../assets/bgImageLogin.png"
import LoginForm from "./LoginForm"

export default function Login(){
return(
<>
  <h1 className="font-semibold text-xl mb-4">Your dashboard</h1>
  <div className="flex justify-center">
    <LoginForm />
    <img src={bgImage} alt="BackgroundLogo" className="h-[80vh]" />
  </div>
</>
)}
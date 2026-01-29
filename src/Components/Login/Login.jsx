import bgImage from "../../assets/bgImageLogin.png"
import Logo from "../Logo"
import LoginForm from "./LoginForm"

export default function Login(){
return(
<>
  <Logo />
  <div className="flex justify-center">
    <LoginForm />
    <img src={bgImage} alt="BackgroundLogo" className="h-[80vh]" />
  </div>
</>
)}
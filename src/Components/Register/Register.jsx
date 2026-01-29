import bgImage from "../../assets/bgImageLogin.png"
import Logo from "../Logo"
import RegisterForm from "./RegisterForm"

export default function Register(){
return(
<>
  <Logo />
  <div className="flex justify-center">
    <RegisterForm />
    <img src={bgImage} alt="BackgroundLogo" className="h-[80vh]" />
  </div>
</>
)}
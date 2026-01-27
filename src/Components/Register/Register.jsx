import bgImage from "../../assets/bgImageLogin.png"
import RegisterForm from "./RegisterForm"

export default function Register(){
return(
<>
  <h1 className="font-semibold text-xl mb-4">Your dashboard</h1>
  <div className="flex justify-center">
    <RegisterForm />
    <img src={bgImage} alt="BackgroundLogo" className="h-[80vh]" />
  </div>
</>
)}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Dashboard from "./Components/Dashboard/Dashboard"

export default function App(){
return(
<>
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</>
)}
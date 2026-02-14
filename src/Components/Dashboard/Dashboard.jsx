import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome";
import ProfileModalWindow from "./ProfileModalWindow/ProfileModalWindow";
import Tiles from "./Tabs/Tiles/Tiles";
import Goals from "./Tabs/Goals/Goals";
import AddTaskModal from "./Tabs/Goals/AddTaskModal";
import Calendar from "./Tabs/Calendar/Calendar";
import AddMeetingModal from "./Tabs/Calendar/addMeetingModal";

export default function Dashboard() {
  const navigate = useNavigate();
  const modalState = useSelector((state) => state.modal);
  const taskModalState = useSelector((state) => state.taskModal.modalState)
  const meetingModalState = useSelector((state) => state.meetingModal.modalState)
  const currentUser = useSelector((state) => state.users.currentUser);
  const activeTab = useSelector((state) => state.slidebar.activeTab);

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, [currentUser, navigate]);

  const Tabs = {
    Dashboard: <Tiles />,
    Salary: <div>Salary</div>,
    Calendar: <Calendar />,
    Tasks: <Goals />,
  };

  return currentUser ? (
    <div className="pb-4">
      <header className="flex justify-between">
        <Logo />
        <NavBar />
      </header>
      {(modalState && <ProfileModalWindow />) || (taskModalState && <AddTaskModal />) || (meetingModalState && <AddMeetingModal />)} 
      {Tabs[activeTab] || null}
    </div>
  ) : null;
}

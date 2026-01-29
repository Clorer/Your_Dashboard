import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/Users/users.slice";
import SettingsLogo from "../../assets/icons/settings-gear.svg";
import NotificationLogo from "../../assets/icons/notification.svg";
import ProfileLogo from "../../assets/icons/user-profile.svg";
import Logo from "../Logo";

export default function Dashboard() {
  const isLogin = useSelector((state) => state.users.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  //   useEffect(() => {
  //     if (!currentUser) {
  //       navigate("/login");
  //       console.log(currentUser);
  //     }
  //   }, [currentUser]);

  function handleClick() {
    dispatch(logout());
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <Logo />
        {/* <button className="border rounded-xl shadow-2xl px-2" onClick={handleClick}>
          Log out
        </button> */}
        <div className="flex gap-1">
          <div className="flex bg-[#fafafaac] rounded-4xl py-1 px-1 h-fit">
            <p className="text-white bg-black rounded-4xl py-4 px-4 h-fit">
              Dashboard
            </p>
            <p className="text-black rounded-4xl py-4 px-4 h-fit">People</p>
          </div>
          <button className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-4 py-4 gap-2">
            <img src={SettingsLogo} alt="Settings logo" className="w-8" />
            Settings
          </button>
          <button className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-5 py-5 gap-2">
            <img src={NotificationLogo} alt="Notification logo" className="w-6" />
            
          </button>
          <button className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-5 py-5 gap-2">
            <img src={ProfileLogo} alt="Profile logo" className="w-6" />
            
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/Users/users.slice";
import Logo from "../Logo";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome";
import ProfileTile from "./Tiles/ProfileTile";
import TimerTile from "./Tiles/TimerTile";
import GoalsTile from "./Tiles/GoalsTile";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  //   useEffect(() => {
  //     if (!currentUser) {
  //       navigate("/login");
  //       console.log(currentUser);
  //     }
  //   }, [currentUser]);

  //   function handleClick() {
  //     dispatch(logout());
  //   }

  return (
    <>
      <header className="flex justify-between">
        <Logo />
        {/* <button className="border rounded-xl shadow-2xl px-2" onClick={handleClick}>
          Log out
        </button> */}
        <NavBar />
      </header>
      <Welcome />
      <section className="grid grid-cols-4 grid-rows-2 gap-2 mt-8">
        <ProfileTile />
        <GoalsTile />
        <TimerTile />
        <div className="row-span-2">
            <GoalsTile />
        </div>
        <GoalsTile />
        <div className="col-span-2">
            <GoalsTile />
        </div>
      </section>
    </>
  );
}

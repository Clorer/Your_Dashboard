import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome";
import ProfileTile from "./Tiles/ProfileTile";
import TimerTile from "./Tiles/TimerTile";
import GoalsTile from "./Tiles/GoalsTile";
import WeatherTile from "./Tiles/WeatherTile";
import ProfileModalWindow from "./ProfileModalWindow/ProfileModalWindow";

export default function Dashboard() {
  const navigate = useNavigate();
  const modalState = useSelector(state => state.modal)
  const currentUser = useSelector((state) => state.users.currentUser)

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);

  useEffect

  return currentUser ? (
    <>
      <header className="flex justify-between">
        <Logo />
        <NavBar />
      </header>
      <Welcome />
      {modalState ? <ProfileModalWindow /> : null}
      <section className="grid grid-cols-4 grid-rows-2 gap-2 mt-8">
        <ProfileTile />
        <GoalsTile />
        <TimerTile />
        <div className="row-span-2">
          <GoalsTile />
        </div>
        <WeatherTile />
        <div className="col-span-2">
          <GoalsTile />
        </div>
      </section>
    </>
  ) : null;
}

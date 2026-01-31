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
import WeatherTile from "./Tiles/WeatherTile";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);

  return currentUser ? (
    <>
      <header className="flex justify-between">
        <Logo />
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
        <WeatherTile />
        <div className="col-span-2">
          <GoalsTile />
        </div>
      </section>
    </>
  ) : null;
}

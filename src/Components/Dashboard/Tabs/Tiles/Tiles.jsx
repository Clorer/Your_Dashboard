import ProfileTile from "./ProfileTile";
import TimerTile from "./TimerTile";
import GoalsTile from "./GoalsTile";
import WeatherTile from "./WeatherTile";
import CalendarTile from "./CalendarTile";
import Welcome from "../../Welcome";

export default function Tiles() {
  return (
      <div>
        <Welcome />
            <section id="dashboard" className="grid grid-cols-4 grid-rows-2 gap-2 mt-8">
        <ProfileTile />
        <CalendarTile />
        <TimerTile />
        <div className="row-span-2">
          <GoalsTile />
        </div>
        <WeatherTile />
        <div className="col-span-2">
          <CalendarTile />
        </div>
            </section>
      </div>
  );
}

import ProfileButton from "./ProfileButton";
import SlideBar from "./SlideBar";
import SettingsButton from "./SettingsButton";
import NotificationButton from "./NotificationButton";

export default function NavBar() {
  return (
    <div className="flex gap-1">
      <SlideBar />
      <SettingsButton />
      <NotificationButton />
      <ProfileButton />
    </div>
  );
}

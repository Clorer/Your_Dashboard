import NotificationLogo from "../../../assets/icons/notification.svg";

export default function NotificationButton() {
  return (
    <button className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-5 py-5 gap-2">
      <img src={NotificationLogo} alt="Notification logo" className="w-6" />
    </button>
  );
}

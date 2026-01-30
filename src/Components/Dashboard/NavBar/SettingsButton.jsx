import SettingsLogo from "../../../assets/icons/settings-gear.svg";

export default function SettingsButton() {
  return (
    <button className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-4 py-4 gap-2">
      <img src={SettingsLogo} alt="Settings logo" className="w-8" />
      Settings
    </button>
  );
}

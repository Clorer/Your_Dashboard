import ProfileLogo from "../../../assets/icons/user-profile.svg";

export default function ProfileButton() {
  return (
    <button className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-5 py-5 gap-2">
      <img src={ProfileLogo} alt="Profile logo" className="w-6" />
    </button>
  );
}

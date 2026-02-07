import { useDispatch } from "react-redux";
import ProfileLogo from "../../../assets/icons/user-profile.svg";
import { useSelector } from "react-redux";
import { changeModalState } from "../../../store/Modal Window/modalWindow.slice";
import { useEffect } from "react";

export default function ProfileButton() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);

  useEffect(() => {
    console.log(modalState);
  }, [modalState]);

  return (
    <button
      onClick={() => {
        dispatch(changeModalState());
      }}
      className="flex justify-center items-center bg-[#fafafaac] rounded-4xl h-fit px-5 py-5 gap-2"
    >
      <img src={ProfileLogo} alt="Profile logo" className="w-6" />
    </button>
  );
}

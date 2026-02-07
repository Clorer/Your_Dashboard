import { useSelector } from "react-redux";
import UserPhoto from "../../../assets/empty-avatar.png";
import CloseIcon from "../../../assets/icons/close.svg";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../../store/Modal Window/modalWindow.slice";
import { useState } from "react";
import { changeAvatar } from "../../../store/Users/users.slice";

export default function ModalHeader() {
  const currentUser = useSelector((state) => state.users.currentUser);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
      dispatch(changeAvatar(reader.result));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-between border-b-2 pb-4 border-gray-500">
      <div className="flex gap-2 items-center">
        <div className="relative w-24 h-24">
          {/* Скрытый input */}
          <input
            type="file"
            accept="image/*"
            id="avatarInput"
            onChange={handleChangeAvatar}
            className="hidden"
          />
          <label
            htmlFor="avatarInput"
            className="block w-24 h-24 rounded-full bg-cover bg-center cursor-pointer border-2 border-gray-300"
            style={{ backgroundImage: `url(${currentUser.photo || avatar || UserPhoto})` }}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">{currentUser.name}</p>
          <p className="text-gray-500">{currentUser.email}</p>
        </div>
      </div>
      <button className="h-fit" onClick={() => dispatch(changeModalState())}>
        <img src={CloseIcon} alt="Close" className="w-4" />
      </button>
    </div>
  );
}

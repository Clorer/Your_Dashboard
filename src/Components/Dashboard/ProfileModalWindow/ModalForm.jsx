import Input from "../../Login/Input";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserData, logout } from "../../../store/Users/users.slice";
import {
  changeModalState,
  closeModal,
} from "../../../store/Modal Window/modalWindow.slice";

export default function ModalForm() {
  const currentUser = useSelector((state) => state.users.currentUser);
  const [fullNameState, setFullNameState] = useState(
    currentUser.fullname ? currentUser.fullname : "",
  );
  const [mailState, setMailState] = useState(currentUser?.email);
  const [cityState, setCityState] = useState(
    currentUser.city ? currentUser.city : "",
  );
  const isEmailError = useSelector((state) => state.users.errors.isEmailError);

  const dispatch = useDispatch();

  const fields = [
    {
      name: "Email",
      placeholder: mailState,
      type: "email",
      state: mailState,
      setState: setMailState,
      error: isEmailError,
    },
    {
      name: "Full name",
      placeholder: currentUser?.fullname || "Enter your full name",
      type: "text",
      state: fullNameState,
      setState: setFullNameState,
      error: null,
    },
    {
      name: "City",
      placeholder: currentUser?.fullname || "Moscow",
      type: "text",
      state: cityState,
      setState: setCityState,
      error: null,
    },
  ];

  const changeData = (obj) => {
    dispatch(changeUserData(obj));
    dispatch(changeModalState());
  };

  const logOut = () => {
    dispatch(logout());
    dispatch(closeModal());
  };

  return (
    <div className="flex flex-col gap-2">
      {fields.map((inputData) => (
        <Input key={inputData.name} FIELD_DATA={inputData} />
      ))}
      <div
        onClick={() => {
          changeData({
            fullname: fullNameState,
            email: mailState,
            city: cityState,
          });
        }}
        className="flex justify-between mt-4"
      >
        <button className="rounded-2xl text-white bg-black py-4 px-4">
          Confirm
        </button>
        <button
          onClick={() => {
            logOut();
          }}
          className="rounded-2xl text-white bg-red-700 py-4 px-4"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

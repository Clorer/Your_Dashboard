import { useState } from "react";
import Input from "../Login/Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/Users/users.slice";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [nameState, setNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [mailState, setMailState] = useState("");
  const isLoginError = useSelector((state) => state.users.isLoginError);
  const isEmailError = useSelector((state) => state.users.isEmailError);
  const isPasswordError = useSelector((state) => state.users.isPasswordError);
  const dispatch = useDispatch();

  const fields = [
    {
      name: "Email",
      placeholder: "Enter your email",
      type: "email",
      state: mailState,
      setState: setMailState,
      error: isEmailError,
    },
    {
      name: "User name",
      placeholder: "Enter your user name",
      type: "text",
      state: nameState,
      setState: setNameState,
      error: isLoginError,
    },
    {
      name: "Password",
      placeholder: "Enter your password",
      type: "password",
      state: passwordState,
      setState: setPasswordState,
      error: isPasswordError,
    },
  ];

  const handleSubmit = () => {
    nameState && passwordState && mailState
      ? dispatch(
          addUser({
            name: nameState,
            password: passwordState,
            email: mailState,
          }),
        )
      : null;
  };
  
  return (
    <form
      autoComplete="off"
      className="border border-gray-400 rounded-xl w-[33vw] shadow-2xl py-8 px-6"
    >
      <h1 className="text-2xl">Welcome!</h1>
      <h1 className="text-4xl mt-6">Sign in</h1>
      <h1 className="">to Your Dashboard</h1>
      <div className="mt-6">
        {fields.map((inputData) => (
          <Input key={inputData.name} FIELD_DATA={inputData} />
        ))}
      </div>
      {isEmailError ? (
        <p className="text-red-600">Invalid email format</p>
      ) : null}
      {isLoginError ? (
        <p className="text-red-600">This username is already taken</p>
      ) : null}
      {isPasswordError ? (
        <p className="text-red-600">Password must be 8 or more characters</p>
      ) : null}
      <button
        type="button"
        className="border h-[4rem] rounded-md w-full p-auto bg-black text-white mt-8 hover:bg-gray-800 active:bg-gray-700 "
        onClick={handleSubmit}
      >
        Create
      </button>
      <div className="flex gap-3 w-full justify-center mt-4">
        <p className="text-gray-400">Already have an Account?</p>{" "}
        <Link to="/login" className="font-bold hover:text-gray-500">
          Log in
        </Link>
      </div>
    </form>
  );
}

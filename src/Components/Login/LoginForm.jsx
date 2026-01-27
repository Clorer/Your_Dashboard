import Input from "./Input";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verificate } from "../../store/Users/users.slice";

export default function LoginForm() {
  const [nameState, setNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const isLoginError = useSelector((state) => state.users.isLoginError);
  const isPasswordError = useSelector((state) => state.users.isPasswordError);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.users.isLogin);
  const navigate = useNavigate();

  const fields = [
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

  useEffect(() => {
    if (isLogin) navigate("/dashboard")
  }, [isLogin])
  return (
    <form autoComplete="off" className="border border-gray-400 rounded-xl w-[33vw] shadow-2xl py-8 px-6">
      <h1 className="text-2xl">Welcome!</h1>
      <h1 className="text-4xl mt-6">Log in</h1>
      <h1 className="">to Your Dashboard</h1>
      <div className="mt-6">
        {fields.map((inputData) => (
          <Input key={inputData.name} FIELD_DATA={inputData} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1">
          <input type="checkbox" name="rememberMe" />
          <p>Remember me</p>
        </div>
        <p className="text-gray-400 hover:text-gray-300 active:text-gray-200">
          Forgot your password?
        </p>
      </div>
      <button
        type="button"
        className="border h-[4rem] rounded-md w-full p-auto bg-black text-white mt-8 hover:bg-gray-800 active:bg-gray-700 "
        onClick={() => {
          nameState != "" && passwordState != ""
            ? dispatch(verificate({ name: nameState, password: passwordState }))
            : null;
        }}
      >
        Log In
      </button>
      <div className="flex gap-3 w-full justify-center mt-4">
        <p className="text-gray-400">Don’y have an Account?</p>{" "}
        <Link to="/register" className="font-bold hover:text-gray-500">
          Create
        </Link>
      </div>
    </form>
  );
}

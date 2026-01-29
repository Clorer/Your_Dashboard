import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/Users/users.slice";

export default function Dashboard() {
  const isLogin = useSelector((state) => state.users.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser)

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      console.log(currentUser);
    }
  }, [currentUser]);

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className="pt-4 pl-8">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-4">Your dashboard</h1>
        <button className="border rounded-2xl shadow-2xl" onClick={handleClick}>
          Log out
        </button>
      </div>
    </div>
  );
}

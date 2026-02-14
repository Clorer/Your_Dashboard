import { useSelector } from "react-redux";
import UserPhoto from "../../../../assets/empty-avatar.png";
export default function ProfileTile() {
  const user = useSelector((state) => state.users.currentUser);
  return (
    <div
      className="min-h-80 flex flex-col-reverse overflow-hidden text-white w-full h-full rounded-4xl bg-cover bg-center"
      style={{ backgroundImage: `url(${user.photo || UserPhoto})` }}
    >
      <div className="bg-gradient-to-t from-black/70 to-transparent backdrop-blur-md w-full grid grid-cols-3 grid-rows-2 h-[30%] pb-4">
        <div className="col-span-2 flex items-center text-2xl pl-4">
          {user.fullname || user.name}
        </div>
        <div className="flex justify-center items-center row-span-2 ">
          SALARY
        </div>
        <div className="col-span-2 flex  items-center pl-4">
          Frontend Developer
        </div>
      </div>
    </div>
  );
}

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addWorkDays } from "../../../../store/Users/users.slice";

export default function CalendarTile({
  el,
  nowDate,
  daysOfTheWeek,
  isEdit,
  tasksInThisDay,
  meetInThisDay,
}) {
  const workDays = useSelector(
    (state) => state.users.currentUser?.workDays || [],
  );
  const dispatch = useDispatch();

  const typeOfTask = {
    Urgently: "bg-red-200",
    Planned: "bg-green-300",
    "In progress": "bg-blue-200",
    Completed: "bg-gray-400",
    Meeting: "bg-purple-500",
  };

  const isWorkDay = workDays.includes(el.day);

  const bgColor =
    el.type === "current"
      ? isWorkDay
        ? "bg-blue-400/60"
        : "bg-white/60"
      : "bg-gray-400/60";

  return (
    <div
      onClick={() => {
        if (isEdit && el.type === "current") {
          dispatch(addWorkDays(el.day));
        }
      }}
      className={`w-32 h-32 ${bgColor} ${isEdit && el.type === "current" ? "hover:bg-blue-200/60 cursor-pointer" : ""} rounded-4xl p-4`}
    >
      <div className="flex justify-between">
        <div
          className={`${el.day === nowDate.getDate() ? "bg-red-600/90 text-white" : ""} rounded-full w-fit px-2 py-1 h-fit`}
        >
          {el.day}
        </div>
        <div
          className={`${el.dotw === 5 || el.dotw === 6 ? "text-red-700" : ""} h-fit pt-1`}
        >
          {daysOfTheWeek[el?.dotw]}
        </div>
      </div>
      {el.type === "current" && (
        <>
          {tasksInThisDay.map((task, index) => (
            <div key={index} className="flex gap-1">
              <div
                className={`mt-1 rounded-full w-2 h-2 ${typeOfTask[task.type]}`}
              ></div>
              <p className="text-xs">{task.title}</p>
            </div>
          ))}
          {meetInThisDay.map((meet, index) => {
            return (
              <div key={index} className="flex gap-1">
                <div
                  className={`mt-1 rounded-full w-2 h-2 ${typeOfTask[meet.type]}`}
                ></div>
                <p className="text-xs">{meet.title}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

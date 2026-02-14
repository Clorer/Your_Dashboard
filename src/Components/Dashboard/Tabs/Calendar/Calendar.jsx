import { useState } from "react";
import CalendarTile from "./CalendarTile";
import Meetings from "./Meetings";
import { useSelector } from "react-redux";

export default function Calendar() {
  const [isEditSchedule, setIsEditSchedule] = useState(false);

  const tasks = useSelector((state) => state.users.currentUser.tasks);
  const nowDate = new Date();
  const currentMonth = nowDate.getMonth();
  const currentYear = nowDate.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  let lastDayPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  let firstDayOfTheWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay();

  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "Aplril",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const daysOfTheWeek = {
    6: "Sun",
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thu",
    4: "Fri",
    5: "Sat",
  };

  const arr = [];

  for (let i = 0; i < firstDayOfTheWeek; i++) {
    arr.unshift({ day: lastDayPrevMonth, type: "prev" });
    lastDayPrevMonth--;
  }
  for (let i = 1; i <= lastDay.getDate(); i++) {
    arr.push({ day: i, type: "current", dotw: firstDayOfTheWeek % 7 });
    firstDayOfTheWeek = firstDayOfTheWeek + 1;
  }

  let i = 1;

  while (arr.length < 42) {
    arr.push({ day: i, type: "next" });
    i++;
  }

  return (
    <>
      <div className="flex mt-4 gap-4">
        <Meetings
          isEditWorkDays={isEditSchedule}
          setIsEditWorkDays={setIsEditSchedule}
        />
        <div className="text-center">
          <p className="text-2xl mb-4">{months[currentMonth]}</p>
          <div className="grid grid-cols-7 grid-rows-6 gap-y-2 gap-2 text-left">
            {arr.map((el, index) => (
              <CalendarTile
                key={index}
                el={el}
                nowDate={nowDate}
                daysOfTheWeek={daysOfTheWeek}
                isEdit={isEditSchedule}
                tasksInThisDay={tasks.filter(
                  (task) => new Date(task.date).getDate() === el.day,
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

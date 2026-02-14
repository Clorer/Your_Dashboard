import { useState } from "react";
import DeleteIcon from "../../../../assets/icons/delete.svg"
import { useDispatch } from "react-redux";
import { deleteMeeting, deleteTask } from "../../../../store/Users/users.slice";


export default function Meeting({meet, index}) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`rounded-4xl w-full min-h-12 ${meet.type === "Completed" ? "bg-gray-400" : "bg-white/60"} p-4`}
    >
      <div className="flex justify-between">
        <p className={`${meet.type === "Completed" ? "line-through" : ""}`}>
          {meet.title}
        </p>
        {open && (
          <button
            onClick={() => {
              dispatch(deleteMeeting(index));
            }}
            className="h-fit"
          >
            <img src={DeleteIcon} alt="Close" className="w-5" />
          </button>
        )}
      </div>
      {open && (
        <p className="w-full rounded-4xl bg-white px-4 py-2 mt-4">
          {meet.description}
        </p>
      )}
      <div className="flex gap-4 mt-4">
        {open && (
          <p className="w-full rounded-4xl bg-white px-4 py-2">{meet?.date}</p>
        )}
        {open && (
          <p className="w-full rounded-4xl bg-white px-4 py-2">{meet.startTime} - {meet.finishTime}</p>
        )}
      </div>
    </div>
  );
}

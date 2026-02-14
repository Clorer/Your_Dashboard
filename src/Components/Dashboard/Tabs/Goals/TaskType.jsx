import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Task from "./Task";
import { openTaskModalState } from "../../../../store/ModalWindow/AddTask/modalWindow.slice";

export default function TaskType({ typeName, typeColor }) {
  const tasks = useSelector((state) => state.users.currentUser.tasks) || null;
  const dispatch = useDispatch();

  const onAddTaskClick = () => {
    dispatch(openTaskModalState(typeName));
  };

  return (
    <div className="flex flex-col mt-8">
      <p className={`m-auto text-2xl border-b-8 ${typeColor}`}>{typeName}</p>
      <div className="bg-white/40 rounded-4xl min-h-128 flex flex-col py-4 px-4">
        <div className="h-full flex flex-col gap-2">
          {tasks?.map((task, index) =>
            task.type === typeName ? <Task key={index} tsk={task} index={index}/> : null,
          )}
        </div>
        <button
          onClick={onAddTaskClick}
          className="m-auto rounded-4xl py-2 px-4 w-full bg-black text-white"
        >
          Add task
        </button>
      </div>
    </div>
  );
}

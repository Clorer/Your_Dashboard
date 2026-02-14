import { useDispatch } from "react-redux";
import CloseIcon from "../../../../assets/icons/close.svg";
import { closeTaskModalState } from "../../../../store/ModalWindow/AddTask/modalWindow.slice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../../../../store/Users/users.slice";

export default function AddTaskModal() {
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [dateState, setDateState] = useState("");

  const dispatch = useDispatch();
  const typeTask = useSelector((state) => state.taskModal.taskType);

  const onCreateClick = () => {
    dispatch(
      addTask({
        title: titleState || "No title",
        description: descriptionState || "No description",
        date: dateState || "No limit",
        type: typeTask,
      }),
    );
    dispatch(closeTaskModalState());
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-124 rounded-4xl  py-8 px-8 shadow-2xl bg-[#f4f0e8]">
      <div className="flex justify-between items-center">
        <p className="text-3xl">New task</p>
        <button
          className="h-fit"
          onClick={() => dispatch(closeTaskModalState())}
        >
          <img src={CloseIcon} alt="Close" className="w-4" />
        </button>
      </div>
      <section className="mt-8 flex flex-col gap-8">
        <input
          onChange={(e) => {
            setTitleState(e.target.value);
          }}
          value={titleState}
          type="text"
          name="task name"
          placeholder="What needs to be done?"
          className="w-full rounded-4xl h-12 px-4 border-gray-800 border"
        />

        <textarea
          onChange={(e) => {
            setDescriptionState(e.target.value);
          }}
          value={descriptionState}
          name="taskName"
          placeholder="Description"
          className="w-full h-48 px-4 py-2 border border-gray-800 rounded-4xl resize-none"
        ></textarea>
        <div className="flex gap-4">
          <input
            onChange={(e) => {
              setDateState(e.target.value);
            }}
            value={dateState}
            type="date"
            name="task date"
            className="w-full rounded-4xl border border-gray-800 p-4"
          />
          <div className="w-full rounded-4xl border border-gray-800 p-4">
            Type: {typeTask}
          </div>
        </div>
        <button
          onClick={onCreateClick}
          className="m-auto rounded-4xl p-4 w-full bg-black text-white"
        >
          Create task
        </button>
      </section>
    </div>
  );
}

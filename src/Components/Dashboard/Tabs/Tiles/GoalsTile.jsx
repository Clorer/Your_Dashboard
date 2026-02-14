import { useSelector } from "react-redux"
import TasksProgression from "./TasksProgression"

export default function GoalsTile(){
    const tasks = useSelector(state => state.users.currentUser.tasks)
return(
<div className="bg-white/40 rounded-4xl w-full h-full pt-4 px-2 pb-2 flex flex-col">
    <p className="ml-2 text-2xl">Tasks</p>
    <TasksProgression />
    <div className="rounded-4xl bg-gray-800 w-full flex-1 px-4 py-2 mt-4">
    <p className="ml-2 text-2xl text-white">{tasks.length > 0 ? "Urgent tasks: " : "You have not tasks"}</p>
        {tasks.filter(task => task.type === "Urgently").map((task, index) => (
            <p key={index} className="text-white mt-4 text-xl px-4 py-2 rounded-4xl bg-white/40">{task.title}</p>
        ))}
    </div>
</div>
)}
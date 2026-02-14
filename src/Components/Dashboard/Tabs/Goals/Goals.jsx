import TaskType from "./TaskType";

export default function Goals() {
  const taskTypes = [
    { name: "Urgently", color: "border-b-red-200" },
    { name: "Planned", color: "border-b-green-300" },
    { name: "In progress", color: "border-b-blue-200" },
    { name: "Completed", color: "border-b-gray-400" },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4">
      {taskTypes.map((type) => (
        <TaskType key={type.name} typeName={type.name} typeColor={type.color}/>
      ))}
    </div>
  );
}

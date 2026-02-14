import { useSelector } from "react-redux";

export default function TasksProgression() {
  const tasks = useSelector((state) => state.users.currentUser.tasks);
  const total = tasks.length;

  const types = ["Urgently", "Planned", "In progress", "Completed"];

  const colors = {
    Urgently: "bg-red-400/50",
    Planned: "bg-green-400/50",
    "In progress": "bg-blue-800/50",
    Completed: "bg-gray-400/50",
  };

  const percentages = types.map((type) => {
    const count = tasks.filter((t) => t.type === type).length;
    return total ? Math.round((count / total) * 100) : 0;
  });

  return total > 0 ? (
    <div className="w-full px-3">
      <div className="flex justify-between text-sm mb-2">
        {percentages.map((p, i) => (p > 0 ? <span key={i}>{p}%</span> : ""))}
      </div>

      <div className="flex w-full h-10 rounded-full overflow-hidden">
        {types.map((type, i) => (
          <div
            key={type}
            className={`${colors[type]} transition-all duration-500`}
            style={{ width: `${percentages[i]}%` }}
          />
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

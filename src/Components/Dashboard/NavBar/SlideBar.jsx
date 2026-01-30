import { useState } from "react";
import { motion } from "framer-motion";

const sections = ["Dashboard", "Salary", "Calendar", "Goals"];

export default function SlideBar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="relative flex bg-[#fafafaac] rounded-4xl p-1 h-fit">
      {sections.map((sect) => (
        <button
          key={sect}
          onClick={() => setActive(sect)}
          className="relative z-10 px-4 py-4 rounded-4xl"
        >
          {active === sect && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-black rounded-4xl"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}

          <span
            className={`relative ${
              active === sect ? "text-white" : "text-black"
            }`}
          >
            {sect}
          </span>
        </button>
      ))}
    </div>
  );
}

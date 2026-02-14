import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchActiveTab } from "../../../store/Slidebar/slidebar.slice";

const sections = ["Dashboard", "Salary", "Calendar", "Tasks"];

export default function SlideBar() {
 const active = useSelector(state => state.slidebar.activeTab)
 const dispatch = useDispatch();
  return (
    <div className="relative flex bg-[#fafafaac] rounded-4xl p-1 h-fit">
      {sections.map((sect) => (
        <button
          key={sect}
          onClick={() => dispatch(switchActiveTab(sect))}
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

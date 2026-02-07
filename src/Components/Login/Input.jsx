import {motion} from "motion/react"
import { useDispatch } from "react-redux";
import { clearErrors } from "../../store/Users/users.slice";

export default function Input({ FIELD_DATA}) {
  const dispatch = useDispatch()
  return (
    <div className="mt-2">
      <p>{FIELD_DATA.name}</p>
      <motion.input
        animate={FIELD_DATA?.error ? {x:[0, -8, 8, -8, 0] }: {x:0}}
        type={FIELD_DATA.type}
        placeholder={FIELD_DATA.placeholder}
        className={`border h-[3.5rem] rounded-xl w-full pl-6 ${FIELD_DATA?.error ? "border-red-600" : ""}`}
        value={FIELD_DATA.state}
        onChange={(e) => {FIELD_DATA.setState(e.target.value)
          dispatch(clearErrors())
        }}
      />
    </div>
  );
}

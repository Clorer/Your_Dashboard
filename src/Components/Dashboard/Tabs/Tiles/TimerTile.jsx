import { useRef, useState } from "react";
import Arrow from "../../../../assets/icons/arrow-up-right.svg";
import TimerPauseSVG from "../../../../assets/icons/timer-pause.svg";
import TimerPauseActiveSVG from "../../../../assets/icons/timer-pause-active.svg";
import TimerStartSVG from "../../../../assets/icons/timer-start.svg";
import TimerStartActiveSVG from "../../../../assets/icons/timer-start-active.svg";
import TimerResetSVG from "../../../../assets/icons/timer-reset.svg";

export default function TimerTile() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const format = (n) => String(n).padStart(2, "0");

  const startTimer = () => {
    if (intervalRef.current) return;

    setIsPaused(false);
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec === 59) {
          setMinutes((prevMin) => {
            if (prevMin === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            }
            return prevMin + 1;
          });
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const stopTimer = () => {
    setIsPaused(true);
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="bg-white/40 rounded-4xl w-full h-full py-4 px-4 flex flex-col justify-between">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl">Time tracker</h1>
        <button className="rounded-full bg-white px-3 py-3">
          <img src={Arrow} alt="Arrow up right" className="w-4" />
        </button>
      </div>
      <div className="flex justify-center items-center ">
        <p className="text-4xl">
          {format(hours)}:{format(minutes)}:{format(seconds)}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button
            className="rounded-full bg-white px-3 py-2"
            onClick={startTimer}
          >
            <img
              src={isRunning ? TimerStartActiveSVG : TimerStartSVG}
              alt="Timer start"
              className="w-6"
            />
          </button>
          <button
            className="rounded-full bg-white px-3 py-2"
            onClick={stopTimer}
          >
            <img
              src={isPaused ? TimerPauseActiveSVG : TimerPauseSVG}
              alt="Timer start"
              className="w-6"
            />
          </button>
        </div>
        <button
          className="rounded-full bg-white px-3 py-2"
          onClick={resetTimer}
        >
          <img src={TimerResetSVG} alt="Timer reset" className="w-6" />
        </button>
      </div>
    </div>
  );
}

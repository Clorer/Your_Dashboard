import { useState } from "react";

export default function TimerTile() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec === 59) {
          setMinutes((prevMin) => {
            if (prevMin === 59) {
              setHours((prevHours) => {
                prevHours++;
                return 0;
              });
            }
            return prevMin + 1;
          });
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);
  };

  return (
    <div className="bg-white/40 rounded-4xl w-full h-full flex justify-center items-center">
      <p className="text-4xl">
        {hours}:{minutes}:{seconds}
      </p>
      <button onClick={startTimer} className="border">
        start
      </button>
    </div>
  );
}

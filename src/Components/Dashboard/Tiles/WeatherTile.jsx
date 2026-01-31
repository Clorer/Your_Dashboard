import { useEffect, useState } from "react";
import { WEATHER_KEY } from "../../../API";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
export default function WeatherTile() {
  const user = useSelector((state) => state.users.currentUser);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${user?.city || "Moscow"}&appid=${WEATHER_KEY}&units=metric
`;

  const [weatherData, setWeatherData] = useState(null);
  const request = async () => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  };

  const updateData = async () => {
    try {
      const result = await request();
      setWeatherData(result);
      console.log(result);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return weatherData ? (
    <div className="bg-white/40 rounded-4xl w-full h-full pt-4 pb-8 px-4 flex justify-between flex-col">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-4xl">Moscow</p>
          <p className="text-xl text-gray-400">
            {weatherData.weather[0].description}
          </p>
        </div>
        <img
          className="w-12 rounded-full bg-white"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-4">
        <div className=" flex flex-col">
          <p className="text-xl text-gray-600">Wind</p>
          <p className=" text-gray-400">
            {weatherData.wind.speed.toFixed(0)} mps
          </p>
        </div>
        <div className=" flex flex-col">
          <p className="text-xl text-gray-600">Feels like</p>
          <div className="flex">
            <p className=" text-gray-400">
              {weatherData.main.feels_like.toFixed(0)}
            </p>
            <p className="text-sm text-gray-400 mb-3">°C</p>
          </div>
        </div>
        <div className="row-span-2 flex justify-center items-center ">
          <p className="text-5xl">{weatherData.main.temp.toFixed(0)}</p>
          <p className="text-sm mb-6">°C</p>
        </div>
        <div className=" flex flex-col">
          <p className="text-xl text-gray-600">Pressure</p>
          <p className=" text-gray-400">
            {Math.round(weatherData.main.pressure * 0.75)} mm Hg
          </p>
        </div>
        <div className=" flex flex-col">
          <p className="text-xl text-gray-600">Humidity</p>
          <p className=" text-gray-400">
            {weatherData.main.humidity}%
          </p>
        </div>
      </div>
    </div>
  ) : (
    <motion.div
      style={{
        borderRadius: "1rem",
        background:
          "linear-gradient(45deg,rgb(156, 154, 154),rgb(214, 214, 214))",
      }}
      animate={{
        background: [
          "linear-gradient(45deg, rgb(245, 240, 230), rgb(255, 255, 255))",
          "linear-gradient(45deg, rgb(240, 230, 210), rgb(255, 255, 255))",
          "linear-gradient(45deg, rgb(235, 225, 200), rgb(255, 255, 255))",
        ],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    ></motion.div>
  );
}

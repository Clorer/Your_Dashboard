export default function Meetings({isEditWorkDays, setIsEditWorkDays}) {
  return (
      <div className="w-[33%] text-center flex flex-col gap-2">
        <p className="text-2xl">Meetings</p>
        <div className="bg-white/60 rounded-4xl w-full flex-1">
        </div>
        <button className="m-auto rounded-4xl py-2 px-4 w-full bg-black text-white text-xl">Add a meeting</button>
        <button onClick={() => setIsEditWorkDays(!isEditWorkDays)} className="m-auto rounded-4xl py-2 px-4 w-full bg-black text-white text-xl">{isEditWorkDays ? "Save schedule" : "Edit schedule"}</button>
      </div>
  );
}

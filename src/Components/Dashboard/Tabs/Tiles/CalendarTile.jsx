export default function CalendarTile(){
    const arr = [0,1,2,3,4,5,6]
return(
<div className="bg-white/40 rounded-4xl w-full h-full pt-4 px-1 pb-1 grid grid-cols-7 grid-rows-1 gap-2 p-2">
{arr.map(el => (
    <div className="h-full bg-white/60 rounded-4xl">{el}</div>
))}
</div>
)}
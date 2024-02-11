import { FaXmark } from "react-icons/fa6";

export default function BetSlipItem() {
  return (
    <div className="flex items-center shadow-sm bg-gray-500 rounded-sm py-1 px-1 my-1">
      <FaXmark className="text-white mx-2" />
      <div className="flex justify-between w-[calc(100%-2rem)] ">
        <div>
          <h1 className="text-xxs text-gray-100">Today</h1>
          <p className="text-xxs text-gray-200">English Premier League</p>
          <p className="text-xxs font-medium">Tottenham Hotspur- Brentford</p>
        </div>
        <div className="">
        <h1 className="text-xxs text-gray-100 text-end">22:00</h1>
          <p className="text-xxs text-gray-200">Doubl Chance 12</p>
          <div className="rounded-full w-6 h-6 flex justify-center items-center bg-red-700 text-white text-xs right-0">
          <p className="text-xxs text-end">5.3</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

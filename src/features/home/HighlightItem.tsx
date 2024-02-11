import { FaBaseball, FaChartColumn, FaStar } from "react-icons/fa6";

export default function HighlightItem() {
  return (
    <div className="w-48 shadow-sm bg-gray-500 rounded-sm mx-1">
        <div className="flex items-start justify-between">
            <div className="flex items-center p-2">
            <FaBaseball className="text-white text-xxs" />
            <p className="text-xxs">League1</p>
            </div>
            <p className="text-xxs p-2">Tomorrow/2300</p>
            <div className="flex items-center p-2 space-x-1">
                <FaChartColumn className="text-white text-xxs" />
                <FaStar className="text-xxs text-yellow-500" />
            </div>
        </div>
        <div className="flex justify-between items-start p-2">
        <div className="flex items-center space-x-1">
        <div className="text-xxs">
            <p className="">Rc</p>
            <p>Strasbourg</p>
        </div>
        <div className="h-6 w-6">
        <img src="/images/logo_team.png" alt="" className="h-full w-full rounded-full" />
        </div>
        </div>
        
       <div className="flex items-center space-x-1">
       <div className="h-6 w-6">
        <img src="/images/psg.png" alt="" className="h-full w-full rounded-full" />
        </div>
       <div className="text-xxs">
            <p>Paris</p>
            <p>St German</p>
        </div>
        
       </div>
        </div>
    </div>
  )
}

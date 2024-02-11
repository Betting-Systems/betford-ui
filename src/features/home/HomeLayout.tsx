import BetSlip from "./BetSlip"
import Highlights from "./Highlights"
import TotalBet from "./TotalBet"

export default function HomeLayout() {
  const congrats =[
    {
      id:1,
      time:'2:51',
      win:21000
    },
    {
      id:2,
      time:'2:51',
      win:21000
    },
    {
      id:3,
      time:'2:51',
      win:21000
    },
    {
      id:4,
      time:'2:51',
      win:21000
    },
    {
      id:5,
      time:'2:51',
      win:21000
    },
    {
      id:6,
      time:'2:51',
      win:21000
    },
    {
      id:7,
      time:'2:51',
      win:21000
    },
    
   
   
  ]
  return (
    <div className="block md:flex md:items-start">
      <div className=" w-full md:w-2/3 ">
        <div className="w-full block md:flex md:items-start">
        <div className="w-3/4 px-2">
          <h1 className="px-2 text-lg">Today's Promotion</h1>
        <div className=" h-28">
          
          <img src="https://cdn.pixabay.com/photo/2016/05/20/21/57/football-1406106_640.jpg" alt="" className="h-full w-full rounded-md object-cover" />
        </div>
        </div>
        <div className="w-72 px-2 h-28 overflow-y-auto">
         <h1 className="px-2 text-lg">Today's Winners</h1>
         <ul>
         {
          congrats.map((congrat, index) => (
            <li key={index} className="flex">
            <p className="text-xxs">Congradulations Today2:51 <span>Win 21000</span></p>
            
          </li>
          ))
         }
         </ul>
        </div>
        </div>
        <h1 className="text-lg font-medium">Highlights</h1>
        <div className="w-[100%]">
        <Highlights/>
        </div>
      </div>
      <div className="w-1/3 bg-gray-900 h-[calc(100vh-6rem)] overflow-y-auto">
     <div className="h-2/3 overflow-y-auto">
     <BetSlip/>
     </div>
     <div className="h-1/3">
     <TotalBet/>
     </div>
      </div>
    </div>
  )
}

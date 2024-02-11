import FlexComponent from "./FlexComponent";
import NormalFlexText from "./NormalFlexText";
import OddTotalItem from "./OddTotalItem";

export default function TotalBet() {
  return (
    <>
    <div className='flex justify-between items-start text-white text-xs px-2 py-3 mb-5'>
    <h1 className='font-medium'>Total Odds</h1>
    <div>
        <p className="text-end font-medium">145.14</p>
        <p className='lowercase'>Odds May change</p>
    </div>
    </div>

    <div className="flex justify-between items-start px-2">
    <OddTotalItem/>
    <OddTotalItem/>
    <OddTotalItem/>
    </div>
    <div className="bg-gray-500 px-3 rounded-sm  mx-1">
    <FlexComponent title="Stake Amount" value="10 ETB" />
    </div>
    <div className="px-3 mx-1 border-b border-b-gray-500">
    <FlexComponent title="Possible Win" value="1450 ETB" />

    <NormalFlexText title="VAT 15% " value="1.30 ETB" />
    <NormalFlexText title="Stake after VAT " value="8.70 ETB" />
    <NormalFlexText title="Income Tax 15%" value="0ETB" />

    <button className="btn bg-red-700 text-white font-bold hover:bg-red-600 w-full text-lg mt-1 mb-2" >Place Bet</button>
    </div>
    </>
  )
}

import { Outlet } from "react-router-dom";
import SideNav from "../component/SideNav";
import TopNav from "../component/TopNav";

export default function AppLayout() {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-gray-700">
    <TopNav/>
    {/* Page content here */}
    
    <div className="px-2 text-white">
    <Outlet/>
    </div>
  
  </div> 
 {/* side bar */}
 <SideNav/>
</div>
  )
}

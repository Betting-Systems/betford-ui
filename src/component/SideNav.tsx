
export default function SideNav() {
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <p>Top Leagues</p>
    <ul className="menu p-4 w-64 min-h-full bg-base-200 ">
      {/* Sidebar content here */}
     
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
  )
}

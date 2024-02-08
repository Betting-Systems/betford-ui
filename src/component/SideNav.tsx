import { Link } from "react-router-dom"

export default function SideNav() {
  const links = [
    {
      name: 'Premier League',
      path: '/premier-league'
    },
    {
      name: 'La Liga',
      path: '/la-liga'
    },
    {
      name: 'Bundesliga',
      path: '/bundesliga'
    },
    {
      name: 'Serie A',
      path: '/serie-a'
    }
  ]
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    
   <div className=" p-4 w-64 min-h-full bg-gray-600 ">
   <p className="px-4 text-white font-medium">Top Leagues</p>
   <ul className="menu text-white">
    
      {/* Sidebar content here */}
     
      {
        links.map((link, index) => (
          <li key={index}><Link to={link.path}>{link.name}</Link></li>
        ))
      }
      <li><a>Sidebar Item 2</a></li>
    </ul>
   </div>
  
  </div>
  )
}

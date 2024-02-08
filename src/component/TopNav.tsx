import { FaBars, FaHouse, FaTrophy, FaXbox } from "react-icons/fa6";

export default function TopNav() {
  return (
    <div className="navbar bg-gray-600 shadow-sm">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-2"
          className="cursor-pointer px-2 drawer-button lg:hidden"
        >
          <FaBars className="text-xl " />
        </label>
        <div className="indicator">
          <span className="indicator-item badge ">TM</span>
          <div className="cursor-pointer text-2xl text-white font-semibold"><span className="text-red-500">Bet</span>ford</div>
        </div>
        {/* <a className="cursor-pointer text-2xl text-gray-950 font-semibold"><span className="text-red-700">Bet</span>ford</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white uppercase max-w-2xl overflow-x-auto text-xs">
          <li>
            <a className="flex space-x-1">
              <FaHouse/>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="flex space-x-1">
              <FaTrophy/>
              <span>Sports</span>
            </a>
          </li>
          
          <li>
            <a>Live</a>
          </li>
          <li>
            <a className="flex space-x-1">
              <FaXbox/>
              <span>Games</span>
            </a>
          </li>
          <li>
            <a className="flex space-x-1">
              <FaXbox/>
              <span>esports</span>
            </a>
          </li>
          <li>
            <a className="flex space-x-1">
              <FaXbox/>
              <span>Crash Games</span>
            </a>
          </li>
          <li>
            <a className="flex space-x-1">
              <FaXbox/>
              <span>Aviator</span>
            </a>
          </li>
          {/* <li>
            <a className="flex space-x-1">
              <FaXbox/>
              <span>Promotions</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end flex space-x-3">
        <a className="btn btn-outline text-white hover:bg-gray-600 text-lg">Login</a>
        <a className="btn bg-red-700 text-white hover:bg-red-600 text-lg">Register</a>
        <div className="">

        </div>
      </div>
    </div>
  );
}

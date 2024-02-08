import { FaBars } from "react-icons/fa6";

export default function TopNav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <FaBars />
        </label>
        <div className="indicator">
          <span className="indicator-item badge ">TM</span>
          <div className="cursor-pointer text-2xl text-gray-950 font-semibold"><span className="text-red-700">Bet</span>ford</div>
        </div>
        {/* <a className="cursor-pointer text-2xl text-gray-950 font-semibold"><span className="text-red-700">Bet</span>ford</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

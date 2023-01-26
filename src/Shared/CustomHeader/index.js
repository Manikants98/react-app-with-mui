import React from "react";
import { Link } from "react-router-dom";

const CustomHeader = () => {
  return (
    <div className="navbar bg-base-100 backdrop-blur-[8px] bg-opacity-70 z-40 fixed border-b-2 border-base-300 top-0">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          React-With-DaisyUI
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded w-52"
          >
            <li>
              <Link className="justify-between" to="/">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;

import { Avatar, Divider } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Config";

const CustomHeader = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post(
        "/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      localStorage.clear();
      alert(response.data.message);
      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };

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
            <Avatar alt={name} src="https://picsum.photos/200" size="large" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded w-52"
          >
            <div className="flex justify-center items-center">
              <Avatar alt={name} src="https://picsum.photos/200" size={64} />
            </div>

            <li className="text-center capitalize mt-1">{name}</li>
            <li className="text-center capitalize text-xs mb-1">{email}</li>
            <Divider />
            <li>
              <Link className="justify-between" to="/">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/">Settings</Link>
            </li>
            <li>
              <span onClick={handleLogout}>Logouts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;

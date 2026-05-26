import React, { useContext } from "react";
import { AppContext } from "../context/AuthContext";

const Header = ({handleLogout,loggedinUserData}) => {

  return (
    <header className="px-[20px] py-[20px] flex justify-between items-end gap-[20px]">
          <div className="header-left">
            <div className="user-greetings text-[20px]">
              Hello,
              <span className="username block font-bold text-[30px]">
                {loggedinUserData?.firstname || "User"} 👋
                
              </span>
            </div>
          </div>
          <div className="header-right">
            <div className="btn logout-btn">
              <button onClick={handleLogout} className="bg-red-400 px-[25px] py-[10px] text-white rounded cursor-pointer">
                Logout
              </button>
            </div>
          </div>
    </header>
  );
};

export default Header;

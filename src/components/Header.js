import { useState,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {

  const [btnNameReact, SetBtnNameReact] = useState("Login")

  const {loggedInUser} = useContext(UserContext);


  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between border-2">
      <div className="logo-container w-36 ">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex list-none">
          <li className="text-lg p-3 m-1">Online Status <span>{onlineStatus ? "✅":"🔴"}</span></li>
          <li className="text-lg p-3 m-1"><Link to="/">Home</Link></li>
          <li className="text-lg p-3 m-1"><Link to="/about">About Us</Link></li>
          <li className="text-lg p-3 m-1"><Link to="/contact">Contact US</Link></li>
          <li className="text-lg p-3 m-1"><Link to="/grocery">Grocery</Link></li>
          <li className="text-lg p-3 m-1">Cart</li>
          <li className="text-lg p-3 m-1"><button className={btnNameReact==="Login "? "Login rounded-none border-pink-600" : "Logout rounded-none border-pink-600"} onClick={()=>{
            btnNameReact ==="Login" ? SetBtnNameReact("Logout") : SetBtnNameReact("Login")

          }}>{btnNameReact}</button></li>
          <li className="text-lg p-3 m-1">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
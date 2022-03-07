import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    /*making the header, we need to divide the header into three parts 
          each part will have items inside of it such as tabs, logo and so on
        */
    <div className="header">
      <div className="header__left">
        <img src="/images/logo.PNG" alt=""></img>
        <div className="SearchBar__input">
          <input placeholder="Search mashup" type="text"></input>
        </div>
      </div>

      {/*Here I'm declaring the bottons which will take us to other pages*/}
      <div className="header__middle">
        <Link to="/" className="Header__item">
          Home
        </Link>
        <Link to="MarketPlace" className="Header__item">
          Market Place
        </Link>
        <Link to="DoodleCollab" className="Header__item">
          Doodle Collab
        </Link>
        <Link to="Settings" className="Header__item">
          Settings
        </Link>
        <Link to="Library" className="Header__item">
          Library
        </Link>
      </div>

      {/*Using Firebase database to display user's google account username and profile pic on Header*/}
      <div className="header__right">
        <div className="profile_image">
          <img src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <Link to="Login" className="Header__item">
          Login
        </Link>
        <Link to="Signup" className="Header__item">
          Darkmode
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  let isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 w-48 p-5 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shots</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Gamings</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Gamings</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

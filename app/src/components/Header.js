import React from "react";
import SearchBar from "./SearchBar";

export default function Header(props) {
  return (
    <div className="header">
      <h1>Magic The Gathering</h1>
      <SearchBar />
      <nav>
        <a href=""> About </a>
        <a href=""> Life Tracker </a>
        <a href=""> Favorites </a>
      </nav>
    </div>
  );
}
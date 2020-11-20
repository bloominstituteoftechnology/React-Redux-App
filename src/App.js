import React from "react";
import "./styles.css";
import Search from "./components/Search";
import ListOfCards from "./components/ListOfCards";

export default function App() {
  return (
    <div className="App">
      <Search />
      <ListOfCards />
    </div>
  );
}

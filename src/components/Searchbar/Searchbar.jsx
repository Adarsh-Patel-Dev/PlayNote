import React from "react";
import "./search-bar.css"
import { MdFilterList, MdOutlineSearch } from "react-icons/md";

function Searchbar() {
  return (
    <div className="search-bar flex-row-center">
      <div className="search-bar-icon">
        <MdOutlineSearch />
      </div>
      <input className="search-bar-input" placeholder="search here..."/>
      <div className="search-bar-icon"><MdFilterList /></div>
    </div>
  );
}

export { Searchbar };

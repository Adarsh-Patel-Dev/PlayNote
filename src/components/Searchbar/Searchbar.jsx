import React from "react";
import "./search-bar.css"
import { MdFilterList, MdOutlineSearch } from "react-icons/md";
import { useNoteContext } from "../../Context/noteContext";

function Searchbar() {
  const { noteDispatch, noteState } = useNoteContext();
  const { searchValue }  = noteState
  return (
    <div className="search-bar flex-row-center">
      <div className="search-bar-icon">
        <MdOutlineSearch />
      </div>
      <input 
      onChange={(e)=>noteDispatch({type:"SEARCH", payload:e.target.value})}
      value={searchValue}
      className="search-bar-input" placeholder="search here..."/>
      <div className="search-bar-icon"><MdFilterList /></div>
    </div>
  );
}

export { Searchbar };

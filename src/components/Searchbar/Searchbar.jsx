import React, { useState } from "react";
import "./search-bar.css"
import { MdFilterList, MdOutlineSearch } from "react-icons/md";
import { useNoteContext } from "../../Context/noteContext";
import { FilterModal } from "../Modals/FilterModal/FilterModal";

function Searchbar() {
  const { noteDispatch, noteState } = useNoteContext();
  const { searchValue }  = noteState
  const [ filterModal, setFilterModal ] = useState(false)
  return (
    <div className="search-bar flex-row-center">
      <div className="search-bar-icon">
        <MdOutlineSearch />
      </div>
      <input 
      onChange={(e)=>noteDispatch({type:"SEARCH", payload:e.target.value})}
      value={searchValue}
      className="search-bar-input" placeholder="search here..."/>
      <div 
      onClick={()=>{
        console.log("click")
        setFilterModal(prev=>!prev)}}
      className="search-bar-icon"><MdFilterList /></div>
      <div style={{display:filterModal?"none":"block"}}>
      <FilterModal />
      </div>
    </div>
  );
}

export { Searchbar };

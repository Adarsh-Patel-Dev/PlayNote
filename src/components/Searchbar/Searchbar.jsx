import React, { useState } from "react";
import "./search-bar.css"
import { MdFilterList, MdOutlineSearch } from "react-icons/md";
import { useNoteContext } from "../../Context/noteContext";
import { FilterModal } from "../Modals/FilterModal/FilterModal";
import { useFilterContext } from "../../Context/FilterContext";

function Searchbar() {
  const { noteDispatch, noteState } = useNoteContext();
  const { searchValue }  = noteState
  const { filterState:{filterModal}, filterDispatch }  = useFilterContext()
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
      onClick={()=>
       filterDispatch({type:"FILTER_MODAL", payload:true })
       }
      className="search-bar-icon"><MdFilterList />
      <span className="tooltip">filter</span>
      </div>
      <FilterModal />
    </div>
  );
}

export { Searchbar };

import React from "react";
import "./asidebar.css";
import {
  MdLabelOutline,
  MdHomeFilled,
  MdOutlineArchive,
  MdOutlineDelete,
  MdFilterList,
  MdLogout,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useNoteContext } from "../../Context/noteContext";
import { NavLink, useLocation } from "react-router-dom";
import { NoteModal } from "../Modals/NoteModal/NoteModal";
function Asidebar() {
  const { noteDispatch } = useNoteContext();

  return (
    <div className="asidebar">
      <div className="asidebar-menu flex-col-center">
        <ul className="asidebar-list flex-col-center">

          <NavLink to="/home">
            <li className="asidebar-list-items">
              <AiOutlineHome />
              <span>Home</span>
            </li>
          </NavLink>

          <NavLink to="/archive">
            <li className="asidebar-list-items">
              <MdOutlineArchive />
              <span>Archive</span>
            </li>
          </NavLink>

          <NavLink to="/trash">
            <li className="asidebar-list-items">
              <MdOutlineDelete /> 
              <span>Trash</span>
            </li>
          </NavLink>
        </ul>

        <button
          className="asidebar-btn"
          onClick={() => noteDispatch({ type: "NOTE_MODAL", payload: true })}
        >
          Add Note
        </button>
      </div>
      <div className="asidebar-user flex-row-center">
        <div className="asidebar-user-details flex-row-center">
          <div className="asidebar-user-logo flex-row-center">A</div>
          <div className="flex-col-center">
            <div className="asidebar-user-name">Adarsh</div>
            <div className="asidebar-user-name-small">@adarsh</div>
          </div>
        </div>
        <div className="asidebar-user-logout">
          <MdLogout />
        </div>
      </div>
      <NoteModal />
    </div>
  );
}

export { Asidebar };

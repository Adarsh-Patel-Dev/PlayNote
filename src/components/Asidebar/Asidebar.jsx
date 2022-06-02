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
import { FaRegUserCircle, FaArchive } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useNoteContext } from "../../Context/noteContext";
import { NavLink, useLocation } from "react-router-dom";
import { NoteModal } from "../Modals/NoteModal/NoteModal";
function Asidebar() {
  const { notesDispatch, notesState } = useNoteContext();
  const { isModalOpen } = notesState;
  const { location } = useLocation();
  return (
    <div className="asidebar">
      <div className="asidebar-menu flex-col-center">
        <ul className="asidebar-list flex-col-center">
          <NavLink to="/home">
            <li className="asidebar-list-items">
              <AiOutlineHome /> Home
            </li>
          </NavLink>

          <NavLink to="/archive">
            <li className="asidebar-list-items">
              <MdOutlineArchive /> Archive
            </li>
          </NavLink>

          <NavLink to="/trash">
            <li className="asidebar-list-items">
              <MdOutlineDelete /> Trash
            </li>
          </NavLink>

          <NavLink to="/profile">
            <li className="asidebar-list-items">
              <FaRegUserCircle /> Profile
            </li>
          </NavLink>

          {/* <li className="asidebar-list-items"><MdLabelOutline/> Label</li> */}
        </ul>

        <button
          className="asidebar-btn"
          onClick={() => notesDispatch({ type: "SHOW_MODAL", payload: true })}
        >
          Create New Note
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

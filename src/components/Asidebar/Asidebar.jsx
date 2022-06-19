import React, { useState, useEffect } from "react";
import "./asidebar.css";
import {
  MdLabelOutline,
  MdHomeFilled,
  MdOutlineStickyNote2,
  MdOutlineArchive,
  MdOutlineDelete,
  MdFilterList,
  MdLogout,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useNoteContext } from "../../Context/noteContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NoteModal } from "../Modals/NoteModal/NoteModal";
import { Toast } from "../Toast/Toast";
import { useAuthContext } from "../../Context/AuthContext";

function Asidebar() {
  const { noteDispatch } = useNoteContext();
  const [logout, setLogout ] = useState(false);
  const { userName } = useAuthContext()
  //styling activeNavLinks
  const navListStyles = ({ isActive }) => {
   return {
     fontWeight: isActive ? "bold" : "normal",
     textDecoration: isActive ? "underline" : "none",
   }
  }

  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    if(logout){
      setTimeout(()=>{
        window.location.reload();
      },3000)
      navigate('/login');
    }
 
  }, [logout])
  


  return (
    <div className="asidebar">
      <div className="asidebar-menu flex-col-center">
        <ul className="asidebar-list flex-col-center">

          <NavLink to="/home" 
        //  style={navListStyles}
         className={ ({isActive}) =>!isActive? "not-active":"is-active"}
         >
            <li className="asidebar-list-items">
              <MdOutlineStickyNote2 />
              <span>Notes</span>
            </li>
          </NavLink>

          <NavLink to="/home" 
        //  style={navListStyles}
         className={ ({isActive}) =>!isActive? "not-active":"is-active"}
         >
            <li className="asidebar-list-items">
              <MdLabelOutline />
              <span>Labels</span>
            </li>
          </NavLink>

          <NavLink to="/archive"
            // style={navListStyles}
            className={ ({isActive}) =>!isActive? "not-active":"is-active"}
            >
            <li className="asidebar-list-items">
              <MdOutlineArchive />
              <span>Archive</span>
            </li>
          </NavLink>

          <NavLink to="/trash"
          //  style={navListStyles}
          className={ ({isActive}) =>!isActive? "not-active":"is-active"}
           >
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
      {userName && (<div className="asidebar-user flex-row-center">
        <div className="asidebar-user-details flex-row-center">
          <div className="asidebar-user-logo flex-row-center">{userName?userName.charAt(0):"U"}</div>
          <div className="flex-col-center">
            <div className="asidebar-user-name">{userName? userName:"User"}</div>
            <div className="asidebar-user-name-small">@{userName? userName:"User"}</div>
          </div>
        </div>
        <div className="asidebar-user-logout">
         <MdLogout 
          onClick={()=>{
            setLogout(true);
             localStorage.clear();
             Toast({msg:"info", msg:"You have logged out."})
           }}
         />
        </div>
      </div>)}
      <NoteModal />
    </div>
  );
}

export { Asidebar };

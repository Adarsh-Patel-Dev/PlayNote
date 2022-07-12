import React from "react";
import {
  MdLabelOutline,
  MdOutlineModeEdit,
  MdOutlineDelete,
  MdOutlineArchive,
  MdOutlinePriorityHigh,
} from "react-icons/md";
import { BsFillPinAngleFill, BsPinAngle } from "react-icons/bs";
import "./note-card.css";
import { useNoteContext } from "../../../Context/noteContext";

function NoteCard({ note }) {
  const {
    _id,
    title,
    textareaValue,
    label,
    labelArray,
    priority,
    notesBgColor,
    noteCreatedDate,
    isEdit,
  } = note;
  let { noteDispatch, adddToArchive, addToNotes, adddToTrash, pinnedNotes, deleteFromTrash } = useNoteContext();

  // function unPinnedNotes(id){
  //    pinnedNotes = pinnedNotes.filter((note)=>note._id !== id)
  // }

  console.log("pinnedNOtesafterdelete", pinnedNotes)
  

  function priorityColor(priority) {
    switch (priority) {
      case "urgent":
        return "red";

      case "medium":
        return "orange";

      case "low":
        return "green";

      default:
        break;
    }
  }

  return (
    <div
      className="note-card flex-col-center"
      style={{ backgroundColor: notesBgColor }}
    >
      <div className="note-card-header flex-row-center">
        <h3 className="note-card-title">{title}</h3>
       { pinnedNotes.find((note)=>note._id === _id) ?
         (<span 
        onClick={()=>{
          noteDispatch({type:"PINNED_NOTES",payload:pinnedNotes.filter(note=>note._id!==_id)})
          noteDispatch({type:"ADD_TO_NOTES",payload:[...addToNotes,note]})
        }
        
        }
        className="note-card-pinned">
          <BsFillPinAngleFill />
        </span>):(
          <span 
        onClick={()=>{noteDispatch({type:"PINNED_NOTES", payload : [...pinnedNotes, note]})
        noteDispatch({type:"ADD_TO_NOTES",payload:addToNotes.filter(note=>note._id!==_id)})
        }}
        className="note-card-pinned">
          <BsPinAngle />
        </span>
        )}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: textareaValue }}
        className="note-card-body"
      ></div>

      <div className="card-label-priority">
        <div className="note-card-label">
          <MdLabelOutline />
          {label}
        </div>
        <span
          style={{
            color: priorityColor(priority),
            borderColor: priorityColor(priority),
          }}
          className="note-card-priority"
        >
          ! {priority}
        </span>
      </div>
      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on {noteCreatedDate}</p>
        <div className="note-card-footer-icons flex-row-center">
          <span className="note-card-footer-icon">
            <MdOutlineModeEdit
              onClick={() => {
                noteDispatch({ type: "IS_EDIT", payload: true });
                noteDispatch({ type: "NOTE_MODAL", payload: true });
                noteDispatch({
                  type: "EDIT_NOTE",
                  payload: note,
                });
              }}
            />
          </span>

          <span className="note-card-footer-icon">
            <MdOutlineArchive
              onClick={() => adddToArchive(note, noteDispatch)}
            />
          </span>
          <span className="note-card-footer-icon">
            <MdOutlineDelete onClick={() => adddToTrash(note, noteDispatch)} />
          </span>
        </div>
      </div>
    </div>
  );
}

export { NoteCard };

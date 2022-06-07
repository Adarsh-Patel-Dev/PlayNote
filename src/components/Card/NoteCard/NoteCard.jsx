import React from "react";
import {
  MdLabelOutline,
  MdOutlineModeEdit,
  MdOutlineDelete,
  MdOutlineColorLens,
  MdOutlineArchive,
} from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import "./note-card.css";
import { useNoteContext } from "../../../Context/noteContext";

function NoteCard({ note }) {
  const {
    _id,
    title,
    textareaValue,
    label,
    priority,
    notesBgColor,
    noteCreatedDate,
    isEdit,
  } = note;
  const { noteDispatch, adddToArchive, adddToTrash } = useNoteContext();

  // const edithandler = (note) =>{
  //   noteDispatch({ type:"IS_EDIT", payload:true})
  //   noteDispatch({ type:"NOTE_MODAL", payload:true})
  //   noteDispatch({ type:"ADD_TO_NOTES", payload:note})
  // }

  return (
    <div
      className="note-card flex-col-center"
      style={{ backgroundColor: notesBgColor }}
    >
      <div className="note-card-header flex-row-center">
        <h3 className="note-card-title">{title}</h3>
        <span className="note-card-pinned">
          <BsPinAngle />
        </span>
      </div>

      <div dangerouslySetInnerHTML={{__html:textareaValue}}
      className="note-card-body"></div>

      {/* <div className="note-card-body">{textareaValue}</div> */}
      <div className="card-label-priority">
        <div className="note-card-label"><MdLabelOutline/>{label}</div>
        <span className="note-card-label">{priority}</span>
      </div>
      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on {noteCreatedDate}</p>
        <div className="note-card-footer-icons flex-row-center">
          <span className="note-card-footer-icon">
            <MdOutlineModeEdit
             onClick={()=>{
               noteDispatch({
                 type:"EDIT_NOTE",
                 payload:{
                   _id:_id,
                   isEdit: true,
                   title:title,
                   textareaValue:textareaValue,
                   label:label,
                   priority:priority,
                   noteModal:true,
                   notesBgColor:notesBgColor,
                 }
               })
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

import React from "react";
import {
  MdLabelOutline,
  MdOutlineModeEdit,
  MdOutlineDelete,
  MdFilterList,
  MdOutlineColorLens,
  MdOutlineArchive,
} from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import "./note-card.css";
import { useNoteContext } from "../../../Context/noteContext";

function NoteCard({ note }) {
  const {  title, textareaValue, label, priority, notesBgColor, noteCreatedDate } = note;
  const { notesDispatch } = useNoteContext();

  const newDate = new Date(noteCreatedDate);
  const date = newDate.getDate() + "/" + (newDate.getMonth()+1) + newDate.getFullYear();
  const time = newDate.getHours + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
  const notesDateAndTime = date + "at" + time;


  return (
    <div className="note-card flex-col-center" style={{backgroundColor: notesBgColor}}>
      <div className="note-card-header flex-row-center">
        <h3 className="note-card-title">{title}</h3>
        <span className="note-card-pinned">
          <BsPinAngle />
        </span>
      </div>

      <div className="note-card-body">
       {textareaValue}
      </div>
      <div className="card-label-priority">
        <div className="note-card-label">{label}</div>
        <span className="note-card-label">{priority}</span>
      </div>
      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on {noteCreatedDate}</p>
        <div className="note-card-footer-icons flex-row-center">
          <span>
            <MdOutlineModeEdit
            //  onClick={()=>{
            //    notesDispatch({
            //      type:"EDIT",
            //      payload:{
            //        title:title,
            //        description:description,
            //        label:label,
            //        priority:priority,
            //        isModalOpen:true,
            //        backgroundColor:backgroundColor,
            //      }
            //    })
            //  }}
             />
          </span>
          
          <span>
            <MdOutlineArchive />
          </span>
          <span>
            <MdOutlineDelete />
          </span>
        </div>
      </div>
    </div>
  );
}

export { NoteCard };

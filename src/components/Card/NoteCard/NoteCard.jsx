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
  const {  title, description, label, priority, backgroundColor, dateAndTime } = note;
  const { notesDispatch } = useNoteContext();

  const newDate = new Date(dateAndTime);
  const date = newDate.getDate() + "/" + (newDate.getMonth()+1) + newDate.getFullYear();
  const time = newDate.getHours + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
  const notesDateAndTime = date + "at" + time;


  return (
    <div className="note-card flex-col-center">
      <div className="note-card-header flex-row-center">
        <h3 className="note-card-title">Title of note</h3>
        <span className="note-card-pinned">
          <BsPinAngle />
        </span>
      </div>

      <div className="note-card-body">
        In web applications, all the data you show on the page should reside
        somewhere, for example, cache, database, storage account, etc.{" "}
      </div>
      <div className="card-label-priority">
        <span className="note-card-label">{label}</span>
        <span className="note-card-priority">{priority}</span>
      </div>
      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on {notesDateAndTime}</p>
        <div className="note-card-footer-icons flex-row-center">
          <span>
            <MdOutlineModeEdit
             onClick={()=>{
               notesDispatch({
                 type:"EDIT",
                 payload:{
                   title:title,
                   description:description,
                   label:label,
                   priority:priority,
                   isModalOpen:true,
                  //  noteId:
                   backgroundColor:backgroundColor,
                 }
               })
             }}
             />
          </span>
          {/* <span>
            <MdOutlineColorLens />
          </span>
          <span>
            <MdLabelOutline />
          </span> */}
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

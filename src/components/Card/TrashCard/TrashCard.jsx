import React from "react";
import {
  MdOutlinePriorityHigh,
  MdLabelOutline,
  MdOutlineDelete,
  MdOutlineRestoreFromTrash,
} from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import { useNoteContext } from "../../../Context/noteContext";

// import "./note-card.css";

function TrashCard({ note }) {
  const {
    _id,
    title,
    textareaValue,
    label,
    priority,
    notesBgColor,
    noteCreatedDate,
  } = note;
  const { noteDispatch, restoreFromTrash, deleteFromTrash } = useNoteContext();

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
      <div className="card-label-priority">
      <div className="note-card-label"><MdLabelOutline/>{label}</div>
        <span className="note-card-label"><MdOutlinePriorityHigh/>{priority}</span>
      </div>
      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on {noteCreatedDate}</p>
        <div className="note-card-footer-icons flex-row-center">
          <span className="note-card-footer-icon">
            <MdOutlineRestoreFromTrash
              onClick={() => restoreFromTrash(_id, noteDispatch)}
            />
          </span>
          <span className="note-card-footer-icon">
            <MdOutlineDelete
              onClick={() => deleteFromTrash(_id, noteDispatch)}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export { TrashCard };

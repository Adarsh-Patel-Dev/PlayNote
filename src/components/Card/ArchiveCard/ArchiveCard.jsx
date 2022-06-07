import React from "react";
import { MdOutlineUnarchive, MdOutlineDelete } from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import { useNoteContext } from "../../../Context/noteContext";

// import "./note-card.css";

function ArchiveCard({ note }) {
  const {
    _id,
    title,
    textareaValue,
    label,
    priority,
    notesBgColor,
    noteCreatedDate,
  } = note;
  const { noteDispatch, restoreFromArchive, deleteFromArchive } =
    useNoteContext();

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

      <div className="note-card-body">{textareaValue}</div>
      <div className="card-label-priority">
        <span className="note-card-label">{label}</span>
        <span className="note-card-priority">{priority}</span>
      </div>

      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on {noteCreatedDate}</p>
        <div className="note-card-footer-icons flex-row-center">
          <span className="note-card-footer-icon">
            <MdOutlineUnarchive
              onClick={() => restoreFromArchive(_id, noteDispatch)}
            />
          </span>
          <span className="note-card-footer-icon">
            <MdOutlineDelete
              onClick={() => deleteFromArchive(_id, noteDispatch)}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export { ArchiveCard };

import React from "react";
import {
  MdOutlineUnarchive,
  MdOutlineDelete,
  MdOutlineRestoreFromTrash,
} from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
// import "./note-card.css";

function TrashCard() {
  return (
    <div className="note-card flex-col-center">
      <div className="note-card-header flex-row-center">
        <h3 className="note-card-title">Trash Card</h3>
        <span className="note-card-pinned">
          <BsPinAngle />
        </span>
      </div>

      <div className="note-card-body">
        In web applications, all the data you show on the page should reside
        somewhere, for example, cache, database, storage account, etc.{" "}
      </div>
      <div className="card-label-priority">
        <span className="note-card-label">Label 2</span>
        <span className="note-card-priority">priority</span>
      </div>
      <div className="note-card-footer flex-row-center">
        <p className="note-card-created">created on 21may</p>
        <div className="note-card-footer-icons flex-row-center">
          <span>
            <MdOutlineUnarchive />
          </span>
          <span>
            <MdOutlineRestoreFromTrash />
          </span>
          <span>
            <MdOutlineDelete />
          </span>
        </div>
      </div>
    </div>
  );
}

export { TrashCard };

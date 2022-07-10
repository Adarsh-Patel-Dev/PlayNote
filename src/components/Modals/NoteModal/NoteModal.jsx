import React, { useState } from "react";
import {
  MdClose,
  MdOutlineColorLens,
  MdLabelOutline,
  MdAddCircleOutline,
} from "react-icons/md";
import { useNoteContext } from "../../../Context/noteContext";
import { RichTextEditor } from "../../RichTextEditor/RichTextEditor";
import "./modal.css";

function NoteModal() {

  let {
    noteState,
    noteDispatch,
    title,
    priority,
    textareaValue,
    label,
    addNote,
    editNote,
    notesBgColor,
    noteModal,
    isEdit,
  } = useNoteContext();

  return (
    <div
      style={{ display: noteModal ? "block" : "none" }}
      defaultValue="#FFFF"
      className="modal--container"
    >
      <div
        id="myModal"
        className="modal"
        style={{ backgroundColor: notesBgColor }}
      >
        <form onSubmit={isEdit ? editNote : addNote}>
          <div className="modal-content">
            <MdClose
              onClick={() => {
                noteDispatch({ type: "NOTE_MODAL", payload: false });
                noteDispatch({ type: "CLEAR_INPUT" });
                noteDispatch({ type: "IS_EDIT", payload: false });
              }}
              className="close"
            ></MdClose>

            <div className="modal-body">
              <div className="flex-col-center gap-1rem-start">
                <p className="modal-title">Title</p>
                <input
                  placeholder="enter title of note"
                  value={noteState.title}
                  required
                  onChange={(e) =>
                    noteDispatch({ type: "TITLE", payload: e.target.value })
                  }
                  className="input"
                />
              </div>

              <p className="modal-title">Description</p>

              <div>
                <RichTextEditor textAreaValue={textareaValue} />
              </div>

              <div className="flex-col-center gap-1rem-start">
                <p className="modal-title">Label</p>
                <div className="flex-row-center flex-start">
                  <label key="low" htmlFor="low" className="label">
                    <input
                      type="radio"
                      name="label"
                      required
                      className=""
                      id="low"
                      checked={label === "home"}
                      onChange={() =>
                        noteDispatch({ type: "LABEL", payload: "home" })
                      }
                    />
                    <p className="label">Home</p>
                  </label>
                  <label key="medium" htmlFor="medium" className="label">
                    <input
                      type="radio"
                      name="label"
                      required
                      className=""
                      id="medium"
                      checked={label === "office"}
                      onChange={() =>
                        noteDispatch({ type: "LABEL", payload: "office" })
                      }
                    />
                    <p className="label">Office</p>
                  </label>
                  <label key="high" htmlFor="high" className="label">
                    <input
                      type="radio"
                      name="label"
                      required
                      className=""
                      id="high"
                      checked={label === "school"}
                      onChange={() =>
                        noteDispatch({ type: "LABEL", payload: "school" })
                      }
                    />
                    <p className="label">School</p>
                  </label>
                </div>
              </div>

              <div className="flex-col-center gap-1rem-start">
                <p className="modal-title">Priority</p>
                <div className="flex-row-center flex-start">
                  <label key="low" htmlFor="low" className="label">
                    <input
                      type="radio"
                      name="priority"
                      required
                      value={1}
                      className=""
                      id="low"
                      checked={priority === "low"}
                      onChange={() =>
                        noteDispatch({ type: "PRIORITY", payload: "low" })
                      }
                    />
                    <p className="label">low</p>
                  </label>
                  <label key="medium" htmlFor="medium" className="label">
                    <input
                      type="radio"
                      name="priority"
                      required
                      value={2}
                      className=""
                      id="medium"
                      checked={priority === "medium"}
                      onChange={() =>
                        noteDispatch({ type: "PRIORITY", payload: "medium" })
                      }
                    />
                    <p className="label">medium</p>
                  </label>
                  <label key="high" htmlFor="high" className="label">
                    <input
                      type="radio"
                      name="priority"
                      required
                      value={3}
                      className=""
                      id="high"
                      checked={priority === "urgent"}
                      onChange={() =>
                        noteDispatch({ type: "PRIORITY", payload: "urgent" })
                      }
                    />
                    <p className="label">high</p>
                  </label>
                </div>
              </div>

              <span className="color-pallete">
                <label htmlFor="create-color">
                  <input
                    type="color"
                    className="input-color"
                    id="create-color"
                    value={notesBgColor}
                    onChange={(e) =>
                      noteDispatch({
                        type: "NOTES_BG_COLOR",
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
              </span>
              <span className="color-picker-icon">
                <MdOutlineColorLens />
              </span>

              <input
                type="submit"
                value={isEdit ? "Update" : "Add Note"}
                style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
                className="submit-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export { NoteModal };

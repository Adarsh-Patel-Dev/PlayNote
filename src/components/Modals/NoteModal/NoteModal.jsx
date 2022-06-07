import React, { useState } from "react";
import { MdClose, MdOutlineColorLens  } from "react-icons/md";
import { useNoteContext } from "../../../Context/noteContext";
import { RichTextEditor } from "../../RichTextEditor/RichTextEditor";
import "./modal.css";

function NoteModal() {
  const [ColorModal, setColorModal] = useState(false);

 

  const { noteDispatch, title, priority, textareaValue, label, addNote, editNote, notesBgColor, noteModal, isEdit } = useNoteContext();

 console.log("is editttttttttt", isEdit)

  return (
    <div
      style={{ display: noteModal ? "block" : "none" , }} defaultValue="#FFFF"
      className="modal--container"
    >
      <div id="myModal" className="modal" style={{ backgroundColor:notesBgColor }} >
      <form onSubmit={isEdit?editNote:addNote}>
      {/* <form onSubmit={addNote}> */}
        <div className="modal-content">
          <MdClose
            onClick={() => {
              noteDispatch({ type: "NOTE_MODAL", payload: false });
              noteDispatch({ type: "CLEAR_INPUT" });
            }}
            className="close"
          ></MdClose>

          <div className="modal-body">
            <p className="modal-title">Title</p>
            <input
              placeholder="enter title of note"
              value={title}
              required
              onChange={(e) =>
                noteDispatch({ type: "TITLE", payload: e.target.value })
              }
              className="input"
            />

            <p className="modal-title">Labels</p>
            <div className="flex-row-center flex-start">
                <label key="home" htmlFor="home" className="label">
                  <input
                    type="radio"
                    name="label"
                    required
                    id="home"
                    checked={label === "home"}
                    onChange={() =>
                      noteDispatch({ type: "LABEL", payload: "home" })
                    }
                  />
                  <p className="label">home</p>
                </label>
                <label key="school" htmlFor="school" className="label">
                  <input
                    type="radio"
                    name="label"
                    required
                    id="school"
                    checked={label === "school"}
                    onChange={() =>
                      noteDispatch({ type: "LABEL", payload: "school" })
                    }
                  />
                  <p className="label">school</p>
                </label>
                <label key="office" htmlFor="office" className="label">
                  <input
                    type="radio"
                    name="label"
                    required
                    id="office"
                    checked={label === "office"}
                    onChange={() =>
                      noteDispatch({ type: "LABEL", payload: "office" })
                    }
                  />
                  <p className="label">office</p>
                </label>
            </div>

            <p className="modal-title">Priority</p>
            <div className="flex-row-center flex-start">
                <label key="low" htmlFor="low" className="label">
                  <input
                    type="radio"
                    name="priority"
                    required
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
                    className=""
                    id="high"
                    checked={priority === "high"}
                    onChange={() =>
                      noteDispatch({ type: "PRIORITY", payload: "high" })
                    }
                  />
                  <p className="label">high</p>
                </label>
            </div>

            <p className="modal-title">Description</p>
            {/* <textarea
              required
              className="modal-textarea"
              value={textareaValue}
              placeholder="enter description of note here"
              onChange={(e) =>
                noteDispatch({ type: "TEXTAREA", payload: e.target.value })
              }
            /> */}
           
            <div>
              <RichTextEditor textAreaValue={textareaValue}/>
            </div>

            <span className="color-pallete">
              {/* <input type="submit" className="asidebar-btn"/> */}
              <label htmlFor="create-color">
              <MdOutlineColorLens >colorLens</MdOutlineColorLens>
              <input
                type="color"
                className="input-color"
                id="create-color"
                value={notesBgColor}
                onChange={(e)=>noteDispatch({
                  type:"NOTES_BG_COLOR",
                  payload: e.target.value,
                })}
              />
              <span className="material-icons rte-icons1">
              
              </span>
              </label>
            </span>

            <input type="submit" 
            value={isEdit?"Update":"Add Note"}
             style={{position: "absolute",bottom: "1rem",right: "1rem"}}
              className="submit-btn"
            />

            {/* <div className="modal--btn">
              {true ? (
                <button
                  className="btn-modal"
                  onClick={() =>
                    addToNotes(notesState, label, priority, noteDispatch)
                  }
                >
                  ADD Note
                </button>
              ) : (
                <button
                  className="btn-modal"
                  onClick={(e) =>
                    editNotes(e, notesState, label, priority, noteDispatch)
                  }
                >
                  EDIT Note
                </button>
              )}
            </div> */}
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export { NoteModal };

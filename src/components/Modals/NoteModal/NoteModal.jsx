import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNoteContext } from "../../../Context/noteContext";
import "./modal.css";

function NoteModal() {

 const [ ColorModal, setColorModal] = useState(false)

 const { notesState, notesDispatch, addToNotes, editNotes , deleteNote } = useNoteContext();

 const { title, description, label, priority, noteId, backgroundColor, isModalOpen } = notesState;

 const labels = ['home', 'school', 'college'];
 const priorities = ['low', 'medium', 'high'];

 console.log(title, description, label, priority)
  
  return (
    <div style={{ display: (isModalOpen ? "block": "none") }} className="modal--container">
      <div id="myModal" className="modal">
        <div className="modal-content">
          <MdClose onClick={()=>{
            notesDispatch({type:"SHOW_MODAL", payload: false });
            notesDispatch({type:"CLEAR_INPUT"})
          }} className="close"></MdClose>

          <div className="modal-body">
            <p className="modal-title">Title</p>
            <input placeholder="enter title of note" 
            value={title} required
            onChange={(e)=>notesDispatch({type:"TITLE", payload:e.target.value })}
            className="input"/>

            <p className="modal-title">Labels</p>
            <div className="flex-row-center flex-start">
            {
              labels.map((label)=>(
                <label key={label} htmlFor={label} className="label">
                    <input 
                    type="radio"
                    name="label"
                    id={label}
                    checked = {label === label}
                    onChange={()=>notesDispatch({ type:"LABEL", payload:label })
                    }

                    /> 
                <p  className="label">{label}</p>
                </label>
                
              ))
            }
              
                </div>
                

            <p className="modal-title" >Priority</p>
            <div className="flex-row-center flex-start">
               {
                 priorities.map((priority)=>(
                   <label key={priority}
                   htmlFor={priority}
                   className="label">
                     <input 
                     type="radio"
                     name="priority"
                     className = ""
                     id={priority}
                     checked={ priority===priority }
                     onChange={()=>
                       notesDispatch({ type:"PRIORITY", payload:priority })
                     }
                     />
                    <p className="label">{priority}</p>
                     
                   </label>
                 ))
               }
               
               
                
            </div>
            <p className="modal-title">Description</p>
            <textarea 
            required
            className="modal-textarea"
            value={description}
            placeholder="enter description of note here"
            onChange={(e)=> notesDispatch({type:"DESCRIPTION", payload:e.target.value})}  
            />

            <div className="modal--btn">

            {
              true?(
                <button 
                className="btn-modal"
                onClick={()=>addToNotes(notesState,label,priority,notesDispatch)}>ADD Note</button>
              ): (
                <button 
                className="btn-modal"
                onClick={(e)=>editNotes(e,notesState,label,priority,notesDispatch)}>EDIT Note</button>
              )
            }
            
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export { NoteModal };

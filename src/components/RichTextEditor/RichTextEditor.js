import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNoteContext } from "../../Context/noteContext";
import "./richTextEditor.css"

function RichTextEditor() {
    const { textAreaValue, noteDispatch } = useNoteContext();
  return (
    <div>
       <ReactQuill
       theme="snow"
       required
       value={ textAreaValue } 
       onChange={(event) => noteDispatch({
           type: "TEXTAREA",
           payload: event.target.value || "",
       })
       }    
       className = "editor"
       />
    </div>
  )
}

export { RichTextEditor }
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNoteContext } from "../../Context/noteContext";
import "./richTextEditor.css"

function RichTextEditor({textAreaValue}) {
    const { noteState, noteDispatch } = useNoteContext();
    // const { textAreaValue } = noteState;
   
    const modules = {
      toolbar: [
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{ 'color': [] }, { 'background': [] }],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
      ],
  }

  return (
    <div>
       <ReactQuill
       modules={modules}
       required
       value={ textAreaValue || '' } 
       onChange={(event) => noteDispatch({
           type: "TEXTAREA",
           payload: event ,
       })
       }    
       className = "editor"
       />
    </div>
  )
}

export { RichTextEditor }
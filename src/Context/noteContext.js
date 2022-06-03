import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, createContext, useContext } from "react";
import { useReducer } from "react";
import { v4 as uuid } from "uuid"

const NoteContext = createContext();
const useNoteContext = () => useContext(NoteContext);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwMzA4ZDA3NC1iY2RkLTRjMTEtYmVkOS0wMzhhZWRhZmM0ZjciLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.yj4z6vXmZHq66VSH7-pQ9JoPjZR6WJcVgDKejj3vJfk" ;

localStorage.setItem("token", token);

function NotesProvider({ children }) {

    function noteReducer( state, action ){
        switch(action.type){
            case "GET_NOTES":
                return { ...state, getNotes: action.payload }
            case "POST_NOTES":
                return { ...state, postNotes: action.payload }
            case "TITLE":
                return { ...state, title: action.payload }
            case "PRIORITY":
                return { ...state, priority: action.payload }
            case "LABEL":
                return { ...state, label: action.payload }
            case "TEXTAREA":
                return { ...state, textareaValue: action.payload }
            case "ADD_TO_NOTES":
                return { ...state, addToNotes: action.payload }

            case "ADD_TO_TRASH":
                return { ...state, trashNotes: action.payload }
            case "DELETE_FROM_TRASH":
                return { ...state, trashNotes: action.payload }

            case "ADD_TO_ARCHIVE":
                return { ...state, archiveNotes: action.payload }
            case "UNARCHIVE":
                return { ...state, archiveNotes: action.payload }

            case "NOTES_BG_COLOR":
                return { ...state, notesBgColor: action.payload }
            case "NOTE_MODAL":
                return { ...state, noteModal: action.payload }
            case "NOTE_CREATED_DATE":
                return { ...state, noteCreatedDate: action.payload }
            case "CLEAR_INPUT":
                return{ ...state, title:"", textareaValue:"", priority:"", label:"", notesBgColor:"#ffffff", }    

            default: return state;   
        }
    }
     const newDate  = new Date();
   

    const date = newDate.getDate() + "/" + (newDate.getMonth()+1) + "/" + newDate.getFullYear();

    const formattedMinutes = (newDate.getMinutes().length == 1 ? "0"+newDate.getMinutes(): newDate.getMinutes())

    const formattedHours = (newDate.getHours().length == 1 ? "0"+newDate.getHours(): newDate.getHours())

    const time = formattedHours + ":" + formattedMinutes ;
    const noteCreatedDate = date + " at " + time;
 

    const [ noteState, noteDispatch ] = useReducer( noteReducer, {
        getNotes:[],
        postNotes:[],
        addToNotes:[],
        archiveNotes:[],
        trashNotes:[],
        title:"",
        priority:"",
        label:"",
        textareaValue:"",
        notesBgColor:"#ffffff",
        noteModal:false,
        noteCreatedDate:"",
    } )
    
    const { 
        addToNotes,
        title,
        priority,
        label,
        textareaValue,
        notesBgColor,
        noteModal,
    } = noteState;

    console.log(addToNotes);


   async function getNotesData(){
       try{
           const response = await axios({
               method: "GET",
               url: "/api/notes",
               headers: { authorization: localStorage.getItem("token")},
           })
           if(response.status === 200){
            noteDispatch({ type: "GET_NOTES", payload: response.data.notes})
            console.log(response.data.notes)
           }
       } catch( error) {
           console.log(error)
       }
   }


   async function addNote(e){
        e.preventDefault();
        const note = {
        _id: uuid(),
        title,
        priority,
        label,
        textareaValue,
        notesBgColor,
        noteCreatedDate,
        };

        try{
           const reponse = await axios({
                method: "POST",
                url: "/api/notes/",
                headers: { authorization: localStorage.getItem("token") },
                data: { note },
            })
            if( reponse.status === 201){
                noteDispatch({ type:"ADD_TO_NOTES", payload:reponse.data.notes, })
                noteDispatch({ type:"CLEAR_INPUT", })
                noteDispatch({ type:"NOTE_MODAL", payload:false })
                console.log(reponse.data.notes)
            }

        } catch(error){
            console.log(error)
        }
   }

   function toggleNotes(){
       noteDispatch({
           type: "NOTE_MODAL",
           payload: true,
       })
   }

   useEffect(()=>{
       getNotesData();
   },[]);

   return (
       <NoteContext.Provider value={{
           addToNotes, noteDispatch, noteState, priority, label, textareaValue, addNote, notesBgColor, toggleNotes, noteModal,
       }}>
           {children}
       </NoteContext.Provider>
   );

}

export { useNoteContext, NotesProvider }

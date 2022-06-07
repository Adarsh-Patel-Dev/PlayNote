// import axios from 'axios';
// import React from 'react'
// import { useReducer, useContext, createContext} from 'react';
// import { useNoteContext } from './noteContext';


// const TrashContext = createContext();
// const useTrashContext = ()=> useContext(TrashContext);

// const { noteDispatch } = useNoteContext();

// function trashReducer( state, action ) {
//     switch(action.type){
//         case "GET_TRASH_NOTES":
//             return { ...state, trashNotes: action.payload }
//         case "ADD_TO_TRASH":
//             return { ...state, trashNotes: action.payload }
//         case "RESTORE_FROM_TRASH":
//             return { ...state, trashNotes: action.payload }
//         case "DELETE_FROM_TRASH":
//             return { ...state, trashNotes: action.payload }
//         default : return state;    
//     }
// }

// async function getTrashNotes(){
//     try{
//         const response = await axios({
//             method: "GET",
//             url: "/api/trash",
//             headers: { authorization: localStorage.getItem("token") },
//         })
//         if( response.status === 200){
//             trashDispatch({ type:"GET_TRASH_NOTES", payload: response.data.trash })
//             console.log(response.data.trash)
//         }
//     } catch(error){
//         console.log(error);
//     }
// }

// async function adddToTrash (_id){
//     try{
//         const response = await axios({
//             method:"POST",
//             url: `/notes/trash/${_id}`,
//             headers: { authorization: localStorage.getItem("token") },
//         })
//         if(response.status === 200 ){
//             trashDispatch({ type:"ADD_TO_TRASH", payload: response.data.trash})
//             noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes})
//             console.log("from trash", response.data.trash)
//             console.log("from trash ALLNOTES", response.data.notes )
//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// async function restoreFromTrash (_id){
//     try{
//         const response = await axios({
//             method:"POST",
//             url: `/api/trash/restore/${_id}`,
//             headers: { authorization: localStorage.getItem("token") },
//             data: {},
//         })
//         if(response.status === 200 ){
//             trashDispatch({ type:"ADD_TO_TRASH", payload: response.data.trash})
//             noteDispatch({ type: "ADD_TO_NOTES", payload: response.data.notes})
//             console.log("from trash", response.data.trash)
//             console.log("from trash ALLNOTES", response.data.notes )

//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// async function deleteFromTrash (_id){
//     try{
//         const response = await axios({
//             method:"DELETE",
//             url: `/api/trash/delete/${_id}`,
//             headers: { authorization: localStorage.getItem("token") },
//             data: {},
//         })
//         if(response.status === 200 ){
//             trashDispatch({ type:"ADD_TO_TRASH", payload: response.data.trash})
//             console.log("from trash", response.data.trash)
//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// function TrashProvider({children}) {

//     const [trashState, trashDispatch ] = useReducer( trashReducer, { trashNotes:[] })

//   return (
//     <TrashContext.Provider value={{ trashState, trashDispatch, getTrashNotes, adddToTrash, restoreFromTrash, deleteFromTrash }}>
//         {children}
//     </TrashContext.Provider>
//   )
// }

// export { useTrashContext, TrashProvider }
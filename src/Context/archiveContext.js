// import axios from 'axios';
// import React from 'react'
// import { useReducer, useContext, createContext} from 'react';
// import { useNoteContext } from './noteContext';


// const ArchiveContext = createContext();
// const useArchiveContext = ()=> useContext(ArchiveContext);

// const { noteDispatch } = useNoteContext();

// function archiveReducer( state, action ) {
//     switch(action.type){
//         case "GET_ARCHIVE_NOTES":
//             return { ...state, archiveNotes: action.payload }
//         case "ADD_TO_ARCHIVE":
//             return { ...state, archiveNotes: action.payload }
//         case "RESTORE_FROM_ARCHIVE":
//             return { ...state, archiveNotes: action.payload }
//         case "DELETE_FROM_ARCHIVE":
//             return { ...state, archiveNotes: action.payload }
//         default : return state;    
//     }
// }

// async function getArchiveNotes(noteDispatch){
//     try{
//         const response = await axios({
//             method: "GET",
//             url: "/api/archives",
//             headers: { authorization: localStorage.getItem("token") },
//         });
//         if( response.status === 200){
//             noteDispatch({ type:"GET_ARCHIVE_NOTES", value: response.data.archives })
//             console.log(response.data.archives)
//         }
//     } catch(error){
//         console.log(error);
//     }
// }

// async function adddToArchive (note,noteDispatch){
//     try{
//         const response = await axios({
//             method:"POST",
//             url: `api/notes/archives/{note._id}`,
//             headers: { authorization: localStorage.getItem("token") },
//             data: { note: note}
//         })
//         if(response.status === 200 ){
//             noteDispatch({ type:"ADD_TO_ARCHIVE", value: response.data.archives})
//             noteDispatch({ type: "ADD_TO_NOTES", value: response.data.notes})
//             console.log("from archive ALLnotes",response.data.notes)
//             console.log("from archive",response.data.archives)
//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// async function restoreFromArchive (note, noteDispatch){
//     try{
//         const response = await axios({
//             method:"POST",
//             url: `/api/archives/restore/{note._id}`,
//             headers: { authorization: localStorage.getItem("token") },
            
//         })
//         if(response.status === 200 ){
//             noteDispatch({ type:"RESTORE_FROM_ARCHIVE", value: response.data.archives })
//             noteDispatch({ type: "ADD_TO_NOTES", value: response.data.notes})
//             console.log("from archive",response.data.archives)
//             console.log("from archive ALLnotes",response.data.notes)

//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// async function deleteFromArchive (note, noteDispatch){
//     try{
//         const response = await axios({
//             method:"DELETE",
//             url: `/api/archives/delete/{note._id}`,
//             headers: { authorization: localStorage.getItem("token") },
            
//         })
//         if(response.status === 200 ){
//             noteDispatch({ type:"DELETE_FROM_ARCHIVE", value: response.data.archives })
//             console.log("from archive",response.data.archives)

//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// function ArchiveProvider({children}) {


//     const [ archiveState, archiveDispatch ] = useReducer( archiveReducer, { archiveNotes:[] })

//   return (
//     <ArchiveContext.Provider value={{  archiveState, archiveDispatch, getArchiveNotes, adddToArchive, restoreFromArchive, deleteFromArchive }}>
//         {children}
//     </ArchiveContext.Provider>
//   )
// }

// export { useArchiveContext, ArchiveProvider }
import React from 'react'
import { Asidebar } from '../../components/Asidebar/Asidebar'
import { Navbar } from '../../components/Navbar/Navbar'
import { NoteCard } from '../../components/Card/NoteCard/NoteCard'
import { Searchbar } from '../../components/Searchbar/Searchbar'
import { TrashCard } from '../../components/Card/TrashCard/TrashCard'
import { ArchiveCard } from '../../components/Card/ArchiveCard/ArchiveCard'
import { useNoteContext } from '../../Context/noteContext'

function HomePage() {

  const { notesState }  = useNoteContext();
  const { 
    user,
    notes,
    noteId,
    title,
    description,
    backgroundColor,
    label,
    priority,
    isModalOpen,
    
   } = notesState
  return (
    <div>
     <Navbar/>
     <div className='main-section'>
     < Asidebar/>
      <div className='main-content flex-col-center'>
          <Searchbar/>
          <div className='notecard-conatiner flex-row-center'>
          {
            notes.map((note)=>(
              <NoteCard/>
            ))
          }
          </div>
      </div>
     </div>
    </div>
  )
}

export { HomePage }
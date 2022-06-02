import React from 'react'
import { Asidebar } from '../../components/Asidebar/Asidebar'
import { Navbar } from '../../components/Navbar/Navbar'
import { Searchbar } from '../../components/Searchbar/Searchbar'
import { ArchiveCard } from '../../components/Card/ArchiveCard/ArchiveCard'

function ArchivePage() {
  return (
    <div>
     <Navbar/>
     <div className='main-section'>
     < Asidebar/>
      <div className='main-content flex-col-center'>
          <Searchbar/>
          <div className='notecard-conatiner flex-row-center'>
          <ArchiveCard/>
          </div>
      </div>
     </div>
    </div>
  )
}

export { ArchivePage }
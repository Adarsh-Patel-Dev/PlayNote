import React from 'react'
import { Asidebar } from '../../components/Asidebar/Asidebar'
import { Navbar } from '../../components/Navbar/Navbar'
import { Searchbar } from '../../components/Searchbar/Searchbar'
import { TrashCard } from '../../components/Card/TrashCard/TrashCard'

function TrashPage() {
  return (
    <div>
     <Navbar/>
     <div className='main-section'>
     < Asidebar/>
      <div className='main-content flex-col-center'>
          <Searchbar/>
          <div className='notecard-conatiner flex-row-center'>
          <TrashCard/>
          </div>
      </div>
     </div>
    </div>
  )
}

export { TrashPage }
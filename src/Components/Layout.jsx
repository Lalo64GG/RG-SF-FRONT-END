import React from 'react'
import { Nav } from './Molecules/Nav'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
   <div>
     <div className='shadow-lg border-black border-b-2 border-dashed'>
        <Nav/>
      
    </div>
    <main className='px-10 '>
        <Outlet/>
    </main>
   </div>
  )
}

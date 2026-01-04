import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assests'
import AlbumItem from './AlbumItem'
import { songsdata } from '../assets/assests'
import SongItem  from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)) }
     
         </div>
      </div>

     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
        <div className='flex overflow-auto'>
        {songsdata.map((item,index)=>(<SongItem key={index} desc={item.desc} image={item.image} name={item.name} id={item.id}/>))}
         </div>
      </div>
    </>
  )
}

export default DisplayHome

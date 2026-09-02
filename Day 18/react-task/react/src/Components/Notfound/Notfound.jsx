import React from 'react'
import error from '../../assets/page.png'
export default function NotFound() {
  return (
    <div className="container mt-5 p-5 text-center">
      
     <img src={error} alt="notfoundpage" className='w-80'/>
    </div>
  )
}
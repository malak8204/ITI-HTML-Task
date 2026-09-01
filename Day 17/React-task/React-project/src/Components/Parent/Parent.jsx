import React, { useState } from 'react'
import Child from '../Child/Child'   
export default function Parent() {
  let [userName, setUserName] = useState('Malak');
  let [user, setuser] = useState({id:1,Name: 'Menna', role: 'frontend', experienced: true})
  return (
    <>
      <h1 className='bg-danger text-light text-center p-4'>Parent</h1>
      <h3 className='bg-warning text-dark text-center my-2 p-3'>User Name: {userName}</h3>
      <Child userName={userName} Employeedetails={user}/>
    </>
  )
}

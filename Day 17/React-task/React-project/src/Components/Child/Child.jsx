import React from 'react'
export default function Child({Employeedetails}) {

  let {Name, role, experienced} = Employeedetails

  return (
    <>
      <h1 className='bg-secondary text-light text-center p-4'>Child</h1>
      <h3 className='text-center'>Employee details</h3>
      <h4>Employee Name: {Name}</h4>
      <h4>Employee Role: {role}</h4>
      <h4>Employee Experience: {experienced == true ? 'Experienced' : 'Not Experienced'}</h4>
    </>
  )
}
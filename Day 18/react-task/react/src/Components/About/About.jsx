import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <nav style={{ gap: '90px', display: 'flex', marginBottom: '20px',padding:'3vh' ,justifyContent: 'center'}}>
        <Link to="team">Our Team</Link>
        <Link to="company">Our Company</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export function Team() {
  return <h4>Nested Child: Meet Our Team</h4>
}

export function Company() {
  return <h4>Nested Child: About Our Company</h4>
}
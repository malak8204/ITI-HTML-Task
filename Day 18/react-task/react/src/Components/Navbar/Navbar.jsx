import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '25px', padding: '15px', background: '#eee' }}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/send">Send</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
   <div className="navbar bg-base-100 shadow-sm ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Persona</a>
  </div>
  <div className="flex-none">
     <a
            href="https://github.com/GauravSharma1711/Persona"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-square btn-ghost"
          >
            <IoLogoGithub size={26} />
          </a>
  </div>
</div>
</>
  )
}

export default Navbar
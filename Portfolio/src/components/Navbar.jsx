import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">
          Muhammad Shah Nawaz
        </h1>
        <ul>
          <li>
            <NavLink to = '/'
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "hover:text-cyan-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "hover:text-cyan-400"
              }
            >
              About
            </NavLink>

          </li>
          <li>
            <NavLink to='/projects'
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "hover:text-cyan-400"
              }
            >
              Projects
            </NavLink>

          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "hover:text-cyan-400"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>


      </nav>

    </div>
  )
}

export default Navbar
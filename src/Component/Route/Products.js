import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
        <input placeholder='search'></input>
        <button>search</button>
    
    <nav>
        <NavLink to='featured'>Featured</NavLink>
        <NavLink to='new'>New</NavLink>


    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Products
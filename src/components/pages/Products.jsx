import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <NavLink style = {{marginRight: "10px"}}> Product ID 123456</NavLink>
      <NavLink style = {{marginRight: "10px"}}>Product ID 12345</NavLink>
      <NavLink style = {{marginRight: "10px"}}> Product ID 342534</NavLink>
    </div>
  )
}

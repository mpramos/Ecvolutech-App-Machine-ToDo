import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
const Nav = styled.nav`
           background-color : aqua ;
`
const Li= styled.li`
            background-color: cadetblue;
`

export default function Navbar() {
  return (
    <>
    <Nav>
        <Link to={"/login"}>Login</Link>
        <li>Cosa 1</li>
        <Li>Cosa 2</Li>
        <Li>Cosa 2</Li>
        <Li>Cosa 2</Li>
        <Li>Cosa 2</Li>
        <Li>Cosa 2</Li>
        <Li>Cosa 2</Li>
        
    </Nav>
        
    </>
  )
}

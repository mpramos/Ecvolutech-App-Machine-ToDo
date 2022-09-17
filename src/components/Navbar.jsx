import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {authContext} from '../context/AuthContext';
const Nav = styled.nav`
  background-color: aqua;
`;
const Li = styled.li`
  background-color: cadetblue;
  border: 1px solid red;
`;
export default function Navbar() {
  const {user}=useContext(authContext)
  return (
    <>
      <Nav>
        <ul>
          <Li>
            <Link to={"/login"}>Login</Link>
          </Li>
         
          <Li>{user.data?.email || "No hay autorización"}</Li>
        </ul>
      </Nav>
    </>
  );
}

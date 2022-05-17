import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

interface Props {

}

export const NavbarContent = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: #008CBA;
    margin: 0px;
    width: 100%;
    font-size: 3vw;
`

export function Navbar(props: Props) {
    return (
    <NavbarContent>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: "15px",
            color: isActive ? "#FE5D26" : "white",
            display: "inline-block",
            textWeight: isActive ? "bold" : "normal",
            textDecoration: "none"
          };
        }}
        to={`/characters`}
        key={'characters'}
      >
        All Characters
      </NavLink>
            <NavLink
            style={({ isActive }) => {
              return {
                margin: "1rem 0",
                color: isActive ? "#FE5D26" : "white",
                display: "inline-block",
                textWeight: isActive ? "bold" : "normal",
                textDecoration: "none"
              };
            }}
            to={`/favourite-characters`}
            key={'favourite-characters'}
          >
            Favourite Characters
          </NavLink>
    </NavbarContent>
    )
}
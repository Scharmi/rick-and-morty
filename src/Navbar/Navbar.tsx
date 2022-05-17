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
    background-color: #131A22;
`

export function Navbar(props: Props) {
    return (
    <div>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: "15px",
            color: isActive ? "red" : "",
            display: "inline-block"
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
                color: isActive ? "red" : "",
                display: "inline-block"
              };
            }}
            to={`/favourite-characters`}
            key={'favourite-characters'}
          >
            Favourite Characters
          </NavLink>
    </div>
    )
}
import React from 'react';
import './App.css';
import {
  Outlet
} from "react-router-dom";
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import styled from 'styled-components'

const SetFont = styled.span`
    font-family: Arial;
`

function App() {
  return (
    <SetFont>  
      <Navbar/>
      <Outlet/>
      <Footer/>
    </SetFont>
  );
}

export default App;

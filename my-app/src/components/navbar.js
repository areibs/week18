import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotificationBadge from './badge';
import HomePage from "./homePage";
import {Route, Routes, Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Spotify</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link href="#home">Home </Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="#yourLibrary">Your Library</Nav.Link><NotificationBadge/>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavigationBar;
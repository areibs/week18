import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage";
import Search from "./components/search";
import Songs from "./components/songs";
import NavigationBar from "./components/navbar";
import Notifications from "./components/notifications";
import SongLibrary from "./components/songLibrary";

import './App.css';



function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/songs">Your Library</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/songs" element={<SongLibrary />} />
      </Routes>
    </>
  
);

}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from '@mui/material'

// ? components
import Navbar from "./components/Navbar"
import VideoDetail from "./components/VideoDetail"
import SearchFeed from "./components/SearchFeed"
import Feed from "./components/Feed"
import ChannelDetail from './components/ChannelDetail';
import SearchBar from './components/SearchBar';


const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/video/:id" element={<VideoDetail />}/>
            <Route path="/chanel/:id" element={<ChannelDetail />}/>
            <Route path="/search/:searchTerm" element={<SearchFeed />}/>
          </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App
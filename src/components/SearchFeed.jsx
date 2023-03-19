import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material'

import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([])
  useEffect(() =>{ 
    setVideos([])
    const data = fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data?.items) )
  }, [searchTerm])

  return (
      <Box p={2} sx={{
        overflowY:'auto',
        height: '90ch', 
        flex: 2
      }}>
        <Typography 
          variant='h4' 
          fontWeight='bold' 
          mb={2} 
          sx={{
            color: 'white'
          }}>
          Search result for: <span style={{ color: "#FC1503" }}> {searchTerm} </span>  videos
        </Typography>
        <Videos videos={videos}/>
      </Box>

  )
}

export default SearchFeed
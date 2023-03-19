import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'



const SearchBar = () => {
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    const onhandleSubmit = (e) => {
        e.preventDefault()

        if(searchText){
            navigate(`/search/${searchText}`)
            setSearchText('')
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={(e) => onhandleSubmit(e)}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5}
            }} 
        >
            <input 
                className='search-bar'
                placeholder='Search...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <IconButton
                type='submit'
                sx={{
                    p: '10px',
                    color: 'red'
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
import React from 'react';
import './Search.css';
//import { SearchIcon } from '@material-ui/icons/Search';
 import SearchIcon from '@material-ui/icons/Search';
 import MicIcon from '@material-ui/icons/Mic';

 import Button from '@material-ui/core/Button';
// or
//import { Button } from '@material-ui/core';

function Search() {
    const search = e  => {
        e.preventDefault();
    }
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>

                    <input/>

                    <MicIcon/>

                

            </div>
            <div className='search__buttons'>
                <Button onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'am Feeling Lucky</Button>

            </div>
            
        </div>
    )
}

export default Search

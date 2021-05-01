import React from 'react';
import './Search.css';
//import { SearchIcon } from '@material-ui/icons/Search';
 import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon'>

                    <input/>

                </SearchIcon>

            </div>
            
        </div>
    )
}

export default Search

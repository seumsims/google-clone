import React from 'react'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'

function SearchPage() {
    // eslint-disable-next-line
    const [{ term }, dispatch] = useStateValue();
    return (

        // https://developers.google.com/custom-search/v1/overview

        // https://cse.google.com/cse/create/new

        <div className='searchPage'>
            <div className='searchPage__header'>
                <h1>{term}</h1>
            </div>

        <div className='searchPage__results'>
            
        </div>
            
        </div>
    )
}

export default SearchPage

import React from 'react'
import { useStateValue } from '../StateProvider'
// eslint-disable-next-line
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css'
import Response from './response'
import { Link } from 'react-router-dom';

function SearchPage() {
    // eslint-disable-next-line
    const [{ term }, dispatch] = useStateValue();
    //Live API Call
    //const { data } = useGoogleSearch(term);
    const data = Response
    console.log(data);

    return (

        // https://developers.google.com/custom-search/v1/overview

        // https://cse.google.com/cse/create/new

        

        <div className='searchPage'>
            <div className='searchPage__header'>
                {/* <h1>{term}</h1> */}
                <Link to="/">
                <img className="searchPage__logo"
                 src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google-logo"/>
                </Link>
            </div>

        <div className='searchPage__results'>
            
        </div>
            
        </div>
    )
}

export default SearchPage
